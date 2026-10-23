import DOMPurify from 'dompurify'
import { useState, useRef, useEffect } from 'react'

import { IconAlertCircle } from '../../icons/index.js'
import { Alert, AlertProps } from '../../primitive/index.js'

export interface FormErrorMessageProps extends Omit<AlertProps, 'children'> {
  message: string
  onDismiss?: () => void
  autoScroll?: boolean // auto scroll to view
  closable?: boolean
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  message,
  onDismiss,
  autoScroll,
  closable = false,
  ...rest
}) => {
  const bottomRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!autoScroll) return
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [autoScroll, message])

  useEffect(() => {
    setShow(true)
  }, [message])

  if (!message || !show) {
    return null
  }

  return (
    <Alert
      withCloseButton={Boolean(onDismiss) || closable}
      color="red"
      icon={<IconAlertCircle />}
      onClose={() => {
        setShow(false)
        onDismiss?.()
      }}
      {...rest}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(message, {
            ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'span', 'strong', 'ul'],
            ALLOWED_ATTR: ['href', 'title'],
            ALLOW_ARIA_ATTR: false,
            ALLOW_DATA_ATTR: false,
            ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          })
        }}
      />
      <div ref={bottomRef} />
    </Alert>
  )
}

FormErrorMessage.displayName = 'HookFormErrorMessage'
