import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBracketsMinus = (props, ref) => {
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
        d="M12.3807 13.3332C13.222 13.3332 13.9047 12.6512 13.9047 11.8092V8.76184L14.6667 7.99984L13.9047 7.23784V4.1905C13.9047 3.3485 13.2227 2.6665 12.3807 2.6665M3.6195 2.6665C2.7775 2.6665 2.0955 3.3485 2.0955 4.1905V7.23784L1.3335 7.99984L2.0955 8.76184V11.8092C2.0955 12.6512 2.7775 13.3332 3.6195 13.3332M5.3335 7.99984H10.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBracketsMinus)
const BracketsMinus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BracketsMinus', props.className].join(' ')}
    />
  )
})
BracketsMinus.displayName = 'IconBracketsMinus'
export default BracketsMinus
