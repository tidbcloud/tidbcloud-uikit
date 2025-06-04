import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChartBreakoutCircle = (props, ref) => {
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
        d="M10.3333 2.33331V1.33331M12.9595 3.04042L13.6666 2.33331M13.6734 5.66665H14.6734M14.6337 8.66665C14.2992 12.0355 11.4568 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6819 1.33325 7.99998C1.33325 4.54308 3.96437 1.70071 7.33325 1.36623M7.99992 5.33331H10.6666V7.99998M10.413 5.33331C8.84347 7.55171 6.25749 8.99998 3.33325 8.99998C2.66465 8.99998 2.01373 8.92427 1.3886 8.78095"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChartBreakoutCircle)
const ChartBreakoutCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChartBreakoutCircle', props.className].join(' ')}
    />
  )
})
ChartBreakoutCircle.displayName = 'IconChartBreakoutCircle'
export default ChartBreakoutCircle
