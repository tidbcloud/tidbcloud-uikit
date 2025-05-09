import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCompass03 = (props, ref) => {
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
        d="M8 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8 1.3335C4.3181 1.3335 1.33334 4.31826 1.33334 8.00016C1.33334 11.6821 4.3181 14.6668 8 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M9.81474 5.51081C10.1404 5.40224 10.3033 5.34796 10.4116 5.38657C10.5058 5.42018 10.58 5.49434 10.6136 5.58858C10.6522 5.69688 10.5979 5.85973 10.4894 6.18543L9.49766 9.16051C9.46674 9.25327 9.45128 9.29965 9.42494 9.33817C9.4016 9.37228 9.37212 9.40176 9.33801 9.4251C9.29949 9.45144 9.25311 9.4669 9.16035 9.49782L6.18527 10.4895C5.85957 10.5981 5.69672 10.6524 5.58842 10.6138C5.49418 10.5801 5.42002 10.506 5.38641 10.4117C5.3478 10.3034 5.40208 10.1406 5.51065 9.8149L6.50234 6.83981C6.53326 6.74705 6.54872 6.70067 6.57507 6.66216C6.5984 6.62804 6.62788 6.59857 6.662 6.57523C6.70051 6.54888 6.74689 6.53342 6.83965 6.5025L9.81474 5.51081Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCompass03)
const Compass03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Compass03', props.className].join(' ')}
    />
  )
})
Compass03.displayName = 'IconCompass03'
export default Compass03
