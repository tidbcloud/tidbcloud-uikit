import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayerSingle = (props, ref) => {
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
        d="M8.23849 4.78597C8.15104 4.74224 8.10731 4.72038 8.06145 4.71177C8.02082 4.70415 7.97914 4.70415 7.93851 4.71177C7.89265 4.72038 7.84892 4.74224 7.76147 4.78597L1.33331 8.00004L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00004L8.23849 4.78597Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayerSingle)
const LayerSingle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LayerSingle', props.className].join(' ')}
    />
  )
})
LayerSingle.displayName = 'IconLayerSingle'
export default LayerSingle
