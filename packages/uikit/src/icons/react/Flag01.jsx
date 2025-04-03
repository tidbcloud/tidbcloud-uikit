import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag01 = (props, ref) => {
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
        d="M2.6665 10.0002C2.6665 10.0002 3.33317 9.3335 5.33317 9.3335C7.33317 9.3335 8.6665 10.6668 10.6665 10.6668C12.6665 10.6668 13.3332 10.0002 13.3332 10.0002V2.00016C13.3332 2.00016 12.6665 2.66683 10.6665 2.66683C8.6665 2.66683 7.33317 1.3335 5.33317 1.3335C3.33317 1.3335 2.6665 2.00016 2.6665 2.00016L2.6665 14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag01)
const Flag01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag01', props.className].join(' ')}
    />
  )
})
Flag01.displayName = 'IconFlag01'
export default Flag01
