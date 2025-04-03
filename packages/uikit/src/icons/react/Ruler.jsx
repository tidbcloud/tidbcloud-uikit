import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRuler = (props, ref) => {
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
        d="M9.66697 3.66643L10.667 4.66643M7.66697 5.66643L8.66697 6.66643M5.66697 7.66643L6.66697 8.66643M3.66697 9.66643L4.66697 10.6664M1.71073 11.7102L4.28982 14.2893C4.42182 14.4213 4.48783 14.4873 4.56394 14.5121C4.63088 14.5338 4.703 14.5338 4.76995 14.5121C4.84606 14.4873 4.91206 14.4213 5.04406 14.2893L14.2898 5.04358C14.4218 4.91157 14.4878 4.84557 14.5126 4.76946C14.5343 4.70251 14.5343 4.6304 14.5126 4.56345C14.4878 4.48734 14.4218 4.42134 14.2898 4.28933L11.7107 1.71024C11.5787 1.57824 11.5127 1.51224 11.4366 1.48751C11.3697 1.46575 11.2976 1.46575 11.2306 1.48751C11.1545 1.51224 11.0885 1.57824 10.9565 1.71024L1.71073 10.956C1.57873 11.088 1.51272 11.154 1.48799 11.2301C1.46624 11.2971 1.46624 11.3692 1.48799 11.4361C1.51272 11.5122 1.57873 11.5782 1.71073 11.7102Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRuler)
const Ruler = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Ruler', props.className].join(' ')}
    />
  )
})
Ruler.displayName = 'IconRuler'
export default Ruler
