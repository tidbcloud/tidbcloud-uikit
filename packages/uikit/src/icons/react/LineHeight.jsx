import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineHeight = (props, ref) => {
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
        d="M6 8.66667H10M4.66667 11.3333L7.51447 5.06816C7.66872 4.72882 7.74584 4.55915 7.85271 4.50651C7.94558 4.46077 8.05442 4.46077 8.14729 4.50651C8.25416 4.55915 8.33128 4.72882 8.48553 5.06816L11.3333 11.3333M14 14H2M14 2H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineHeight)
const LineHeight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineHeight', props.className].join(' ')}
    />
  )
})
LineHeight.displayName = 'IconLineHeight'
export default LineHeight
