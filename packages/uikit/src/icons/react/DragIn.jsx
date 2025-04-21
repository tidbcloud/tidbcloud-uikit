import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDragIn = (props, ref) => {
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
        d="M14 9.99999V10.8C14 11.9201 14 12.4801 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4801 2 11.9201 2 10.8V9.99999M8.95909 6.17703H10.8311C11.0724 6.17703 11.193 6.17703 11.2531 6.22636C11.3053 6.26923 11.3349 6.33403 11.3333 6.40186C11.3313 6.47992 11.2528 6.57212 11.0959 6.75651L7.9314 10.4734C7.8402 10.5806 7.7946 10.6341 7.74034 10.6537C7.69271 10.671 7.64062 10.671 7.59299 10.6537C7.53873 10.6341 7.49313 10.5806 7.40194 10.4734L4.23747 6.75651C4.08049 6.57212 4.00199 6.47992 4.00007 6.40186C3.9984 6.33403 4.028 6.26923 4.08025 6.22635C4.14036 6.17703 4.26098 6.17703 4.5022 6.17703H6.32841C6.28579 5.54446 6.12405 4.92501 5.851 4.35197C5.54129 3.702 5.09571 3.1271 4.54477 2.66666L4.8115 2.66666C5.84663 2.6672 6.84532 3.0514 7.61704 3.74597C8.32489 4.38305 8.79632 5.24034 8.95909 6.17703Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDragIn)
const DragIn = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DragIn', props.className].join(' ')}
    />
  )
})
DragIn.displayName = 'IconDragIn'
export default DragIn
