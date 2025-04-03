import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPresentationChart01 = (props, ref) => {
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
        d="M7.99967 10.6667V14M7.99967 10.6667L11.9997 14M7.99967 10.6667L3.99967 14M13.9997 2V7.46667C13.9997 8.58677 13.9997 9.14682 13.7817 9.57465C13.5899 9.95097 13.284 10.2569 12.9077 10.4487C12.4798 10.6667 11.9198 10.6667 10.7997 10.6667H5.19967C4.07957 10.6667 3.51952 10.6667 3.09169 10.4487C2.71537 10.2569 2.40941 9.95097 2.21766 9.57465C1.99967 9.14682 1.99967 8.58677 1.99967 7.46667V2M5.33301 6V8M7.99967 4.66667V8M10.6663 7.33333V8M14.6663 2H1.33301"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPresentationChart01)
const PresentationChart01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PresentationChart01', props.className].join(' ')}
    />
  )
})
PresentationChart01.displayName = 'IconPresentationChart01'
export default PresentationChart01
