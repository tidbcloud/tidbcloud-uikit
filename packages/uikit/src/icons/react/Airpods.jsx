import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAirpods = (props, ref) => {
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
        d="M1.33325 5.08325C1.33325 6.60204 2.56447 7.83325 4.08325 7.83325C4.28718 7.83325 4.38914 7.83325 4.44197 7.85148C4.55251 7.88962 4.61022 7.94733 4.64836 8.05787C4.66659 8.1107 4.66659 8.19346 4.66659 8.35899V12.5833C4.66659 13.1816 5.15161 13.6666 5.74992 13.6666C6.34823 13.6666 6.83325 13.1816 6.83325 12.5833V5.08325C6.83325 3.56447 5.60204 2.33325 4.08325 2.33325C2.56447 2.33325 1.33325 3.56447 1.33325 5.08325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M14.6666 5.08325C14.6666 6.60204 13.4354 7.83325 11.9166 7.83325C11.7127 7.83325 11.6107 7.83325 11.5579 7.85148C11.4473 7.88962 11.3896 7.94733 11.3515 8.05787C11.3333 8.1107 11.3333 8.19346 11.3333 8.35899V12.5833C11.3333 13.1816 10.8482 13.6666 10.2499 13.6666C9.65161 13.6666 9.16659 13.1816 9.16659 12.5833V5.08325C9.16659 3.56447 10.3978 2.33325 11.9166 2.33325C13.4354 2.33325 14.6666 3.56447 14.6666 5.08325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAirpods)
const Airpods = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Airpods', props.className].join(' ')}
    />
  )
})
Airpods.displayName = 'IconAirpods'
export default Airpods
