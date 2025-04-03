import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin05 = (props, ref) => {
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
        d="M10.6668 8.91629C13.0214 9.37923 14.6668 10.4365 14.6668 11.6667C14.6668 13.3235 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 13.3235 1.3335 11.6667C1.3335 10.4365 2.97896 9.37923 5.3335 8.91629M8.00016 11.3333V2L11.5453 4.18163C11.8039 4.34076 11.9332 4.42033 11.9744 4.52057C12.0104 4.608 12.0076 4.7066 11.9666 4.79181C11.9197 4.8895 11.786 4.96148 11.5186 5.10543L8.00016 7"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin05)
const MarkerPin05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MarkerPin05', props.className].join(' ')}
    />
  )
})
MarkerPin05.displayName = 'IconMarkerPin05'
export default MarkerPin05
