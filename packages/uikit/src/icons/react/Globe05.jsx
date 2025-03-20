import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe05 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.715-.432-3.33-1.193-4.74M17 5.75h.005M10.5 21.888v-2.203a.5.5 0 0 1 .12-.325l2.486-2.9a.5.5 0 0 0-.131-.76l-2.857-1.632a.5.5 0 0 1-.186-.187L8.07 10.62a.5.5 0 0 0-.478-.25l-5.528.492M21 6c0 2.21-2 4-4 6-2-2-4-3.79-4-6a4 4 0 0 1 8 0m-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe05)
const Globe05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Globe05'].join(' ')}
    />
  )
})
Globe05.displayName = 'IconGlobe05'
export default Globe05
