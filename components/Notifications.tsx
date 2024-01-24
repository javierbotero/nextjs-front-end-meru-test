'use client'

import React, { useEffect } from 'react'
import {
  showNotificationsError,
  showNotificationsMessage
} from '@/lib/helpers/errors'
import {
  useSelector,
  selectError,
  selectMessage,
  cleanError,
  cleanMessage,
  useDispatch
} from '@/lib/redux'

export default function Notifications() {
  const error = useSelector(selectError)
  const message = useSelector(selectMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error.length > 0) {
      const intervalError = setInterval(() => {
        dispatch(cleanError())
        clearInterval(intervalError)
      }, 5000, cleanError, dispatch)
    }
  }, [error])

  useEffect(() => {
    if (message.length > 0) {
      const intervalMessage = setInterval(() => {
        dispatch(cleanMessage())
        clearInterval(intervalMessage)
      }, 5000, cleanMessage, dispatch)
    }
  }, [message])

  return (
    <div>
      {showNotificationsError(error)}
      {showNotificationsMessage(message)}
    </div>
  )
}