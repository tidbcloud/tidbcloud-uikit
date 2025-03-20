import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUploadCloud01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 18"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.33332 12.5352C2.32834 11.8625 1.66666 10.7168 1.66666 9.41667C1.66666 7.46369 3.15958 5.85941 5.06644 5.68281C5.4565 3.31011 7.51686 1.5 9.99999 1.5C12.4831 1.5 14.5435 3.31011 14.9335 5.68281C16.8404 5.85941 18.3333 7.46369 18.3333 9.41667C18.3333 10.7168 17.6716 11.8625 16.6667 12.5352M6.66666 12.3333L9.99999 9M9.99999 9L13.3333 12.3333M9.99999 9V16.5"
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
      className={[props.className, 'tiui-icon', 'UploadCloud01'].join(' ')}
    />
  )
})
UploadCloud01.displayName = 'IconUploadCloud01'
export default UploadCloud01
