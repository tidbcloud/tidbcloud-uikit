import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLockUnlocked03 = (props, ref) => {
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
        d="M4.6665 7.33333V5.33333C4.6665 3.49238 6.15889 2 7.99984 2C9.61248 2 10.9576 3.14517 11.2665 4.66667M5.8665 14H10.1332C11.2533 14 11.8133 14 12.2412 13.782C12.6175 13.5903 12.9234 13.2843 13.1152 12.908C13.3332 12.4802 13.3332 11.9201 13.3332 10.8V10.5333C13.3332 9.41323 13.3332 8.85318 13.1152 8.42535C12.9234 8.04903 12.6175 7.74307 12.2412 7.55132C11.8133 7.33333 11.2533 7.33333 10.1332 7.33333H5.8665C4.7464 7.33333 4.18635 7.33333 3.75852 7.55132C3.3822 7.74307 3.07624 8.04903 2.88449 8.42535C2.6665 8.85318 2.6665 9.41323 2.6665 10.5333V10.8C2.6665 11.9201 2.6665 12.4802 2.88449 12.908C3.07624 13.2843 3.3822 13.5903 3.75852 13.782C4.18635 14 4.7464 14 5.8665 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLockUnlocked03)
const LockUnlocked03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LockUnlocked03', props.className].join(' ')}
    />
  )
})
LockUnlocked03.displayName = 'IconLockUnlocked03'
export default LockUnlocked03
