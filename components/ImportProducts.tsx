'use client'

import React, { useEffect } from 'react'
import { fetchProductsAsync, useDispatch } from '@/lib/redux'

export default function ImportProducts() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsAsync())
  })

  return <></>
}