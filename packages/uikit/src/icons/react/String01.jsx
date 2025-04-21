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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66659 10.8421H7.33325M1.33325 14L4.82532 2L8.66659 14M9.33325 6.93609C9.64698 5.59887 10.2744 4.19483 12.1568 4.596C14.0391 4.99716 14.0391 7.27038 14.0391 8.27325V9.61044M14.0391 9.61044V12.6191M14.0391 9.61044C13.7254 9.16471 12.847 8.27326 11.8431 8.27325C10.5882 8.27325 9.64698 9.61043 9.64698 10.9476C9.64698 12.2848 9.9607 13.622 11.5293 13.9563C12.7977 14.2266 13.6208 13.1763 14.0391 12.6191M14.0391 12.6191C14.0391 13.0649 14.1646 13.9563 14.6666 13.9563"
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
