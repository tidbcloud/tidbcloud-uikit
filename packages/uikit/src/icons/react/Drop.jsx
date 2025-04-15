import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDrop = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M13.3332 9.3335C13.3332 12.279 10.9454 14.6668 7.99984 14.6668C5.05432 14.6668 2.6665 12.279 2.6665 9.3335C2.6665 8.62623 2.80418 7.95112 3.05418 7.3335C3.84536 5.37894 7.99984 1.3335 7.99984 1.3335C7.99984 1.3335 12.1543 5.37894 12.9455 7.3335C13.1955 7.95112 13.3332 8.62623 13.3332 9.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDrop)
const Drop = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Drop', props.className].join(' ')}
    />
  )
})
Drop.displayName = 'IconDrop'
export default Drop
