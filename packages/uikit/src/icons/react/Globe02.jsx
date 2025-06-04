import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe02 = (props, ref) => {
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
        d="M1.77417 12.2259L4.83674 9.16331M12.1451 1.85498C14.6184 4.3283 14.6184 8.33835 12.1451 10.8117C9.67175 13.285 5.6617 13.285 3.18838 10.8117M11.3334 14.6667H4.66673M8.00006 14.6667V12.6667M11.6667 6.33332C11.6667 8.54246 9.87587 10.3333 7.66673 10.3333C5.45759 10.3333 3.66673 8.54246 3.66673 6.33332C3.66673 4.12418 5.45759 2.33332 7.66673 2.33332C9.87587 2.33332 11.6667 4.12418 11.6667 6.33332Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe02)
const Globe02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe02', props.className].join(' ')}
    />
  )
})
Globe02.displayName = 'IconGlobe02'
export default Globe02
