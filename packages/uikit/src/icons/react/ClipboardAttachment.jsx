import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClipboardAttachment = (props, ref) => {
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
        d="M10.6667 2.66659C11.2867 2.66659 11.5967 2.66659 11.8511 2.73473C12.5412 2.91967 13.0803 3.45876 13.2653 4.14895C13.3334 4.40328 13.3334 4.71327 13.3334 5.33325V11.4666C13.3334 12.5867 13.3334 13.1467 13.1154 13.5746C12.9237 13.9509 12.6177 14.2569 12.2414 14.4486C11.8136 14.6666 11.2535 14.6666 10.1334 14.6666H5.86675C4.74664 14.6666 4.18659 14.6666 3.75877 14.4486C3.38244 14.2569 3.07648 13.9509 2.88473 13.5746C2.66675 13.1467 2.66675 12.5867 2.66675 11.4666V5.33325C2.66675 4.71327 2.66675 4.40328 2.7349 4.14895C2.91983 3.45876 3.45893 2.91967 4.14911 2.73473C4.40344 2.66659 4.71343 2.66659 5.33341 2.66659M8.00008 10.3333V7.33325C8.00008 6.78097 8.4478 6.33325 9.00008 6.33325C9.55237 6.33325 10.0001 6.78097 10.0001 7.33325V10.3333C10.0001 11.4378 9.10465 12.3333 8.00008 12.3333C6.89551 12.3333 6.00008 11.4378 6.00008 10.3333V7.66659M6.40008 3.99992H9.60008C9.97345 3.99992 10.1601 3.99992 10.3027 3.92726C10.4282 3.86334 10.5302 3.76135 10.5941 3.63591C10.6667 3.4933 10.6667 3.30662 10.6667 2.93325V2.39992C10.6667 2.02655 10.6667 1.83987 10.5941 1.69726C10.5302 1.57182 10.4282 1.46983 10.3027 1.40591C10.1601 1.33325 9.97345 1.33325 9.60008 1.33325H6.40008C6.02671 1.33325 5.84003 1.33325 5.69742 1.40591C5.57198 1.46983 5.46999 1.57182 5.40608 1.69726C5.33341 1.83987 5.33341 2.02655 5.33341 2.39992V2.93325C5.33341 3.30662 5.33341 3.4933 5.40608 3.63591C5.46999 3.76135 5.57198 3.86334 5.69742 3.92726C5.84003 3.99992 6.02671 3.99992 6.40008 3.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClipboardAttachment)
const ClipboardAttachment = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ClipboardAttachment', props.className].join(' ')}
    />
  )
})
ClipboardAttachment.displayName = 'IconClipboardAttachment'
export default ClipboardAttachment
