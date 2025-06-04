import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconExpand06 = (props, ref) => {
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
        d="M10.6667 5.33333L14 2M14 2H10.6667M14 2V5.33333M5.33333 5.33333L2 2M2 2L2 5.33333M2 2L5.33333 2M5.33333 10.6667L2 14M2 14H5.33333M2 14L2 10.6667M10.6667 10.6667L14 14M14 14V10.6667M14 14H10.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconExpand06)
const Expand06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Expand06', props.className].join(' ')}
    />
  )
})
Expand06.displayName = 'IconExpand06'
export default Expand06
