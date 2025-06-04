import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBracketsSlash = (props, ref) => {
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
        d="M12.3805 13.3334C13.2219 13.3334 13.9045 12.6514 13.9045 11.8094V8.76208L14.6665 8.00008L13.9045 7.23808V4.19075C13.9045 3.34875 13.2225 2.66675 12.3805 2.66675M3.61934 2.66675C2.77734 2.66675 2.09534 3.34875 2.09534 4.19075V7.23808L1.33334 8.00008L2.09534 8.76208V11.8094C2.09534 12.6514 2.77734 13.3334 3.61934 13.3334M6 11.3334L10 4.66675"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBracketsSlash)
const BracketsSlash = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BracketsSlash', props.className].join(' ')}
    />
  )
})
BracketsSlash.displayName = 'IconBracketsSlash'
export default BracketsSlash
