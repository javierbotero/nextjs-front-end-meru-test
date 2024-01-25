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
import Product from '@/components/Product'

import type { Product as ProductType } from '@/lib/redux'

export default function Products () {
  const [showFormCreate, setShowFormCreate] = useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector(selectProducts).map(product => {
    return (
      <Product product={product} />
    )
  })
  const onSubmitCreate = async (product: ProductType) => {
    const result = await dispatch(addProductAsync(product))
    if (result.type.match(/fulfilled/)) {
      setShowFormCreate(false)
      return true
    }
  }

  return (
    <div className='pb-20'>
      <div className='min-h-40 flex justify-center items-center'>
        {showFormCreate
        ? <Form name='' description='' price={0} onSubmit={onSubmitCreate} />
        : <button
            onClick={() => setShowFormCreate(true)}
            className='btn'
          >Crea un Producto</button>}
      </div>
      <div
        className='mt-6 grid grid-cols-1
          gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4
          xl:gap-x-8'
        >{products}</div>
    </div>
  )
}