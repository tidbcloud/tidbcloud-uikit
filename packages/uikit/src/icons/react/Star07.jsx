import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStar07 = (props, ref) => {
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
        d="M14.6666 7.99992H13.3333M12.7139 12.714L11.7711 11.7712M2.66659 7.99992H1.33325M4.22854 4.2287L3.28573 3.28589M7.99992 2.66659V1.33325M11.7711 4.2287L12.7139 3.28589M7.99992 14.6666V13.3333M3.28573 12.714L4.22854 11.7712M7.99992 4.66659L9.02992 6.75325L11.3333 7.08992L9.66659 8.71325L10.0599 11.0066L7.99992 9.92325L5.93992 11.0066L6.33325 8.71325L4.66659 7.08992L6.96992 6.75325L7.99992 4.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStar07)
const Star07 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Star07', props.className].join(' ')}
    />
  )
})
Star07.displayName = 'IconStar07'
export default Star07
