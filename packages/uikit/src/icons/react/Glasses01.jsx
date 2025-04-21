import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlasses01 = (props, ref) => {
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
        d="M6.66659 7.68997C7.48894 7.21467 8.51081 7.21467 9.33317 7.68997M5.88554 6.11454C6.92693 7.15594 6.92693 8.84438 5.88554 9.88578C4.84414 10.9272 3.1557 10.9272 2.1143 9.88578C1.0729 8.84439 1.0729 7.15595 2.1143 6.11454C3.15569 5.07315 4.84414 5.07315 5.88554 6.11454ZM13.8855 6.11454C14.9269 7.15594 14.9269 8.84438 13.8855 9.88578C12.8441 10.9272 11.1557 10.9272 10.1143 9.88578C9.0729 8.84439 9.0729 7.15595 10.1143 6.11454C11.1557 5.07315 12.8441 5.07315 13.8855 6.11454Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlasses01)
const Glasses01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Glasses01', props.className].join(' ')}
    />
  )
})
Glasses01.displayName = 'IconGlasses01'
export default Glasses01
