import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import FieldForm from './FieldForm'

type Inputs = {
  name: string
  description: string
  price: number
}

export default function Form (
  { name, description, price, onSubmit }:
  { name: string, description: string, price: number, onSubmit: any }
): JSX.Element {
  const [sent, setSent] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    const result = await onSubmit(data)
    if (result) { setSent(true) }
  }

  return (
    <div>
      {sent
      ? <div>Enviado exitosamente</div>
      : <form onSubmit={handleSubmit(onSubmitForm)}>
          <FieldForm
            label='Nombre'
            property='name'
            defaultValue={name}
            register={register}
            validations={{ required: true, minLength: 4 }}
            errors={errors}
            errorTypes={
              {
                required: 'El nombre es obligatorio',
                minLength: 'El nombre debe tener al menos 4 caracteres'
              }
            }
          />
          <FieldForm
            label='Descripcion'
            property='description'
            defaultValue={description}
            register={register}
            validations={{ required: true, minLength: 4 }}
            errors={errors}
            errorTypes={
              {
                required: 'La descripcion es obligatoria',
                minLength: 'La descripcion debe tener al menos 4 caracteres'
              }
            }
          />
          <FieldForm
            label='Precio'
            property='price'
            defaultValue={price}
            register={register}
            validations={{ required: true, min: 10 }}
            errors={errors}
            errorTypes={
              {
                required: 'El precio es obligatorio',
                min: 'El precio debe ser mayor a 10 pesos'
              }
            }
          />
          <input type='submit' />
        </form>
      }
    </div>
  )
}
