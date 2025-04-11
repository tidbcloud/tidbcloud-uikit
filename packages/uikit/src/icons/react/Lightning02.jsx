import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightning02 = (props, ref) => {
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
        d="M9.49968 1.3335H5.66264C5.54298 1.3335 5.48316 1.3335 5.43034 1.35171C5.38363 1.36783 5.34109 1.39412 5.30579 1.42869C5.26587 1.46778 5.23912 1.5213 5.18561 1.62832L2.38561 7.22831C2.25782 7.48389 2.19393 7.61168 2.20927 7.71555C2.22268 7.80625 2.27285 7.88743 2.34798 7.93998C2.43403 8.00016 2.5769 8.00016 2.86264 8.00016H6.99968L4.99968 14.6668L13.1284 6.23703C13.4027 5.95263 13.5398 5.81043 13.5478 5.68875C13.5548 5.58313 13.5112 5.48049 13.4303 5.41218C13.3371 5.3335 13.1396 5.3335 12.7445 5.3335H7.99968L9.49968 1.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightning02)
const Lightning02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightning02', props.className].join(' ')}
    />
  )
})
Lightning02.displayName = 'IconLightning02'
export default Lightning02
