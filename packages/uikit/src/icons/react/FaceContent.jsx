import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceContent = (props, ref) => {
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
        d="M5.3335 9.33337C5.3335 9.33337 6.3335 10.6667 8.00016 10.6667C9.66683 10.6667 10.6668 9.33337 10.6668 9.33337M11.3335 6.16004C11.0702 6.48337 10.7102 6.66671 10.3335 6.66671C9.95683 6.66671 9.60683 6.48337 9.3335 6.16004M6.66683 6.16004C6.4035 6.48337 6.0435 6.66671 5.66683 6.66671C5.29016 6.66671 4.94016 6.48337 4.66683 6.16004M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceContent)
const FaceContent = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceContent', props.className].join(' ')}
    />
  )
})
FaceContent.displayName = 'IconFaceContent'
export default FaceContent
