import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeartCircle = (props, ref) => {
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
        d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99788 6.04531C7.33143 5.26617 6.22008 5.05659 5.38506 5.77005C4.55004 6.4835 4.43249 7.67637 5.08823 8.52017C5.50824 9.06064 6.58389 10.0629 7.30299 10.7136C7.54195 10.9299 7.66144 11.038 7.80455 11.0814C7.92758 11.1186 8.06818 11.1186 8.19121 11.0814C8.33432 11.038 8.45381 10.9299 8.69277 10.7136C9.41187 10.0629 10.4875 9.06064 10.9075 8.52017C11.5633 7.67637 11.4601 6.476 10.6107 5.77005C9.76133 5.06409 8.66433 5.26617 7.99788 6.04531Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeartCircle)
const HeartCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HeartCircle', props.className].join(' ')}
    />
  )
})
HeartCircle.displayName = 'IconHeartCircle'
export default HeartCircle
