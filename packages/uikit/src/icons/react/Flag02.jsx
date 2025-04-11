import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag02 = (props, ref) => {
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
        d="M2.6665 10.0002C2.6665 10.0002 3.33317 9.3335 5.33317 9.3335C7.33317 9.3335 8.6665 10.6668 10.6665 10.6668C12.6665 10.6668 13.3332 10.0002 13.3332 10.0002V2.66683C13.3332 2.66683 12.6665 3.3335 10.6665 3.3335C8.6665 3.3335 7.33317 2.00016 5.33317 2.00016C3.33317 2.00016 2.6665 2.66683 2.6665 2.66683M2.6665 14.6668L2.6665 1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag02)
const Flag02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag02', props.className].join(' ')}
    />
  )
})
Flag02.displayName = 'IconFlag02'
export default Flag02
