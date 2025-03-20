import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfo2 = (props, ref) => {
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
        fill="currentColor"
        d="M11.5 11.5v7h2v-7zm1 7v-7h-2v7zM12 18a.5.5 0 0 1 .5.5h-2A1.5 1.5 0 0 0 12 20zm-.5.5a.5.5 0 0 1 .5-.5v2a1.5 1.5 0 0 0 1.5-1.5zM12 12a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 12 10zm0-2a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5zm0-4v2a2 2 0 0 0 2-2zm0 0h-2a2 2 0 0 0 2 2zm0 0V4a2 2 0 0 0-2 2zm0 0h2a2 2 0 0 0-2-2z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfo2)
const Info2 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Info2'].join(' ')}
    />
  )
})
Info2.displayName = 'IconInfo2'
export default Info2
