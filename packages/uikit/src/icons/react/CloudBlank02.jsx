import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudBlank02 = (props, ref) => {
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
        d="M6.33334 12.6666C3.57191 12.6666 1.33334 10.428 1.33334 7.66663C1.33334 4.9052 3.57191 2.66663 6.33334 2.66663C8.25513 2.66663 9.92369 3.75085 10.7607 5.34098C10.8398 5.33588 10.9196 5.33329 11 5.33329C13.025 5.33329 14.6667 6.97492 14.6667 8.99996C14.6667 11.025 13.025 12.6666 11 12.6666C9.299 12.6666 8.08158 12.6666 6.33334 12.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudBlank02)
const CloudBlank02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudBlank02', props.className].join(' ')}
    />
  )
})
CloudBlank02.displayName = 'IconCloudBlank02'
export default CloudBlank02
