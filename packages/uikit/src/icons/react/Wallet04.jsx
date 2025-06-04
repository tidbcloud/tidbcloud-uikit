import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWallet04 = (props, ref) => {
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
        d="M13.3333 6.33317V4.79984C13.3333 4.0531 13.3333 3.67973 13.188 3.39452C13.0602 3.14364 12.8562 2.93966 12.6053 2.81183C12.3201 2.66651 11.9467 2.66651 11.2 2.6665H3.46665C2.71991 2.6665 2.34654 2.6665 2.06133 2.81183C1.81044 2.93966 1.60647 3.14363 1.47864 3.39452C1.33331 3.67973 1.33331 4.0531 1.33331 4.79984V11.1998C1.33331 11.9466 1.33331 12.3199 1.47864 12.6052C1.60647 12.856 1.81044 13.06 2.06133 13.1878C2.34654 13.3332 2.71991 13.3332 3.46665 13.3332L11.2 13.3332C11.9467 13.3332 12.3201 13.3332 12.6053 13.1878C12.8562 13.06 13.0602 12.856 13.188 12.6052C13.3333 12.3199 13.3333 11.9466 13.3333 11.1998V9.6665M9.99998 7.99984C9.99998 7.69007 9.99998 7.53518 10.0256 7.40638C10.1308 6.87746 10.5443 6.464 11.0732 6.35879C11.202 6.33317 11.3569 6.33317 11.6666 6.33317H13C13.3098 6.33317 13.4646 6.33317 13.5934 6.35879C14.1224 6.464 14.5358 6.87746 14.641 7.40638C14.6666 7.53518 14.6666 7.69007 14.6666 7.99984C14.6666 8.30961 14.6666 8.46449 14.641 8.59329C14.5358 9.12221 14.1224 9.53568 13.5934 9.64088C13.4646 9.6665 13.3098 9.6665 13 9.6665H11.6666C11.3569 9.6665 11.202 9.6665 11.0732 9.64088C10.5443 9.53567 10.1308 9.12221 10.0256 8.59329C9.99998 8.46449 9.99998 8.30961 9.99998 7.99984Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWallet04)
const Wallet04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wallet04', props.className].join(' ')}
    />
  )
})
Wallet04.displayName = 'IconWallet04'
export default Wallet04
