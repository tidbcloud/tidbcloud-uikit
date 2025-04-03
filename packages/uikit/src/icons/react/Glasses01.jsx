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
      ref={ref}
      {...props}
    >
      <path
        d="M6.66683 7.68997C7.48919 7.21467 8.51106 7.21467 9.33342 7.68997M5.88578 6.11454C6.92718 7.15594 6.92718 8.84438 5.88578 9.88578C4.84439 10.9272 3.15595 10.9272 2.11454 9.88578C1.07315 8.84439 1.07315 7.15595 2.11454 6.11454C3.15594 5.07315 4.84438 5.07315 5.88578 6.11454ZM13.8858 6.11454C14.9272 7.15594 14.9272 8.84438 13.8858 9.88578C12.8444 10.9272 11.1559 10.9272 10.1145 9.88578C9.07315 8.84439 9.07315 7.15595 10.1145 6.11454C11.1559 5.07315 12.8444 5.07315 13.8858 6.11454Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
