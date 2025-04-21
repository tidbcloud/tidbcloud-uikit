import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeartHexagon = (props, ref) => {
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
        d="M7.48198 1.62114C7.67105 1.5161 7.76558 1.46358 7.8657 1.44299C7.95431 1.42477 8.04569 1.42477 8.1343 1.44299C8.23441 1.46358 8.32895 1.5161 8.51802 1.62114L13.4514 4.36188C13.651 4.47281 13.7509 4.52828 13.8236 4.60717C13.8879 4.67696 13.9366 4.75969 13.9663 4.8498C14 4.95167 14 5.06588 14 5.29431V10.7057C14 10.9341 14 11.0484 13.9663 11.1502C13.9366 11.2403 13.8879 11.3231 13.8236 11.3929C13.7509 11.4718 13.651 11.5272 13.4514 11.6382L8.51802 14.3789C8.32895 14.4839 8.23441 14.5365 8.1343 14.557C8.04569 14.5753 7.95431 14.5753 7.8657 14.557C7.76558 14.5365 7.67105 14.4839 7.48198 14.3789L2.54865 11.6382C2.34897 11.5272 2.24912 11.4718 2.17642 11.3929C2.11211 11.3231 2.06343 11.2403 2.03366 11.1502C2 11.0484 2 10.9341 2 10.7057V5.29431C2 5.06588 2 4.95167 2.03366 4.8498C2.06343 4.75969 2.11211 4.67696 2.17642 4.60717C2.24912 4.52828 2.34896 4.47281 2.54865 4.36188L7.48198 1.62114Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99772 6.04529C7.33127 5.26615 6.21992 5.05656 5.3849 5.77002C4.54988 6.48348 4.43232 7.67634 5.08807 8.52015C5.50807 9.06061 6.58372 10.0628 7.30282 10.7136C7.54179 10.9298 7.66127 11.038 7.80439 11.0813C7.92742 11.1186 8.06801 11.1186 8.19104 11.0813C8.33416 11.038 8.45364 10.9298 8.69261 10.7136C9.41171 10.0628 10.4874 9.06061 10.9074 8.52015C11.5631 7.67634 11.4599 6.47597 10.6105 5.77002C9.76117 5.06407 8.66417 5.26615 7.99772 6.04529Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeartHexagon)
const HeartHexagon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HeartHexagon', props.className].join(' ')}
    />
  )
})
HeartHexagon.displayName = 'IconHeartHexagon'
export default HeartHexagon
