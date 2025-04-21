import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUploadCloud01 = (props, ref) => {
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
        d="M2.66665 10.8282C1.86266 10.29 1.33331 9.37347 1.33331 8.33333C1.33331 6.77095 2.52765 5.48753 4.05314 5.34625C4.36519 3.44809 6.01348 2 7.99998 2C9.98648 2 11.6348 3.44809 11.9468 5.34625C13.4723 5.48753 14.6666 6.77095 14.6666 8.33333C14.6666 9.37347 14.1373 10.29 13.3333 10.8282M5.33331 10.6667L7.99998 8M7.99998 8L10.6666 10.6667M7.99998 8V14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUploadCloud01)
const UploadCloud01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UploadCloud01', props.className].join(' ')}
    />
  )
})
UploadCloud01.displayName = 'IconUploadCloud01'
export default UploadCloud01
