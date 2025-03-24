import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconString01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66683 10.8421H7.3335M1.3335 14L4.82556 2L8.66683 14M9.3335 6.93609C9.64722 5.59887 10.2747 4.19483 12.157 4.596C14.0394 4.99716 14.0394 7.27038 14.0394 8.27325V9.61044M14.0394 9.61044V12.6191M14.0394 9.61044C13.7257 9.16471 12.8472 8.27326 11.8433 8.27325C10.5884 8.27325 9.64722 9.61043 9.64722 10.9476C9.64722 12.2848 9.96095 13.622 11.5296 13.9563C12.798 14.2266 13.6211 13.1763 14.0394 12.6191M14.0394 12.6191C14.0394 13.0649 14.1649 13.9563 14.6668 13.9563"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconString01)
const String01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'String01', props.className].join(' ')}
    />
  )
})
String01.displayName = 'IconString01'
export default String01
