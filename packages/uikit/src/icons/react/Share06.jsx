import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShare06 = (props, ref) => {
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
        d="M13.8609 8.40492C14.0237 8.26542 14.105 8.19567 14.1348 8.11267C14.161 8.03982 14.161 7.96014 14.1348 7.88729C14.105 7.80429 14.0237 7.73454 13.8609 7.59504L8.21375 2.75463C7.9336 2.5145 7.79353 2.39443 7.67493 2.39149C7.57186 2.38893 7.47341 2.43421 7.40828 2.51413C7.33333 2.60609 7.33333 2.79058 7.33333 3.15956V6.02307C5.91021 6.27204 4.60773 6.99315 3.63981 8.07589C2.58455 9.25632 2.00082 10.7839 2 12.3673V12.7753C2.69956 11.9326 3.573 11.251 4.56051 10.7773C5.43113 10.3596 6.37228 10.1122 7.33333 10.047V12.8404C7.33333 13.2094 7.33333 13.3939 7.40828 13.4858C7.47341 13.5657 7.57186 13.611 7.67493 13.6085C7.79353 13.6055 7.9336 13.4855 8.21375 13.2453L13.8609 8.40492Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShare06)
const Share06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Share06', props.className].join(' ')}
    />
  )
})
Share06.displayName = 'IconShare06'
export default Share06
