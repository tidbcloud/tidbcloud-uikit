import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChartSquarePlus = (props, ref) => {
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
        d="M7.99992 1.99998H10.7999C11.92 1.99998 12.4801 1.99998 12.9079 2.21797C13.2842 2.40971 13.5902 2.71567 13.7819 3.092C13.9999 3.51982 13.9999 4.07987 13.9999 5.19998V10.8C13.9999 11.9201 13.9999 12.4801 13.7819 12.908C13.5902 13.2843 13.2842 13.5902 12.9079 13.782C12.4801 14 11.92 14 10.7999 14H5.19992C4.07981 14 3.51976 14 3.09194 13.782C2.71561 13.5902 2.40965 13.2843 2.21791 12.908C1.99992 12.4801 1.99992 11.9201 1.99992 10.8V7.99998M5.33325 8.66665V11.3333M10.6666 7.33331V11.3333M7.99992 4.66665V11.3333M3.33325 5.33331V1.33331M1.33325 3.33331H5.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChartSquarePlus)
const BarChartSquarePlus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChartSquarePlus', props.className].join(' ')}
    />
  )
})
BarChartSquarePlus.displayName = 'IconBarChartSquarePlus'
export default BarChartSquarePlus
