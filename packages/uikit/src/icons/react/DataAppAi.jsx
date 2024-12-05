import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataAppAi = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.5 7.278 12 12m0 0L3.5 7.278M12 12v9.5m.201.335c-.133.028-.27.028-.402 0-.15-.03-.292-.11-.576-.267l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.058V7.941c0-.342 0-.514.05-.666a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111c.284-.158.425-.237.576-.268a1 1 0 0 1 .402 0c.15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666V11"
        strokeWidth="inherit"
      />
      <path
        fill="currentColor"
        d="M15.97 18.281a.75.75 0 0 0 0 1.5zm3.394 1.5a.75.75 0 0 0 0-1.5zm-5.069.837a.75.75 0 1 0 1.41.511zm3.245-6.745.696-.278a.75.75 0 0 0-1.401.023zm2.097 7.278a.75.75 0 1 0 1.393-.556zm3.113-7.278a.75.75 0 0 0-1.5 0zm-1.5 7a.75.75 0 0 0 1.5 0zm-5.28-1.092h3.394v-1.5H15.97zm-.265 1.348 2.54-7-1.41-.511-2.54 7zm1.138-6.978 2.794 7 1.393-.556-2.794-7zm4.407-.278v7h1.5v-7z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataAppAi)
const DataAppAi = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
DataAppAi.displayName = 'IconDataAppAi'
export default DataAppAi
