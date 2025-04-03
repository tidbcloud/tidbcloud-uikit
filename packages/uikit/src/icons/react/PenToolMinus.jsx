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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 3.33356H5.3335M10.0002 4.66689L5.88981 5.84128C5.68654 5.89936 5.5849 5.92839 5.50094 5.98298C5.42662 6.0313 5.36269 6.09396 5.31287 6.16729C5.2566 6.25013 5.22552 6.35116 5.16335 6.55321L2.66683 14.6669M2.66683 14.6669L10.7805 12.1704C10.9826 12.1082 11.0836 12.0771 11.1664 12.0208C11.2398 11.971 11.3024 11.9071 11.3507 11.8328C11.4053 11.7488 11.4344 11.6472 11.4924 11.4439L12.6668 7.33356M2.66683 14.6669L7.0575 10.2762M14.5792 5.24598L12.0877 2.75447C11.8237 2.49046 11.6917 2.35846 11.5395 2.309C11.4056 2.26549 11.2614 2.26549 11.1275 2.309C10.9753 2.35846 10.8433 2.49046 10.5792 2.75447L10.0877 3.24598C9.82373 3.50999 9.69173 3.64199 9.64227 3.79421C9.59876 3.92811 9.59876 4.07234 9.64227 4.20624C9.69173 4.35846 9.82373 4.49046 10.0877 4.75447L12.5792 7.24598C12.8433 7.50999 12.9753 7.64199 13.1275 7.69145C13.2614 7.73496 13.4056 7.73496 13.5395 7.69145C13.6917 7.64199 13.8237 7.50999 14.0877 7.24598L14.5792 6.75447C14.8433 6.49046 14.9753 6.35845 15.0247 6.20624C15.0682 6.07234 15.0682 5.92811 15.0247 5.79421C14.9753 5.64199 14.8433 5.50999 14.5792 5.24598ZM8.00016 8.00023C8.73654 8.00023 9.3335 8.59718 9.3335 9.33356C9.3335 10.0699 8.73654 10.6669 8.00016 10.6669C7.26378 10.6669 6.66683 10.0699 6.66683 9.33356C6.66683 8.59718 7.26378 8.00023 8.00016 8.00023Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
