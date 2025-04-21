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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.1402 10.5933C13.7161 11.5963 13.0527 12.4801 12.2081 13.1675C11.3635 13.8549 10.3634 14.325 9.29515 14.5365C8.22692 14.7481 7.12314 14.6948 6.08029 14.3812C5.03743 14.0676 4.08727 13.5034 3.31287 12.7378C2.53846 11.9722 1.9634 11.0285 1.63794 9.98931C1.31249 8.9501 1.24656 7.847 1.44592 6.77643C1.64528 5.70586 2.10385 4.70042 2.78155 3.84803C3.45925 2.99563 4.33544 2.32222 5.33352 1.88667M14.1594 5.44878C14.4263 6.09309 14.59 6.77425 14.6455 7.46723C14.6593 7.63843 14.6661 7.72403 14.6321 7.80114C14.6037 7.86555 14.5475 7.9265 14.4855 7.95996C14.4114 8.00001 14.3188 8.00001 14.1335 8.00001H8.53352C8.34684 8.00001 8.2535 8.00001 8.18219 7.96367C8.11947 7.93172 8.06848 7.88072 8.03652 7.818C8.00019 7.7467 8.00019 7.65336 8.00019 7.46667V1.86667C8.00019 1.68143 8.00019 1.58881 8.04024 1.51466C8.07369 1.45272 8.13464 1.39646 8.19905 1.36807C8.27616 1.33407 8.36176 1.34094 8.53296 1.35466C9.22595 1.41022 9.9071 1.57393 10.5514 1.84081C11.3602 2.17584 12.0952 2.6669 12.7142 3.28596C13.3333 3.90502 13.8244 4.63995 14.1594 5.44878Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
