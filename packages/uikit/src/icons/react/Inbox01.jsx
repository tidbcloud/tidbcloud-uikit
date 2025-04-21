import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInbox01 = (props, ref) => {
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
        d="M1.66659 7.99996H3.92123C4.37803 7.99996 4.79563 8.25805 4.99992 8.66663C5.20421 9.0752 5.6218 9.33329 6.07861 9.33329H9.92123C10.378 9.33329 10.7956 9.0752 10.9999 8.66663C11.2042 8.25805 11.6218 7.99996 12.0786 7.99996H14.3333M5.97763 2.66663H10.0222C10.7401 2.66663 11.0991 2.66663 11.416 2.77594C11.6962 2.8726 11.9515 3.03036 12.1633 3.23779C12.4028 3.47236 12.5633 3.79343 12.8844 4.43554L14.3288 7.32429C14.4547 7.57628 14.5177 7.70228 14.5622 7.83432C14.6016 7.95159 14.6301 8.07227 14.6473 8.1948C14.6666 8.33278 14.6666 8.47364 14.6666 8.75538V10.1333C14.6666 11.2534 14.6666 11.8134 14.4486 12.2413C14.2569 12.6176 13.9509 12.9236 13.5746 13.1153C13.1467 13.3333 12.5867 13.3333 11.4666 13.3333H4.53325C3.41315 13.3333 2.85309 13.3333 2.42527 13.1153C2.04895 12.9236 1.74299 12.6176 1.55124 12.2413C1.33325 11.8134 1.33325 11.2534 1.33325 10.1333V8.75538C1.33325 8.47364 1.33325 8.33278 1.35257 8.1948C1.36972 8.07227 1.39821 7.95159 1.43767 7.83432C1.48209 7.70228 1.54509 7.57628 1.67108 7.32429L3.11546 4.43554C3.43652 3.79342 3.59705 3.47236 3.83655 3.23779C4.04834 3.03036 4.30359 2.8726 4.58384 2.77594C4.90075 2.66663 5.25971 2.66663 5.97763 2.66663Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInbox01)
const Inbox01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Inbox01', props.className].join(' ')}
    />
  )
})
Inbox01.displayName = 'IconInbox01'
export default Inbox01
