import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnotation = (props, ref) => {
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
        d="M2 5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.07989 14 5.2V9C14 9.93188 14 10.3978 13.8478 10.7654C13.6448 11.2554 13.2554 11.6448 12.7654 11.8478C12.3978 12 11.9319 12 11 12C10.6743 12 10.5114 12 10.3603 12.0357C10.1589 12.0832 9.97126 12.177 9.81234 12.3097C9.69315 12.4091 9.59543 12.5394 9.4 12.8L8.42667 14.0978C8.28192 14.2908 8.20955 14.3873 8.12082 14.4218C8.04311 14.452 7.95689 14.452 7.87918 14.4218C7.79045 14.3873 7.71808 14.2908 7.57333 14.0978L6.6 12.8C6.40457 12.5394 6.30685 12.4091 6.18766 12.3097C6.02874 12.177 5.84113 12.0832 5.63967 12.0357C5.48858 12 5.32572 12 5 12C4.06812 12 3.60218 12 3.23463 11.8478C2.74458 11.6448 2.35523 11.2554 2.15224 10.7654C2 10.3978 2 9.93188 2 9V5.2Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnotation)
const Annotation = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Annotation', props.className].join(' ')}
    />
  )
})
Annotation.displayName = 'IconAnnotation'
export default Annotation
