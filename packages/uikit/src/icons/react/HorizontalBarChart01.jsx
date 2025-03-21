import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHorizontalBarChart01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M17 9.5V6.1C17 5.53995 17 5.25992 16.891 5.04601C16.7951 4.85785 16.6422 4.70487 16.454 4.60899C16.2401 4.5 15.9601 4.5 15.4 4.5H3M13 14.5V17.9C13 18.4601 13 18.7401 12.891 18.954C12.7951 19.1422 12.6422 19.2951 12.454 19.391C12.2401 19.5 11.9601 19.5 11.4 19.5H3M3 2L3 22M3 14.5L19.4 14.5C19.9601 14.5 20.2401 14.5 20.454 14.391C20.6422 14.2951 20.7951 14.1422 20.891 13.954C21 13.7401 21 13.4601 21 12.9V11.1C21 10.5399 21 10.2599 20.891 10.046C20.7951 9.85785 20.6422 9.70487 20.454 9.60899C20.2401 9.5 19.9601 9.5 19.4 9.5L3 9.5L3 14.5Z"
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
      className={[props.className, 'tiui-icon', 'HorizontalBarChart01'].join(' ')}
    />
  )
})
HorizontalBarChart01.displayName = 'IconHorizontalBarChart01'
export default HorizontalBarChart01
