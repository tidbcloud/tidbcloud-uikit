import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockLeft = (props, ref) => {
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
        d="M2 8.00001L6.66667 3.33334V6.00001H13.4667C13.6534 6.00001 13.7467 6.00001 13.818 6.03634C13.8807 6.0683 13.9317 6.11929 13.9637 6.18201C14 6.25332 14 6.34666 14 6.53334V9.46668C14 9.65336 14 9.7467 13.9637 9.81801C13.9317 9.88073 13.8807 9.93172 13.818 9.96368C13.7467 10 13.6534 10 13.4667 10H6.66667V12.6667L2 8.00001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockLeft)
const ArrowBlockLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockLeft', props.className].join(' ')}
    />
  )
})
ArrowBlockLeft.displayName = 'IconArrowBlockLeft'
export default ArrowBlockLeft
