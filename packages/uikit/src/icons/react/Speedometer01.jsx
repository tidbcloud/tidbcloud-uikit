import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer01 = (props, ref) => {
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
        d="M7.99998 1.33331V2.99998M7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998M7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998M7.99998 13V14.6666M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998M7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998M2.99998 7.99998H1.33331M14.6666 7.99998H13M12.7189 12.7189L11.5364 11.5364M3.28107 12.7189L4.46475 11.5353M3.28107 3.33331L4.4387 4.49095M12.7189 3.33331L8.99992 6.99998M9.33331 7.99998C9.33331 8.73636 8.73636 9.33331 7.99998 9.33331C7.2636 9.33331 6.66665 8.73636 6.66665 7.99998C6.66665 7.2636 7.2636 6.66665 7.99998 6.66665C8.73636 6.66665 9.33331 7.2636 9.33331 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer01)
const Speedometer01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speedometer01', props.className].join(' ')}
    />
  )
})
Speedometer01.displayName = 'IconSpeedometer01'
export default Speedometer01
