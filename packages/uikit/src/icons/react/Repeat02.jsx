import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRepeat02 = (props, ref) => {
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
        d="M7.33325 1.33325L9.33325 3.33325M9.33325 3.33325L7.33325 5.33325M9.33325 3.33325H4.53325C3.41315 3.33325 2.85309 3.33325 2.42527 3.55124C2.04895 3.74299 1.74299 4.04895 1.55124 4.42527C1.33325 4.85309 1.33325 5.41315 1.33325 6.53325V10.3333C1.33325 10.6429 1.33325 10.7977 1.35036 10.9276C1.46852 11.8251 2.17473 12.5313 3.0722 12.6495C3.20217 12.6666 3.35697 12.6666 3.66659 12.6666M6.66659 12.6666H11.4666C12.5867 12.6666 13.1467 12.6666 13.5746 12.4486C13.9509 12.2569 14.2569 11.9509 14.4486 11.5746C14.6666 11.1467 14.6666 10.5867 14.6666 9.46659V5.66659C14.6666 5.35697 14.6666 5.20217 14.6495 5.0722C14.5313 4.17473 13.8251 3.46852 12.9276 3.35036C12.7977 3.33325 12.6429 3.33325 12.3333 3.33325M6.66659 12.6666L8.66659 14.6666M6.66659 12.6666L8.66659 10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRepeat02)
const Repeat02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Repeat02', props.className].join(' ')}
    />
  )
})
Repeat02.displayName = 'IconRepeat02'
export default Repeat02
