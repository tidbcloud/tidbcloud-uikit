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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M11.3333 6.33331V4.06665C11.3333 3.69328 11.3333 3.50659 11.2607 3.36399C11.1968 3.23854 11.0948 3.13656 10.9693 3.07264C10.8267 2.99998 10.64 2.99998 10.2667 2.99998H2M8.66667 9.66665V11.9333C8.66667 12.3067 8.66667 12.4934 8.594 12.636C8.53009 12.7614 8.4281 12.8634 8.30266 12.9273C8.16005 13 7.97337 13 7.6 13H2M2 1.33331L2 14.6666M2 9.66665L12.9333 9.66665C13.3067 9.66665 13.4934 9.66665 13.636 9.59398C13.7614 9.53007 13.8634 9.42808 13.9273 9.30264C14 9.16003 14 8.97335 14 8.59998V7.39998C14 7.02661 14 6.83993 13.9273 6.69732C13.8634 6.57188 13.7614 6.46989 13.636 6.40598C13.4934 6.33331 13.3067 6.33331 12.9333 6.33331L2 6.33331L2 9.66665Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
