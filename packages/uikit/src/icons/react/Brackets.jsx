import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrackets = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.38 13.333c.842 0 1.525-.682 1.525-1.524V8.762L14.667 8l-.762-.762V4.191c0-.842-.682-1.524-1.524-1.524m-8.761 0c-.843 0-1.525.682-1.525 1.524v3.047L1.334 8l.763.762v3.047c0 .842.681 1.524 1.523 1.524"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBrackets)
const Brackets = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Brackets'].join(' ')}
    />
  )
})
Brackets.displayName = 'IconBrackets'
export default Brackets
