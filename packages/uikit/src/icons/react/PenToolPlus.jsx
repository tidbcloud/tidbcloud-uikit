import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPenToolPlus = (props, ref) => {
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
        d="M10.0002 4.66683L5.88981 5.84122C5.68654 5.89929 5.5849 5.92833 5.50094 5.98292C5.42662 6.03124 5.36269 6.0939 5.31287 6.16723C5.2566 6.25007 5.22552 6.35109 5.16335 6.55315L2.66683 14.6668M2.66683 14.6668L10.7805 12.1703C10.9826 12.1081 11.0836 12.0771 11.1664 12.0208C11.2398 11.971 11.3024 11.907 11.3507 11.8327C11.4053 11.7488 11.4344 11.6471 11.4924 11.4439L12.6668 7.3335M2.66683 14.6668L7.0575 10.2761M3.3335 5.3335V1.3335M1.3335 3.3335H5.3335M14.5792 5.24592L12.0877 2.75441C11.8237 2.4904 11.6917 2.35839 11.5395 2.30893C11.4056 2.26543 11.2614 2.26543 11.1275 2.30893C10.9753 2.35839 10.8433 2.4904 10.5792 2.75441L10.0877 3.24592C9.82373 3.50993 9.69173 3.64193 9.64227 3.79415C9.59876 3.92805 9.59876 4.07228 9.64227 4.20617C9.69173 4.35839 9.82373 4.4904 10.0877 4.75441L12.5792 7.24592C12.8433 7.50993 12.9753 7.64193 13.1275 7.69139C13.2614 7.7349 13.4056 7.7349 13.5395 7.69139C13.6917 7.64193 13.8237 7.50993 14.0877 7.24591L14.5792 6.75441C14.8433 6.4904 14.9753 6.35839 15.0247 6.20617C15.0682 6.07228 15.0682 5.92805 15.0247 5.79415C14.9753 5.64193 14.8433 5.50993 14.5792 5.24592ZM8.00016 8.00016C8.73654 8.00016 9.3335 8.59712 9.3335 9.3335C9.3335 10.0699 8.73654 10.6668 8.00016 10.6668C7.26378 10.6668 6.66683 10.0699 6.66683 9.3335C6.66683 8.59712 7.26378 8.00016 8.00016 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPenToolPlus)
const PenToolPlus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PenToolPlus', props.className].join(' ')}
    />
  )
})
PenToolPlus.displayName = 'IconPenToolPlus'
export default PenToolPlus
