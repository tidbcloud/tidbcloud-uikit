import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStar04 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 2 2.012 5.231c.282.733.423 1.1.642 1.408q.294.413.707.707c.308.219.675.36 1.408.642L22 12l-5.231 2.012c-.733.282-1.1.423-1.408.642a3 3 0 0 0-.707.707c-.219.308-.36.675-.642 1.408L12 22l-2.012-5.231c-.282-.733-.423-1.1-.642-1.408a3 3 0 0 0-.707-.707c-.308-.219-.675-.36-1.408-.642L2 12l5.231-2.012c.733-.282 1.1-.423 1.408-.642a3 3 0 0 0 .707-.707c.219-.308.36-.675.642-1.408z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStar04)
const Star04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Star04'].join(' ')}
    />
  )
})
Star04.displayName = 'IconStar04'
export default Star04
