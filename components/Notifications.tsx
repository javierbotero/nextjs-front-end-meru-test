'use client'

import React from 'react'
import {
  showNotificationsError,
  showNotificationsMessage
} from '@/lib/helpers/errors'
import {
  useSelector,
  selectError,
  selectMessage
} from '@/lib/redux'

export default function Notifications() {
  const error = useSelector(selectError)
  const message = useSelector(selectMessage)
  return (
    <div>
      {showNotificationsError(error)}
      {showNotificationsMessage(message)}
    </div>
  )
}