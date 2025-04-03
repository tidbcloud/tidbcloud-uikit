import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCopy03 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M5.3335 5.33325V3.46659C5.3335 2.71985 5.3335 2.34648 5.47882 2.06126C5.60665 1.81038 5.81063 1.60641 6.06151 1.47858C6.34672 1.33325 6.72009 1.33325 7.46683 1.33325H12.5335C13.2802 1.33325 13.6536 1.33325 13.9388 1.47858C14.1897 1.60641 14.3937 1.81038 14.5215 2.06126C14.6668 2.34648 14.6668 2.71985 14.6668 3.46659V8.53325C14.6668 9.27999 14.6668 9.65336 14.5215 9.93857C14.3937 10.1895 14.1897 10.3934 13.9388 10.5213C13.6536 10.6666 13.2802 10.6666 12.5335 10.6666H10.6668M3.46683 14.6666H8.5335C9.28023 14.6666 9.6536 14.6666 9.93882 14.5213C10.1897 14.3934 10.3937 14.1895 10.5215 13.9386C10.6668 13.6534 10.6668 13.28 10.6668 12.5333V7.46659C10.6668 6.71985 10.6668 6.34648 10.5215 6.06126C10.3937 5.81038 10.1897 5.60641 9.93882 5.47858C9.6536 5.33325 9.28023 5.33325 8.5335 5.33325H3.46683C2.72009 5.33325 2.34672 5.33325 2.06151 5.47858C1.81063 5.60641 1.60665 5.81038 1.47882 6.06126C1.3335 6.34648 1.3335 6.71985 1.3335 7.46659V12.5333C1.3335 13.28 1.3335 13.6534 1.47882 13.9386C1.60665 14.1895 1.81063 14.3934 2.06151 14.5213C2.34672 14.6666 2.72009 14.6666 3.46683 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCopy03)
const Copy03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Copy03', props.className].join(' ')}
    />
  )
})
Copy03.displayName = 'IconCopy03'
export default Copy03
