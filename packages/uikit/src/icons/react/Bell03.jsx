import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBell03 = (props, ref) => {
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
        d="M9.99981 12.6666C9.99981 13.7712 9.10438 14.6666 7.99981 14.6666C6.89524 14.6666 5.99981 13.7712 5.99981 12.6666M9.19748 4.15896C9.48781 3.85901 9.66648 3.45033 9.66648 2.99992C9.66648 2.07944 8.92029 1.33325 7.99981 1.33325C7.07934 1.33325 6.33315 2.07944 6.33315 2.99992C6.33315 3.45033 6.51182 3.85901 6.80214 4.15896M11.9998 7.46659C11.9998 6.54717 11.5784 5.66541 10.8282 5.01528C10.0781 4.36516 9.06068 3.99992 7.99981 3.99992C6.93895 3.99992 5.92153 4.36516 5.17139 5.01528C4.42124 5.66541 3.99981 6.54717 3.99981 7.46659C3.99981 8.98779 3.62257 10.1003 3.15186 10.8964C2.61537 11.8037 2.34713 12.2573 2.35772 12.3657C2.36984 12.4897 2.39216 12.5288 2.49271 12.6023C2.58059 12.6666 3.02215 12.6666 3.90527 12.6666H12.0944C12.9775 12.6666 13.419 12.6666 13.5069 12.6023C13.6075 12.5288 13.6298 12.4897 13.6419 12.3657C13.6525 12.2573 13.3843 11.8037 12.8478 10.8964C12.3771 10.1003 11.9998 8.98779 11.9998 7.46659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBell03)
const Bell03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bell03', props.className].join(' ')}
    />
  )
})
Bell03.displayName = 'IconBell03'
export default Bell03
