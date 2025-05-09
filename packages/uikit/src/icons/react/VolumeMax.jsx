import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVolumeMax = (props, ref) => {
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
        d="M13.1652 3.33345C14.1101 4.64694 14.6666 6.25854 14.6666 8.00011C14.6666 9.74169 14.1101 11.3533 13.1652 12.6668M10.4968 5.33345C11.024 6.08934 11.3333 7.00862 11.3333 8.00011C11.3333 8.99161 11.024 9.91089 10.4968 10.6668M6.4228 3.57724L4.31234 5.68769C4.19704 5.803 4.13939 5.86065 4.07211 5.90187C4.01246 5.93843 3.94743 5.96536 3.87941 5.98169C3.80268 6.00011 3.72115 6.00011 3.55809 6.00011H2.39992C2.02655 6.00011 1.83987 6.00011 1.69726 6.07278C1.57182 6.13669 1.46983 6.23868 1.40591 6.36412C1.33325 6.50673 1.33325 6.69341 1.33325 7.06678V8.93345C1.33325 9.30682 1.33325 9.4935 1.40591 9.63611C1.46983 9.76155 1.57182 9.86354 1.69726 9.92745C1.83987 10.0001 2.02655 10.0001 2.39992 10.0001H3.55809C3.72115 10.0001 3.80268 10.0001 3.87941 10.0185C3.94743 10.0349 4.01246 10.0618 4.07211 10.0984C4.13939 10.1396 4.19704 10.1972 4.31234 10.3125L6.4228 12.423C6.70838 12.7086 6.85117 12.8514 6.97377 12.861C7.08014 12.8694 7.18409 12.8263 7.25339 12.7452C7.33325 12.6517 7.33325 12.4497 7.33325 12.0459V3.95436C7.33325 3.55048 7.33325 3.34855 7.25339 3.25504C7.18409 3.1739 7.08014 3.13084 6.97377 3.13921C6.85117 3.14886 6.70838 3.29165 6.4228 3.57724Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVolumeMax)
const VolumeMax = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'VolumeMax', props.className].join(' ')}
    />
  )
})
VolumeMax.displayName = 'IconVolumeMax'
export default VolumeMax
