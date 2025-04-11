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
      ref={ref}
      {...props}
    >
      <path
        d="M6.3335 12.6666C3.57207 12.6666 1.3335 10.428 1.3335 7.66663C1.3335 4.9052 3.57207 2.66663 6.3335 2.66663C8.25529 2.66663 9.92385 3.75085 10.7609 5.34098C10.84 5.33588 10.9198 5.33329 11.0002 5.33329C13.0252 5.33329 14.6668 6.97492 14.6668 8.99996C14.6668 11.025 13.0252 12.6666 11.0002 12.6666C9.29916 12.6666 8.08174 12.6666 6.3335 12.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
