import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUpload04 = (props, ref) => {
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
        d="M10.6668 7.99992L8.00016 5.33325M8.00016 5.33325L5.3335 7.99992M8.00016 5.33325V11.4666C8.00016 12.3937 8.00016 12.8573 8.36718 13.3763C8.61103 13.7212 9.31311 14.1468 9.73164 14.2035C10.3616 14.2889 10.6008 14.1641 11.0792 13.9145C13.2113 12.8023 14.6668 10.5711 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 10.4675 2.67416 12.622 4.66683 13.7747"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUpload04)
const Upload04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Upload04', props.className].join(' ')}
    />
  )
})
Upload04.displayName = 'IconUpload04'
export default Upload04
