import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRightIndent02 = (props, ref) => {
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
        d="M8 6.16647H2M8 2.66647L2 2.66647M14 9.83314H2M14 13.3331H2M13.1467 1.97314L10.5689 3.90647C10.3759 4.05122 10.2794 4.12359 10.2449 4.21232C10.2147 4.29003 10.2147 4.37625 10.2449 4.45396C10.2794 4.54269 10.3759 4.61506 10.5689 4.75981L13.1467 6.69314C13.4213 6.89913 13.5586 7.00212 13.6736 6.99973C13.7736 6.99765 13.8674 6.95075 13.9291 6.87197C14 6.78145 14 6.60979 14 6.26647V2.39981C14 2.05649 14 1.88483 13.9291 1.79431C13.8674 1.71553 13.7736 1.66862 13.6736 1.66654C13.5586 1.66415 13.4213 1.76715 13.1467 1.97314Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRightIndent02)
const RightIndent02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RightIndent02', props.className].join(' ')}
    />
  )
})
RightIndent02.displayName = 'IconRightIndent02'
export default RightIndent02
