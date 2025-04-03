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
      ref={ref}
      {...props}
    >
      <path
        d="M14 7.99998L9.33333 3.33331V5.99998H2.53333C2.34665 5.99998 2.25331 5.99998 2.182 6.03631C2.11928 6.06827 2.06829 6.11926 2.03633 6.18198C2 6.25329 2 6.34663 2 6.53331V9.46665C2 9.65333 2 9.74667 2.03633 9.81798C2.06829 9.8807 2.11928 9.93169 2.182 9.96365C2.25331 9.99998 2.34665 9.99998 2.53333 9.99998H9.33333V12.6666L14 7.99998Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
