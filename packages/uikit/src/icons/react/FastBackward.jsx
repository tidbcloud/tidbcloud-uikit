import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFastBackward = (props, ref) => {
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
        d="M22 16.437c0 1.13 0 1.695-.229 1.972a1 1 0 0 1-.809.363c-.358-.013-.78-.388-1.625-1.14l-4.992-4.436c-.465-.414-.698-.62-.784-.865a1 1 0 0 1 0-.662c.086-.245.319-.451.784-.865l4.992-4.437c.844-.75 1.267-1.126 1.625-1.14a1 1 0 0 1 .81.364c.228.277.228.842.228 1.972zM11 16.437c0 1.13 0 1.695-.229 1.972a1 1 0 0 1-.809.363c-.358-.013-.78-.388-1.625-1.14l-4.992-4.436c-.465-.414-.698-.62-.784-.865a1 1 0 0 1 0-.662c.086-.245.319-.451.784-.865l4.992-4.437c.844-.75 1.267-1.126 1.625-1.14a1 1 0 0 1 .81.364c.228.277.228.842.228 1.972z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFastBackward)
const FastBackward = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FastBackward'].join(' ')}
    />
  )
})
FastBackward.displayName = 'IconFastBackward'
export default FastBackward
