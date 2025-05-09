import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag06 = (props, ref) => {
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
        d="M2.66666 14L2.66666 2.66667M2.66666 8.66667H7.6C7.97337 8.66667 8.16005 8.66667 8.30266 8.594C8.4281 8.53009 8.53009 8.4281 8.594 8.30266C8.66666 8.16005 8.66666 7.97337 8.66666 7.6V3.06667C8.66666 2.6933 8.66666 2.50661 8.594 2.36401C8.53009 2.23856 8.4281 2.13658 8.30266 2.07266C8.16005 2 7.97337 2 7.6 2H3.73333C3.35996 2 3.17328 2 3.03067 2.07266C2.90523 2.13658 2.80324 2.23856 2.73933 2.36401C2.66666 2.50661 2.66666 2.6933 2.66666 3.06667V8.66667ZM8.66666 3.33333H12.9333C13.3067 3.33333 13.4934 3.33333 13.636 3.406C13.7614 3.46991 13.8634 3.5719 13.9273 3.69734C14 3.83995 14 4.02663 14 4.4V8.93333C14 9.3067 14 9.49339 13.9273 9.63599C13.8634 9.76144 13.7614 9.86342 13.636 9.92734C13.4934 10 13.3067 10 12.9333 10H9.73333C9.35996 10 9.17328 10 9.03067 9.92734C8.90523 9.86342 8.80324 9.76144 8.73933 9.63599C8.66666 9.49339 8.66666 9.3067 8.66666 8.93333V3.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag06)
const Flag06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag06', props.className].join(' ')}
    />
  )
})
Flag06.displayName = 'IconFlag06'
export default Flag06
