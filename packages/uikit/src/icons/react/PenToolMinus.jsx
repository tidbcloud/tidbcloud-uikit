import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPenToolMinus = (props, ref) => {
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
        d="M1.33325 3.33356H5.33325M9.99992 4.66689L5.88956 5.84128C5.68629 5.89936 5.58466 5.92839 5.5007 5.98298C5.42638 6.0313 5.36244 6.09396 5.31263 6.16729C5.25636 6.25013 5.22527 6.35116 5.1631 6.55321L2.66659 14.6669M2.66659 14.6669L10.7803 12.1704C10.9823 12.1082 11.0834 12.0771 11.1662 12.0208C11.2395 11.971 11.3022 11.9071 11.3505 11.8328C11.4051 11.7488 11.4341 11.6472 11.4922 11.4439L12.6666 7.33356M2.66659 14.6669L7.05725 10.2762M14.579 5.24598L12.0875 2.75447C11.8235 2.49046 11.6915 2.35846 11.5393 2.309C11.4054 2.26549 11.2611 2.26549 11.1272 2.309C10.975 2.35846 10.843 2.49046 10.579 2.75447L10.0875 3.24598C9.82349 3.50999 9.69148 3.64199 9.64202 3.79421C9.59852 3.92811 9.59852 4.07234 9.64202 4.20624C9.69148 4.35846 9.82349 4.49046 10.0875 4.75447L12.579 7.24598C12.843 7.50999 12.975 7.64199 13.1272 7.69145C13.2611 7.73496 13.4054 7.73496 13.5393 7.69145C13.6915 7.64199 13.8235 7.50999 14.0875 7.24598L14.579 6.75447C14.843 6.49046 14.975 6.35845 15.0245 6.20624C15.068 6.07234 15.068 5.92811 15.0245 5.79421C14.975 5.64199 14.843 5.50999 14.579 5.24598ZM7.99992 8.00023C8.7363 8.00023 9.33325 8.59718 9.33325 9.33356C9.33325 10.0699 8.7363 10.6669 7.99992 10.6669C7.26354 10.6669 6.66659 10.0699 6.66659 9.33356C6.66659 8.59718 7.26354 8.00023 7.99992 8.00023Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPenToolMinus)
const PenToolMinus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PenToolMinus', props.className].join(' ')}
    />
  )
})
PenToolMinus.displayName = 'IconPenToolMinus'
export default PenToolMinus
