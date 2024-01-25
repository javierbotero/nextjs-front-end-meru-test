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
    <div className='group relative' key={product.id}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img src="https://images.autods.com/OfficialSite/New/20231009123226/20-Best-Selling-Auto-Parts-To-Start-Dropshipping-Today.png" alt="Autopart" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <div className='flex justify-between'>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <p className='font-medium'>{product.price}</p>
      </div>
      <div className='flex justify-between'>
        <Link
          href={`/edit/${product.id}`}
          className='btn'
        >Editar</Link>
        <button
          onClick={deleteProduct}
          className='text-red-600'
        >Eliminar</button>
      </div>
    </div>
  )
}