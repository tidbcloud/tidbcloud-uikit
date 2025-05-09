import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPenTool01 = (props, ref) => {
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
        d="M11.9999 8.66683L11.1335 4.33471C11.0851 4.09271 11.0609 3.97171 11.0021 3.87318C10.95 3.78607 10.8788 3.71198 10.7938 3.65656C10.6977 3.59387 10.5777 3.56492 10.3378 3.50701L1.33325 1.3335M1.33325 1.3335L3.50677 10.3381C3.56468 10.578 3.59363 10.6979 3.65632 10.7941C3.71174 10.879 3.78582 10.9503 3.87294 11.0023C3.97147 11.0611 4.09247 11.0853 4.33447 11.1337L8.66659 12.0002M1.33325 1.3335L6.39059 6.39083M10.7542 13.9126L13.9123 10.7544C14.1763 10.4904 14.3084 10.3584 14.3578 10.2062C14.4013 10.0723 14.4013 9.92805 14.3578 9.79415C14.3084 9.64193 14.1764 9.50993 13.9123 9.24592L13.4208 8.75441C13.1568 8.4904 13.0248 8.35839 12.8726 8.30893C12.7387 8.26543 12.5945 8.26543 12.4606 8.30893C12.3084 8.35839 12.1764 8.4904 11.9123 8.75441L8.75417 11.9126C8.49015 12.1766 8.35815 12.3086 8.30869 12.4608C8.26518 12.5947 8.26518 12.7389 8.30869 12.8728C8.35815 13.0251 8.49015 13.1571 8.75417 13.4211L9.24567 13.9126C9.50968 14.1766 9.64169 14.3086 9.79391 14.3581C9.9278 14.4016 10.072 14.4016 10.2059 14.3581C10.3581 14.3086 10.4902 14.1766 10.7542 13.9126ZM8.66659 7.3335C8.66659 8.06988 8.06963 8.66683 7.33325 8.66683C6.59687 8.66683 5.99992 8.06988 5.99992 7.3335C5.99992 6.59712 6.59687 6.00016 7.33325 6.00016C8.06963 6.00016 8.66659 6.59712 8.66659 7.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPenTool01)
const PenTool01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PenTool01', props.className].join(' ')}
    />
  )
})
PenTool01.displayName = 'IconPenTool01'
export default PenTool01
