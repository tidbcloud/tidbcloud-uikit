import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockRight = (props, ref) => {
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
        d="M14 8.00001L9.33333 3.33334V6.00001H2.53333C2.34665 6.00001 2.25331 6.00001 2.182 6.03634C2.11928 6.0683 2.06829 6.11929 2.03633 6.18201C2 6.25332 2 6.34666 2 6.53334V9.46668C2 9.65336 2 9.7467 2.03633 9.81801C2.06829 9.88073 2.11928 9.93172 2.182 9.96368C2.25331 10 2.34665 10 2.53333 10H9.33333V12.6667L14 8.00001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockRight)
const ArrowBlockRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockRight', props.className].join(' ')}
    />
  )
})
ArrowBlockRight.displayName = 'IconArrowBlockRight'
export default ArrowBlockRight
