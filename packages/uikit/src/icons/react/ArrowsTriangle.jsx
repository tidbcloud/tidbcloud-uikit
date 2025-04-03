import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowsTriangle = (props, ref) => {
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
        d="M8.66683 12.6667H11.5296C12.7731 12.6667 13.3948 12.6667 13.7479 12.4061C14.0556 12.179 14.251 11.8306 14.2843 11.4495C14.3226 11.0125 13.9984 10.4819 13.35 9.42092L12.6853 8.33335M4.08692 7.07016L2.65035 9.42092C2.00195 10.4819 1.67774 11.0125 1.71598 11.4495C1.74931 11.8306 1.9447 12.179 2.25247 12.4061C2.60549 12.6667 3.22722 12.6667 4.47068 12.6667H5.66683M11.2594 6.00001L9.8205 3.64541C9.21864 2.66055 8.91771 2.16811 8.5303 2.00024C8.19207 1.85368 7.80826 1.85368 7.47003 2.00024C7.08262 2.16811 6.78169 2.66055 6.17983 3.64541L5.49995 4.75795M12.0002 3.33339L11.2681 6.06544L8.53606 5.33339M1.3335 7.73206L4.06555 7.00001L4.7976 9.73206M10.3335 14.6667L8.3335 12.6667L10.3335 10.6667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowsTriangle)
const ArrowsTriangle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowsTriangle', props.className].join(' ')}
    />
  )
})
ArrowsTriangle.displayName = 'IconArrowsTriangle'
export default ArrowsTriangle
