import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrackets = (props, ref) => {
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
        d="M12.3807 13.3334C13.222 13.3334 13.9047 12.6514 13.9047 11.8094V8.76208L14.6667 8.00008L13.9047 7.23808V4.19075C13.9047 3.34875 13.2227 2.66675 12.3807 2.66675M3.6195 2.66675C2.7775 2.66675 2.0955 3.34875 2.0955 4.19075V7.23808L1.3335 8.00008L2.0955 8.76208V11.8094C2.0955 12.6514 2.7775 13.3334 3.6195 13.3334"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Brackets', props.className].join(' ')}
    />
  )
})
Brackets.displayName = 'IconBrackets'
export default Brackets
