import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPresentationChart02 = (props, ref) => {
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
        d="M7.99992 10.6667V14M11.9999 14L9.36565 11.8048C8.87979 11.3999 8.63687 11.1975 8.36569 11.1201C8.12661 11.0519 7.87322 11.0519 7.63414 11.1201C7.36297 11.1975 7.12004 11.3999 6.63419 11.8048L3.99992 14M5.33325 7.33333V8M7.99992 6V8M10.6666 4.66667V8M14.6666 2H1.33325M1.99992 2H13.9999V7.46667C13.9999 8.58677 13.9999 9.14682 13.7819 9.57465C13.5902 9.95097 13.2842 10.2569 12.9079 10.4487C12.4801 10.6667 11.92 10.6667 10.7999 10.6667H5.19992C4.07981 10.6667 3.51976 10.6667 3.09194 10.4487C2.71561 10.2569 2.40965 9.95097 2.21791 9.57465C1.99992 9.14682 1.99992 8.58677 1.99992 7.46667V2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPresentationChart02)
const PresentationChart02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PresentationChart02', props.className].join(' ')}
    />
  )
})
PresentationChart02.displayName = 'IconPresentationChart02'
export default PresentationChart02
