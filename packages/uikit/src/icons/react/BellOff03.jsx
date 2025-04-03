import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellOff03 = (props, ref) => {
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
        d="M10 12.6666C10 13.7712 9.10457 14.6666 8 14.6666C6.89543 14.6666 6 13.7712 6 12.6666M4.91832 5.25644C4.32725 5.87542 4 6.65638 4 7.46659C4 8.98779 3.62275 10.1003 3.15204 10.8964C2.61556 11.8037 2.34732 12.2573 2.35791 12.3657C2.37003 12.4897 2.39234 12.5288 2.49289 12.6023C2.58078 12.6666 3.02234 12.6666 3.90546 12.6666H13.2533M8 3.99992C7.80473 3.99992 7.61093 4.01229 7.42 4.03654C7.16565 4.06884 7.03847 4.085 6.91083 4.0503C6.81893 4.02532 6.68038 3.94477 6.6132 3.87728C6.51988 3.78352 6.49948 3.73407 6.45867 3.63517C6.37789 3.43939 6.33333 3.22486 6.33333 2.99992C6.33333 2.07944 7.07953 1.33325 8 1.33325C8.92047 1.33325 9.66667 2.07944 9.66667 2.99992C9.66667 3.45033 9.488 3.85901 9.19767 4.15896C8.81355 4.05448 8.41002 3.99992 8 3.99992ZM8 3.99992C9.06087 3.99992 10.0783 4.36516 10.8284 5.01528C11.5786 5.66541 12 6.54717 12 7.46659C12 7.68976 12.0061 7.90415 12.0176 8.11002M14 13.3333L2 2.66659"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellOff03)
const BellOff03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BellOff03', props.className].join(' ')}
    />
  )
})
BellOff03.displayName = 'IconBellOff03'
export default BellOff03
