import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint04 = (props, ref) => {
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
        d="M3.87125 12.3536C3.88306 12.3337 3.89515 12.3139 3.90754 12.2942C4.81053 10.8588 5.33327 9.16118 5.33327 7.33333C5.33327 5.86057 6.52718 4.66667 7.99994 4.66667C9.4727 4.66667 10.6666 5.86057 10.6666 7.33333C10.6666 8.01136 10.6204 8.67906 10.5311 9.33333M9.11948 13.8957C9.52728 13.0817 9.86161 12.2246 10.1138 11.3333M12.6731 12.088C13.1031 10.5771 13.3333 8.98211 13.3333 7.33333C13.3333 4.38781 10.9455 2 8 2C7.02857 2 6.1178 2.25972 5.33333 2.71351M2 10.2428C2.42711 9.36358 2.66667 8.37643 2.66667 7.33333C2.66667 6.3619 2.92638 5.45113 3.38017 4.66667M7.99991 7.33333C7.99991 9.67813 7.32739 11.8659 6.16471 13.7141"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFingerprint04)
const Fingerprint04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Fingerprint04', props.className].join(' ')}
    />
  )
})
Fingerprint04.displayName = 'IconFingerprint04'
export default Fingerprint04
