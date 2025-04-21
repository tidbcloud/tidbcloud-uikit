import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer03 = (props, ref) => {
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
        d="M14.6666 11.6667L14.2055 4.97983C14.1331 3.93002 14.0969 3.40512 13.8694 3.00721C13.669 2.65689 13.3674 2.37536 13.0041 2.19961C12.5915 2 12.0654 2 11.0131 2H4.98689C3.93459 2 3.40844 2 2.99582 2.19961C2.63254 2.37536 2.33093 2.65689 2.1306 3.00721C1.90307 3.40512 1.86687 3.93002 1.79447 4.97983L1.33331 11.6667M14.6666 11.6667C14.6666 12.9553 13.622 14 12.3333 14H3.66665C2.37798 14 1.33331 12.9553 1.33331 11.6667M14.6666 11.6667C14.6666 10.378 13.622 9.33333 12.3333 9.33333H3.66665C2.37798 9.33333 1.33331 10.378 1.33331 11.6667M3.99998 11.6667H4.00665M7.99998 11.6667H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer03)
const Server03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server03', props.className].join(' ')}
    />
  )
})
Server03.displayName = 'IconServer03'
export default Server03
