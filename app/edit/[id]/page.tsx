import React from 'react'
import EditForm from '@/components/EditForm'

export default function EditPage (
  { params: { id } }: { params: { id: string } }
): JSX.Element {
  return (
    <EditForm id={id}/>
  )
}