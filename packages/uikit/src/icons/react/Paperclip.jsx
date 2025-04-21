import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPaperclip = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.1017 7.26622L8.09133 13.2766C6.72449 14.6435 4.50842 14.6435 3.14158 13.2766C1.77475 11.9098 1.77475 9.69372 3.14158 8.32688L9.15199 2.31647C10.0632 1.40525 11.5406 1.40525 12.4518 2.31647C13.363 3.2277 13.363 4.70508 12.4518 5.61631L6.67711 11.391C6.2215 11.8466 5.48281 11.8466 5.0272 11.391C4.57159 10.9354 4.57159 10.1967 5.0272 9.74109L10.0948 4.6735"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPaperclip)
const Paperclip = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Paperclip', props.className].join(' ')}
    />
  )
})
Paperclip.displayName = 'IconPaperclip'
export default Paperclip
