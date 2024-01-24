import React from 'react'
import Link from 'next/link'
import { useDispatch, deleteProductAsync, notificationMessage } from '@/lib/redux'

import type { Product } from '@/lib/redux'

export default function Product (
  { product }: { product: Product }
): JSX.Element {
  const dispatch = useDispatch()
  const deleteProduct = async () => {
    const result = await dispatch(deleteProductAsync(product))
    if (result.type.match(/fulfilled/)) {
      dispatch(notificationMessage('Producto Eliminado'))
    }
  }
  return (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link href={`/edit/${product.id}`}>Editar</Link>
      <button onClick={deleteProduct}>Eliminar</button>
    </li>
  )
}