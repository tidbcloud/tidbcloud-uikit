import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMagicWand01 = (props, ref) => {
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
        d="M8.66657 9.3335L6.66657 7.3335M10.0068 2.3335V1.3335M12.633 3.37394L13.3401 2.66683M12.633 8.66683L13.3401 9.37394M7.34013 3.37394L6.63303 2.66683M13.6735 6.00016H14.6735M4.08748 13.9126L10.2457 7.75441C10.5097 7.4904 10.6417 7.35839 10.6911 7.20617C10.7346 7.07228 10.7346 6.92805 10.6911 6.79415C10.6417 6.64193 10.5097 6.50993 10.2457 6.24592L9.75415 5.75441C9.49013 5.4904 9.35813 5.35839 9.20591 5.30893C9.07201 5.26543 8.92778 5.26543 8.79389 5.30893C8.64167 5.35839 8.50966 5.4904 8.24565 5.75441L2.08748 11.9126C1.82347 12.1766 1.69146 12.3086 1.642 12.4608C1.5985 12.5947 1.5985 12.7389 1.642 12.8728C1.69146 13.0251 1.82347 13.1571 2.08748 13.4211L2.57899 13.9126C2.843 14.1766 2.975 14.3086 3.12722 14.3581C3.26112 14.4016 3.40535 14.4016 3.53924 14.3581C3.69146 14.3086 3.82347 14.1766 4.08748 13.9126Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMagicWand01)
const MagicWand01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MagicWand01', props.className].join(' ')}
    />
  )
})
MagicWand01.displayName = 'IconMagicWand01'
export default MagicWand01
