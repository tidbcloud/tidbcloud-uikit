import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlasses02 = (props, ref) => {
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
        d="M6.66683 9.68997C7.48919 9.21467 8.51106 9.21467 9.33342 9.68997M1.3335 10.0002L1.80116 5.32357C1.81889 5.14626 1.82775 5.05761 1.84135 4.98155C2.00165 4.08484 2.74763 3.40973 3.65584 3.33946C3.73287 3.3335 3.82197 3.3335 4.00016 3.3335M14.6668 10.0002L14.1992 5.32357C14.1814 5.14627 14.1726 5.05761 14.159 4.98155C13.9987 4.08484 13.2527 3.40973 12.3445 3.33946C12.2675 3.3335 12.1784 3.3335 12.0002 3.3335M5.88578 8.11454C6.92718 9.15594 6.92718 10.8444 5.88578 11.8858C4.84439 12.9272 3.15595 12.9272 2.11454 11.8858C1.07315 10.8444 1.07315 9.15595 2.11454 8.11454C3.15594 7.07315 4.84438 7.07315 5.88578 8.11454ZM13.8858 8.11454C14.9272 9.15594 14.9272 10.8444 13.8858 11.8858C12.8444 12.9272 11.1559 12.9272 10.1145 11.8858C9.07315 10.8444 9.07315 9.15595 10.1145 8.11454C11.1559 7.07315 12.8444 7.07315 13.8858 8.11454Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlasses02)
const Glasses02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Glasses02', props.className].join(' ')}
    />
  )
})
Glasses02.displayName = 'IconGlasses02'
export default Glasses02
