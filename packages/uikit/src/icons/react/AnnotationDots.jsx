import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnotationDots = (props, ref) => {
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
        d="M5 7H5.00667M8 7H8.00667M11 7H11.0067M6.6 12.8L7.57333 14.0978C7.71808 14.2908 7.79045 14.3873 7.87918 14.4218C7.95689 14.452 8.04311 14.452 8.12082 14.4218C8.20955 14.3873 8.28192 14.2908 8.42667 14.0978L9.4 12.8C9.59543 12.5394 9.69315 12.4091 9.81234 12.3097C9.97126 12.177 10.1589 12.0832 10.3603 12.0357C10.5114 12 10.6743 12 11 12C11.9319 12 12.3978 12 12.7654 11.8478C13.2554 11.6448 13.6448 11.2554 13.8478 10.7654C14 10.3978 14 9.93188 14 9V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V9C2 9.93188 2 10.3978 2.15224 10.7654C2.35523 11.2554 2.74458 11.6448 3.23463 11.8478C3.60218 12 4.06812 12 5 12C5.32572 12 5.48858 12 5.63967 12.0357C5.84113 12.0832 6.02874 12.177 6.18766 12.3097C6.30685 12.4091 6.40457 12.5394 6.6 12.8ZM5.33333 7C5.33333 7.18409 5.1841 7.33333 5 7.33333C4.81591 7.33333 4.66667 7.18409 4.66667 7C4.66667 6.8159 4.81591 6.66667 5 6.66667C5.1841 6.66667 5.33333 6.8159 5.33333 7ZM8.33333 7C8.33333 7.18409 8.1841 7.33333 8 7.33333C7.81591 7.33333 7.66667 7.18409 7.66667 7C7.66667 6.8159 7.81591 6.66667 8 6.66667C8.1841 6.66667 8.33333 6.8159 8.33333 7ZM11.3333 7C11.3333 7.18409 11.1841 7.33333 11 7.33333C10.8159 7.33333 10.6667 7.18409 10.6667 7C10.6667 6.8159 10.8159 6.66667 11 6.66667C11.1841 6.66667 11.3333 6.8159 11.3333 7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnotationDots)
const AnnotationDots = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AnnotationDots', props.className].join(' ')}
    />
  )
})
AnnotationDots.displayName = 'IconAnnotationDots'
export default AnnotationDots
