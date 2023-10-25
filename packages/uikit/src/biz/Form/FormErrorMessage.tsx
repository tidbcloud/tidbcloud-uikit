import DOMPurify from 'dompurify'
import { useState, useRef, useEffect } from 'react'

import { IconAlertCircle } from '../../icons'
import { Alert, AlertProps } from '../../primitive'

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
      {/* trick for displaying error message with html tags like <a></a> */}
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />
      <div ref={bottomRef} />
    </Alert>
  )
}

FormErrorMessage.displayName = 'HookFormErrorMessage'
