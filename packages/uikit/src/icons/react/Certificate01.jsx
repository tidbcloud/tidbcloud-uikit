import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCertificate01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.33333 13.3335H3.33333C2.59695 13.3335 2 12.7365 2 12.0002V2.66683C2 1.93045 2.59695 1.3335 3.33333 1.3335H12.6667C13.403 1.3335 14 1.93045 14 2.66683V12.0002C14 12.7365 13.403 13.3335 12.6667 13.3335H11.6667M8 12.6668C9.10457 12.6668 10 11.7714 10 10.6668C10 9.56226 9.10457 8.66683 8 8.66683C6.89543 8.66683 6 9.56226 6 10.6668C6 11.7714 6.89543 12.6668 8 12.6668ZM8 12.6668L8.01429 12.6667L5.88578 14.7952L4.00016 12.9096L6.0131 10.8966M8 12.6668L10.1285 14.7952L12.0142 12.9096L10.0012 10.8966M6 4.00016H10M4.66667 6.3335H11.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCertificate01)
const Certificate01 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'Certificate01', props.className].join(' ')}
    />
  )
})
Certificate01.displayName = 'IconCertificate01'
export default Certificate01
