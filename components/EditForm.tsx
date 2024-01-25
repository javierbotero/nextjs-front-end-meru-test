'use client'

import React, { useState } from 'react'
import {
  useSelector,
  selectProduct,
  useDispatch,
  editProductAsync
} from '@/lib/redux'
import Form from '@/components/Form'
import Link from 'next/link'

import type { Product } from '@/lib/redux'

export default function EditForm (
  { id }: { id: string }
): JSX.Element {
  const [sent, setSent] = useState<boolean>(false)
  const product = useSelector(state => selectProduct(state, parseInt(id, 10)))
  const dispatch = useDispatch()
  const onSubmit = async (product: Product) => {
    product.id = parseInt(id, 10)
    const result = await dispatch(editProductAsync(product))
    if (result.type.match(/fulfilled/)) {
      setSent(true)
      return true
    }
  }

  const form = product
    ? <Form
        name={product.name}
        description={product.description}
        price={product.price}
        onSubmit={onSubmit}
      />
    : <div>No se encontro el producto</div>

  return (
    <div>
      {sent
      ? <div className='min-h-96 flex flex-col items-center'>
          <div className='mt-auto mb-6'>Editado exitosamente</div>
          <Link href='/' className='btn mb-auto'>Volver a la lista de productos</Link>
        </div>
      : form
      }
    </div>
  )
}
