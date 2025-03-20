import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnchor = (props, ref) => {
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
        d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v14m0 0A10 10 0 0 1 2 12h3m7 10a10 10 0 0 0 10-10h-3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnchor)
const Anchor = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Anchor'].join(' ')}
    />
  )
})
Anchor.displayName = 'IconAnchor'
export default Anchor
