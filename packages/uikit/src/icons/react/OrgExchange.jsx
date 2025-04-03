import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrgExchange = (props, ref) => {
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
        d="M8.66634 7.33333H11.8663C12.6131 7.33333 12.9864 7.33333 13.2717 7.47866M8.66634 7.33333V4.13333C8.66634 3.3866 8.66634 3.01323 8.52102 2.72801C8.39319 2.47713 8.18921 2.27316 7.93833 2.14532C7.65311 2 7.27974 2 6.53301 2H4.13301C3.38627 2 3.0129 2 2.72769 2.14532C2.4768 2.27316 2.27283 2.47713 2.145 2.72801C1.99967 3.01323 1.99967 3.3866 1.99967 4.13333V14M8.66634 7.33333V9.06667M1.99967 14H7.17114M1.99967 14H1.33301M4.33301 4.66667H6.33301M4.33301 7.33333H6.33301M4.33301 10H6.33301M14.6663 13.1825H9.33301L10.6663 14.6667M9.33301 10.8175H14.6663L13.333 9.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOrgExchange)
const OrgExchange = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'OrgExchange', props.className].join(' ')}
    />
  )
})
OrgExchange.displayName = 'IconOrgExchange'
export default OrgExchange
