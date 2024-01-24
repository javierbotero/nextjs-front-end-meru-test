'use client'

import React, { useState } from 'react'
import {
  useSelector,
  selectProducts,
  addProductAsync,
  useDispatch
} from '@/lib/redux'
import Link from 'next/link'
import Form from '@/components/Form'
import { localFetch } from '@/lib/helpers/localFetch'
import { API_URL } from '@/lib/helpers/utilities'

import type { Product } from '@/lib/redux'

export default function Products () {
  const [showFormCreate, setShowFormCreate] = useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector(selectProducts).map(product => {
    return (
      <li key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Link href={`/${product.id}`}>Editar</Link>
      </li>
    )
  })
  const onSubmitCreate = async (product: Product) => {
    const result = await dispatch(addProductAsync(product))
    if (result.type.match(/fulfilled/)) { setShowFormCreate(false) }
  }

  return (
    <div>
      <h3>Create a Product</h3>
      <div>
        {showFormCreate
        ? <Form name='' description='' price={0} onSubmit={onSubmitCreate} />
        : <button onClick={() => setShowFormCreate(true)}>Crea un Producto</button>}
      </div>
      <h3>Products</h3>
      <div>{products}</div>
    </div>
  )
}