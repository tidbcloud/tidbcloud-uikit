import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart01 = (props, ref) => {
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
        d="M14.1404 10.5933C13.7163 11.5963 13.053 12.4801 12.2084 13.1675C11.3637 13.8549 10.3636 14.325 9.29539 14.5365C8.22717 14.7481 7.12338 14.6948 6.08053 14.3812C5.03768 14.0676 4.08752 13.5034 3.31311 12.7378C2.53871 11.9722 1.96364 11.0285 1.63819 9.98931C1.31274 8.9501 1.24681 7.847 1.44616 6.77643C1.64552 5.70586 2.1041 4.70042 2.7818 3.84803C3.4595 2.99563 4.33569 2.32222 5.33377 1.88667M14.1596 5.44878C14.4265 6.09309 14.5902 6.77425 14.6458 7.46723C14.6595 7.63843 14.6664 7.72403 14.6324 7.80114C14.604 7.86555 14.5477 7.9265 14.4858 7.95996C14.4116 8.00001 14.319 8.00001 14.1338 8.00001H8.53377C8.34708 8.00001 8.25374 8.00001 8.18244 7.96367C8.11971 7.93172 8.06872 7.88072 8.03676 7.818C8.00043 7.7467 8.00043 7.65336 8.00043 7.46667V1.86667C8.00043 1.68143 8.00043 1.58881 8.04048 1.51466C8.07393 1.45272 8.13489 1.39646 8.1993 1.36807C8.2764 1.33407 8.362 1.34094 8.5332 1.35466C9.22619 1.41022 9.90735 1.57393 10.5517 1.84081C11.3605 2.17584 12.0954 2.6669 12.7145 3.28596C13.3335 3.90502 13.8246 4.63995 14.1596 5.44878Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart01)
const PieChart01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart01', props.className].join(' ')}
    />
  )
})
PieChart01.displayName = 'IconPieChart01'
export default PieChart01
