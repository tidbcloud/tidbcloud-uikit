import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconExpand04 = (props, ref) => {
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
        d="M13.3333 9.33333V11.2C13.3333 11.9467 13.3333 12.3201 13.188 12.6053C13.0602 12.8562 12.8562 13.0602 12.6053 13.188C12.3201 13.3333 11.9467 13.3333 11.2 13.3333H9.33333M6.66667 2.66667H4.8C4.05326 2.66667 3.6799 2.66667 3.39468 2.81199C3.1438 2.93982 2.93982 3.1438 2.81199 3.39468C2.66667 3.6799 2.66667 4.05326 2.66667 4.8V6.66667M10 6L14 2M14 2H10M14 2V6M6 10L2 14M2 14H6M2 14L2 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconExpand04)
const Expand04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Expand04', props.className].join(' ')}
    />
  )
})
Expand04.displayName = 'IconExpand04'
export default Expand04
