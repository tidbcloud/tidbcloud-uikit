import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLifeBuoy02 = (props, ref) => {
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
        d="M5.64313 5.6429L3.28612 3.28589M3.28612 12.714L5.64315 10.3569M10.3572 10.3569L12.7142 12.7139M12.7142 3.28586L10.3572 5.64289M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992ZM11.3335 7.99992C11.3335 9.84087 9.84111 11.3333 8.00016 11.3333C6.15921 11.3333 4.66683 9.84087 4.66683 7.99992C4.66683 6.15897 6.15921 4.66659 8.00016 4.66659C9.84111 4.66659 11.3335 6.15897 11.3335 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLifeBuoy02)
const LifeBuoy02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LifeBuoy02', props.className].join(' ')}
    />
  )
})
LifeBuoy02.displayName = 'IconLifeBuoy02'
export default LifeBuoy02
