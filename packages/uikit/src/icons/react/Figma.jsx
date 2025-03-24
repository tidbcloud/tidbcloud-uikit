import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFigma = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M12 1.5H8.5C6.567 1.5 5 3.067 5 5C5 6.933 6.567 8.5 8.5 8.5M12 1.5V8.5M12 1.5H15.5C17.433 1.5 19 3.067 19 5C19 6.933 17.433 8.5 15.5 8.5M12 8.5H8.5M12 8.5V15.5M12 8.5H15.5M8.5 8.5C6.567 8.5 5 10.067 5 12C5 13.933 6.567 15.5 8.5 15.5M12 15.5H8.5M12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19C5 17.067 6.567 15.5 8.5 15.5M15.5 8.5C17.433 8.5 19 10.067 19 12C19 13.933 17.433 15.5 15.5 15.5C13.567 15.5 12 13.933 12 12C12 10.067 13.567 8.5 15.5 8.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'Figma', props.className].join(' ')}
    />
  )
})
Figma.displayName = 'IconFigma'
export default Figma
