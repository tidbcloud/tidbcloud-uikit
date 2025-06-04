import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding07 = (props, ref) => {
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
        d="M5 7.33333H3.06667C2.6933 7.33333 2.50662 7.33333 2.36401 7.406C2.23857 7.46991 2.13658 7.5719 2.07266 7.69734C2 7.83995 2 8.02663 2 8.4V14M11 7.33333H12.9333C13.3067 7.33333 13.4934 7.33333 13.636 7.406C13.7614 7.46991 13.8634 7.5719 13.9273 7.69734C14 7.83995 14 8.02663 14 8.4V14M11 14V4.13333C11 3.3866 11 3.01323 10.8547 2.72801C10.7268 2.47713 10.5229 2.27316 10.272 2.14532C9.98677 2 9.61341 2 8.86667 2H7.13334C6.3866 2 6.01323 2 5.72802 2.14532C5.47713 2.27316 5.27316 2.47713 5.14533 2.72801C5 3.01323 5 3.3866 5 4.13333V14M14.6667 14H1.33334M7.33334 4.66667H8.66667M7.33334 7.33333H8.66667M7.33334 10H8.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding07)
const Building07 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building07', props.className].join(' ')}
    />
  )
})
Building07.displayName = 'IconBuilding07'
export default Building07
