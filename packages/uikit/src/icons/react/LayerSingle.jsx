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
      ref={ref}
      {...props}
    >
      <path
        d="M8.23868 4.78597C8.15122 4.74224 8.1075 4.72038 8.06163 4.71177C8.02101 4.70415 7.97932 4.70415 7.9387 4.71177C7.89283 4.72038 7.8491 4.74224 7.76165 4.78597L1.3335 8.00004L7.76165 11.2141C7.8491 11.2578 7.89283 11.2797 7.9387 11.2883C7.97932 11.2959 8.02101 11.2959 8.06163 11.2883C8.1075 11.2797 8.15122 11.2578 8.23868 11.2141L14.6668 8.00004L8.23868 4.78597Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
