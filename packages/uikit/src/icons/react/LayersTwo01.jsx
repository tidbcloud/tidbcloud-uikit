import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayersTwo01 = (props, ref) => {
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
        d="M1.33331 9.66663L7.76147 12.8807C7.84892 12.9244 7.89265 12.9463 7.93851 12.9549C7.97914 12.9625 8.02082 12.9625 8.06145 12.9549C8.10731 12.9463 8.15104 12.9244 8.23849 12.8807L14.6666 9.66663M1.33331 6.3333L7.76147 3.11922C7.84892 3.07549 7.89265 3.05363 7.93851 3.04502C7.97914 3.0374 8.02082 3.0374 8.06145 3.04502C8.10731 3.05363 8.15104 3.07549 8.23849 3.11922L14.6666 6.3333L8.23849 9.54737C8.15104 9.5911 8.10731 9.61296 8.06145 9.62157C8.02082 9.62919 7.97914 9.62919 7.93851 9.62157C7.89265 9.61296 7.84892 9.5911 7.76147 9.54737L1.33331 6.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayersTwo01)
const LayersTwo01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LayersTwo01', props.className].join(' ')}
    />
  )
})
LayersTwo01.displayName = 'IconLayersTwo01'
export default LayersTwo01
