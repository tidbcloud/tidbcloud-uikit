import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageX = (props, ref) => {
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
        d="M11 1.6665L14.3333 4.99984M14.3333 1.6665L11 4.99984M8.33333 1.99984H5.2C4.07989 1.99984 3.51984 1.99984 3.09202 2.21782C2.71569 2.40957 2.40973 2.71553 2.21799 3.09186C2 3.51968 2 4.07973 2 5.19984V10.7998C2 11.9199 2 12.48 2.21799 12.9078C2.40973 13.2841 2.71569 13.5901 3.09202 13.7818C3.51984 13.9998 4.07989 13.9998 5.2 13.9998H11.3333C11.9533 13.9998 12.2633 13.9998 12.5176 13.9317C13.2078 13.7468 13.7469 13.2077 13.9319 12.5175C14 12.2631 14 11.9532 14 11.3332M7 5.6665C7 6.40288 6.40305 6.99984 5.66667 6.99984C4.93029 6.99984 4.33333 6.40288 4.33333 5.6665C4.33333 4.93012 4.93029 4.33317 5.66667 4.33317C6.40305 4.33317 7 4.93012 7 5.6665ZM9.99336 7.94527L4.3541 13.0719C4.03691 13.3602 3.87831 13.5044 3.86429 13.6293C3.85213 13.7376 3.89364 13.8449 3.97546 13.9169C4.06985 13.9998 4.28419 13.9998 4.71286 13.9998H10.9707C11.9301 13.9998 12.4098 13.9998 12.7866 13.8387C13.2596 13.6363 13.6365 13.2595 13.8388 12.7864C14 12.4097 14 11.9299 14 10.9705C14 10.6477 14 10.4863 13.9647 10.3359C13.9204 10.147 13.8353 9.97008 13.7155 9.81743C13.6202 9.69597 13.4941 9.59514 13.242 9.39347L11.3772 7.90161C11.1249 7.69978 10.9988 7.59886 10.8599 7.56324C10.7374 7.53185 10.6086 7.53592 10.4884 7.57496C10.352 7.61926 10.2324 7.72794 9.99336 7.94527Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageX)
const ImageX = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ImageX', props.className].join(' ')}
    />
  )
})
ImageX.displayName = 'IconImageX'
export default ImageX
