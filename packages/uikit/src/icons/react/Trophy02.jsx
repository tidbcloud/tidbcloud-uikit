import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTrophy02 = (props, ref) => {
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
        d="M7.99992 11.3333C5.60668 11.3333 3.66659 9.39323 3.66659 7V3.03704C3.66659 2.69159 3.66659 2.51887 3.72905 2.38492C3.79529 2.24287 3.90946 2.1287 4.05151 2.06246C4.18546 2 4.35818 2 4.70362 2H11.2962C11.6417 2 11.8144 2 11.9483 2.06246C12.0904 2.1287 12.2046 2.24287 12.2708 2.38492C12.3333 2.51887 12.3333 2.69159 12.3333 3.03704V7C12.3333 9.39323 10.3932 11.3333 7.99992 11.3333ZM7.99992 11.3333V14M11.3333 14H4.66659M14.6666 3.33333V6.66667M1.33325 3.33333V6.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTrophy02)
const Trophy02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Trophy02', props.className].join(' ')}
    />
  )
})
Trophy02.displayName = 'IconTrophy02'
export default Trophy02
