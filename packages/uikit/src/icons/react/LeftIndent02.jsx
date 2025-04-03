import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLeftIndent02 = (props, ref) => {
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
        d="M14 6.16647H8M14 2.66647L8 2.66647M14 9.83314H2M14 13.3331H2M2.85333 1.97314L5.43111 3.90647C5.62411 4.05122 5.7206 4.12359 5.75511 4.21232C5.78533 4.29003 5.78533 4.37625 5.75511 4.45396C5.7206 4.54269 5.62411 4.61506 5.43111 4.75981L2.85333 6.69314C2.57868 6.89913 2.44135 7.00212 2.3264 6.99973C2.22637 6.99765 2.13256 6.95075 2.07088 6.87197C2 6.78145 2 6.60979 2 6.26647V2.39981C2 2.05649 2 1.88483 2.07088 1.79431C2.13256 1.71553 2.22637 1.66862 2.3264 1.66654C2.44135 1.66415 2.57868 1.76715 2.85333 1.97314Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLeftIndent02)
const LeftIndent02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LeftIndent02', props.className].join(' ')}
    />
  )
})
LeftIndent02.displayName = 'IconLeftIndent02'
export default LeftIndent02
