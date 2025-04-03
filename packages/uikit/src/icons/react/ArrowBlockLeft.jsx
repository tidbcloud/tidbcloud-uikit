import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockLeft = (props, ref) => {
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
        d="M2 7.99998L6.66667 3.33331V5.99998H13.4667C13.6534 5.99998 13.7467 5.99998 13.818 6.03631C13.8807 6.06827 13.9317 6.11926 13.9637 6.18198C14 6.25329 14 6.34663 14 6.53331V9.46665C14 9.65333 14 9.74667 13.9637 9.81798C13.9317 9.8807 13.8807 9.93169 13.818 9.96365C13.7467 9.99998 13.6534 9.99998 13.4667 9.99998H6.66667V12.6666L2 7.99998Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockLeft)
const ArrowBlockLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockLeft', props.className].join(' ')}
    />
  )
})
ArrowBlockLeft.displayName = 'IconArrowBlockLeft'
export default ArrowBlockLeft
