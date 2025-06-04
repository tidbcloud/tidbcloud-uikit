import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlertOctagon = (props, ref) => {
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
        d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M1.33337 5.68175V10.3181C1.33337 10.4812 1.33337 10.5627 1.35179 10.6394C1.36813 10.7074 1.39506 10.7725 1.43161 10.8321C1.47284 10.8994 1.53049 10.957 1.64579 11.0723L4.92762 14.3542C5.04292 14.4695 5.10057 14.5271 5.16785 14.5683C5.2275 14.6049 5.29253 14.6318 5.36055 14.6482C5.43728 14.6666 5.51881 14.6666 5.68187 14.6666H10.3182C10.4813 14.6666 10.5628 14.6666 10.6395 14.6482C10.7076 14.6318 10.7726 14.6049 10.8322 14.5683C10.8995 14.5271 10.9572 14.4695 11.0725 14.3542L14.3543 11.0723C14.4696 10.957 14.5272 10.8994 14.5685 10.8321C14.605 10.7725 14.632 10.7074 14.6483 10.6394C14.6667 10.5627 14.6667 10.4812 14.6667 10.3181V5.68175C14.6667 5.51869 14.6667 5.43716 14.6483 5.36043C14.632 5.29241 14.605 5.22738 14.5685 5.16773C14.5272 5.10045 14.4696 5.0428 14.3543 4.9275L11.0725 1.64567C10.9572 1.53037 10.8995 1.47272 10.8322 1.43149C10.7726 1.39494 10.7076 1.368 10.6395 1.35167C10.5628 1.33325 10.4813 1.33325 10.3182 1.33325H5.68187C5.51881 1.33325 5.43728 1.33325 5.36055 1.35167C5.29253 1.368 5.2275 1.39494 5.16785 1.43149C5.10057 1.47272 5.04292 1.53037 4.92762 1.64567L1.64579 4.9275C1.53049 5.0428 1.47284 5.10045 1.43161 5.16773C1.39506 5.22738 1.36813 5.29241 1.35179 5.36043C1.33337 5.43716 1.33337 5.51869 1.33337 5.68175Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlertOctagon)
const AlertOctagon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlertOctagon', props.className].join(' ')}
    />
  )
})
AlertOctagon.displayName = 'IconAlertOctagon'
export default AlertOctagon
