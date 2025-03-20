import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFigma = (props, ref) => {
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
        d="M12 1.5H8.5a3.5 3.5 0 1 0 0 7m3.5-7v7m0-7h3.5a3.5 3.5 0 1 1 0 7m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0V19a3.5 3.5 0 1 1-3.5-3.5m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFigma)
const Figma = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Figma'].join(' ')}
    />
  )
})
Figma.displayName = 'IconFigma'
export default Figma
