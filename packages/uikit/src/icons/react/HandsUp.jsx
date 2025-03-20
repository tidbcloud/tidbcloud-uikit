import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHandsUp = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 22 22"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="inherit"
        d="M6.069 9.08v11.906M19.619 9.01h-5.5C16.25 1.39 12.653 1 12.653 1c-1.526 0-1.21 1.168-1.325 1.363 0 3.727-4.087 6.648-4.087 6.648l-5.55.004c-.68 0-.69.646-.69.646l.68 10.66c0 .679.702.679.702.679h15.164c.777 0 1.41-1.975 1.41-1.975C21 12.294 21 10.29 21 10.29c0-1.391-1.382-1.28-1.382-1.28Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHandsUp)
const HandsUp = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'HandsUp'].join(' ')}
    />
  )
})
HandsUp.displayName = 'IconHandsUp'
export default HandsUp
