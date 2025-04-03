import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPresentationChart02 = (props, ref) => {
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
        d="M7.99967 10.6667V14M11.9997 14L9.3654 11.8048C8.87955 11.3999 8.63662 11.1975 8.36545 11.1201C8.12637 11.0519 7.87298 11.0519 7.6339 11.1201C7.36273 11.1975 7.1198 11.3999 6.63395 11.8048L3.99967 14M5.33301 7.33333V8M7.99967 6V8M10.6663 4.66667V8M14.6663 2H1.33301M1.99967 2H13.9997V7.46667C13.9997 8.58677 13.9997 9.14682 13.7817 9.57465C13.5899 9.95097 13.284 10.2569 12.9077 10.4487C12.4798 10.6667 11.9198 10.6667 10.7997 10.6667H5.19967C4.07957 10.6667 3.51952 10.6667 3.09169 10.4487C2.71537 10.2569 2.40941 9.95097 2.21766 9.57465C1.99967 9.14682 1.99967 8.58677 1.99967 7.46667V2Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPresentationChart02)
const PresentationChart02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PresentationChart02', props.className].join(' ')}
    />
  )
})
PresentationChart02.displayName = 'IconPresentationChart02'
export default PresentationChart02
