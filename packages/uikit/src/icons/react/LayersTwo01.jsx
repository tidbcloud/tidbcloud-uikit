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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 9.66663L7.76165 12.8807C7.8491 12.9244 7.89283 12.9463 7.9387 12.9549C7.97932 12.9625 8.02101 12.9625 8.06163 12.9549C8.1075 12.9463 8.15122 12.9244 8.23868 12.8807L14.6668 9.66663M1.3335 6.3333L7.76165 3.11922C7.8491 3.07549 7.89283 3.05363 7.9387 3.04502C7.97932 3.0374 8.02101 3.0374 8.06163 3.04502C8.1075 3.05363 8.15122 3.07549 8.23868 3.11922L14.6668 6.3333L8.23868 9.54737C8.15122 9.5911 8.1075 9.61296 8.06163 9.62157C8.02101 9.62919 7.97932 9.62919 7.9387 9.62157C7.89283 9.61296 7.8491 9.5911 7.76165 9.54737L1.3335 6.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
