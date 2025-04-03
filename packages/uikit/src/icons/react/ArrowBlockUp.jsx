import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockUp = (props, ref) => {
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
        d="M6.5335 14C6.34681 14 6.25347 14 6.18217 13.9637C6.11945 13.9317 6.06845 13.8807 6.03649 13.818C6.00016 13.7467 6.00016 13.6534 6.00016 13.4667V6.66667H3.3335L8.00016 2L12.6668 6.66667H10.0002V13.4667C10.0002 13.6534 10.0002 13.7467 9.96383 13.818C9.93187 13.8807 9.88088 13.9317 9.81816 13.9637C9.74686 14 9.65351 14 9.46683 14H6.5335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockUp)
const ArrowBlockUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockUp', props.className].join(' ')}
    />
  )
})
ArrowBlockUp.displayName = 'IconArrowBlockUp'
export default ArrowBlockUp
