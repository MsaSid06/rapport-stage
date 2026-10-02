import { useState } from 'react'
import type { Notification, TypeNotification } from '../types/notification'
export function utiliserNotification() {
  const [notification, setNotification] = useState<Notification | null>(null)
  function notifier(message: string, type: TypeNotification = 'succes') { setNotification({ message, type }) }
  function effacer() { setNotification(null) }
  return { notification, notifier, effacer }
}
