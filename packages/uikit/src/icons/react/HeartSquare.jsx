import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeartSquare = (props, ref) => {
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
        d="M2 5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.0799 14 5.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.0799 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99772 6.04527C7.33127 5.26613 6.21992 5.05655 5.3849 5.77C4.54988 6.48346 4.43232 7.67633 5.08807 8.52013C5.50807 9.0606 6.58372 10.0628 7.30282 10.7136C7.54179 10.9298 7.66127 11.038 7.80439 11.0813C7.92742 11.1186 8.06801 11.1186 8.19104 11.0813C8.33416 11.038 8.45364 10.9298 8.69261 10.7136C9.41171 10.0628 10.4874 9.0606 10.9074 8.52013C11.5631 7.67633 11.4599 6.47596 10.6105 5.77C9.76117 5.06405 8.66417 5.26613 7.99772 6.04527Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeartSquare)
const HeartSquare = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HeartSquare', props.className].join(' ')}
    />
  )
})
HeartSquare.displayName = 'IconHeartSquare'
export default HeartSquare
