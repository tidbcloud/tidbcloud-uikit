import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReflect02 = (props, ref) => {
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
        d="M12 3v3m0 4.5v3m0 4.5v3m10-9h-6.5m0 0 4 4m-4-4 4-4M2 12h6.5m0 0-4 4m4-4-4-4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReflect02)
const Reflect02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Reflect02'].join(' ')}
    />
  )
})
Reflect02.displayName = 'IconReflect02'
export default Reflect02
