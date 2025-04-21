import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVolumePlus = (props, ref) => {
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
        d="M12.3333 10.3334V5.6667M9.99992 8.00003H14.6666M6.4228 2.91049L4.31234 5.02095C4.19704 5.13625 4.13939 5.1939 4.07211 5.23513C4.01246 5.27168 3.94743 5.29861 3.87941 5.31495C3.80268 5.33337 3.72115 5.33337 3.55809 5.33337H2.39992C2.02655 5.33337 1.83987 5.33337 1.69726 5.40603C1.57182 5.46994 1.46983 5.57193 1.40591 5.69737C1.33325 5.83998 1.33325 6.02666 1.33325 6.40003V9.60003C1.33325 9.9734 1.33325 10.1601 1.40591 10.3027C1.46983 10.4281 1.57182 10.5301 1.69726 10.594C1.83987 10.6667 2.02655 10.6667 2.39992 10.6667H3.55809C3.72115 10.6667 3.80268 10.6667 3.87941 10.6851C3.94743 10.7015 4.01246 10.7284 4.07211 10.7649C4.13939 10.8062 4.19704 10.8638 4.31234 10.9791L6.4228 13.0896C6.70838 13.3752 6.85117 13.518 6.97377 13.5276C7.08014 13.536 7.18409 13.4929 7.25339 13.4118C7.33325 13.3183 7.33325 13.1163 7.33325 12.7125V3.28761C7.33325 2.88374 7.33325 2.6818 7.25339 2.58829C7.18409 2.50715 7.08014 2.46409 6.97377 2.47246C6.85117 2.48211 6.70838 2.62491 6.4228 2.91049Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVolumePlus)
const VolumePlus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'VolumePlus', props.className].join(' ')}
    />
  )
})
VolumePlus.displayName = 'IconVolumePlus'
export default VolumePlus
