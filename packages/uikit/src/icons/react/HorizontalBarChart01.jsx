import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHorizontalBarChart01 = (props, ref) => {
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
        d="M11.3333 6.33337V4.06671C11.3333 3.69334 11.3333 3.50666 11.2607 3.36405C11.1968 3.23861 11.0948 3.13662 10.9693 3.0727C10.8267 3.00004 10.64 3.00004 10.2667 3.00004H2M8.66667 9.66671V11.9334C8.66667 12.3067 8.66667 12.4934 8.594 12.636C8.53009 12.7615 8.4281 12.8635 8.30266 12.9274C8.16005 13 7.97337 13 7.6 13H2M2 1.33337L2 14.6667M2 9.66671L12.9333 9.66671C13.3067 9.66671 13.4934 9.66671 13.636 9.59405C13.7614 9.53013 13.8634 9.42814 13.9273 9.3027C14 9.16009 14 8.97341 14 8.60004V7.40004C14 7.02667 14 6.83999 13.9273 6.69738C13.8634 6.57194 13.7614 6.46995 13.636 6.40604C13.4934 6.33337 13.3067 6.33337 12.9333 6.33337L2 6.33337L2 9.66671Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHorizontalBarChart01)
const HorizontalBarChart01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HorizontalBarChart01', props.className].join(' ')}
    />
  )
})
HorizontalBarChart01.displayName = 'IconHorizontalBarChart01'
export default HorizontalBarChart01
