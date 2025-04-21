import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPaint = (props, ref) => {
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
        d="M1.9997 8.66683H13.333M7.9997 2.3335L6.9997 1.3335M7.66636 2.00016L13.5788 7.91258C13.8428 8.17659 13.9748 8.3086 14.0243 8.46082C14.0678 8.59471 14.0678 8.73895 14.0243 8.87284C13.9748 9.02506 13.8428 9.15707 13.5788 9.42108L9.9291 13.0708C9.13707 13.8628 8.74106 14.2588 8.2844 14.4072C7.88271 14.5377 7.45002 14.5377 7.04833 14.4072C6.59167 14.2588 6.19566 13.8628 5.40362 13.0708L3.26244 10.9296C2.4704 10.1375 2.07439 9.74152 1.92601 9.28486C1.7955 8.88318 1.7955 8.45048 1.92601 8.0488C2.07439 7.59214 2.47041 7.19612 3.26244 6.40409L7.66636 2.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPaint)
const Paint = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Paint', props.className].join(' ')}
    />
  )
})
Paint.displayName = 'IconPaint'
export default Paint
