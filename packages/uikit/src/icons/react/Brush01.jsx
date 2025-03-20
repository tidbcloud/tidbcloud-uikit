import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrush01 = (props, ref) => {
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
        d="M9 11.222 12.778 15m-4.803 5.975C6.608 22.342 4 22 2 22c1.025-2-.342-4.608 1.025-5.975a3.5 3.5 0 0 1 4.95 4.95m3.947-5.05 9.137-9.868a2.204 2.204 0 0 0-3.116-3.116L8.075 12.08c-.51.472-.765.708-.913.96a2 2 0 0 0-.038 1.967c.139.257.385.503.876.994.491.492.737.737.994.876a2 2 0 0 0 1.968-.038c.251-.148.487-.403.96-.913"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBrush01)
const Brush01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Brush01'].join(' ')}
    />
  )
})
Brush01.displayName = 'IconBrush01'
export default Brush01
