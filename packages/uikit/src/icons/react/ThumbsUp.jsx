import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThumbsUp = (props, ref) => {
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
        d="M4.66683 14.6666V7.33325M1.3335 8.66659V13.3333C1.3335 14.0696 1.93045 14.6666 2.66683 14.6666H11.6177C12.6048 14.6666 13.4443 13.9464 13.5944 12.9707L14.3124 8.30403C14.4987 7.09252 13.5614 5.99992 12.3356 5.99992H10.0002C9.63197 5.99992 9.3335 5.70144 9.3335 5.33325V2.97714C9.3335 2.06925 8.5975 1.33325 7.6896 1.33325C7.47305 1.33325 7.27682 1.46078 7.18887 1.65867L4.84279 6.93734C4.73579 7.1781 4.49704 7.33325 4.23358 7.33325H2.66683C1.93045 7.33325 1.3335 7.93021 1.3335 8.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThumbsUp)
const ThumbsUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ThumbsUp', props.className].join(' ')}
    />
  )
})
ThumbsUp.displayName = 'IconThumbsUp'
export default ThumbsUp
