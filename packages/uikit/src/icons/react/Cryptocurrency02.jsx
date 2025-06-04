import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency02 = (props, ref) => {
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
        d="M11.9186 13.3933C10.7796 14.2208 9.40788 14.6665 8.00001 14.6665C6.59215 14.6665 5.22043 14.2208 4.08145 13.3933M10.9225 2.00788C12.1879 2.62504 13.2254 3.62696 13.8863 4.87003C14.5473 6.11309 14.7977 7.5335 14.6018 8.92766M1.39829 8.92759C1.20235 7.53343 1.45281 6.11303 2.11376 4.86996C2.77471 3.62689 3.81223 2.62498 5.0776 2.00781M7.62289 4.37696L4.37714 7.62271C4.24513 7.75472 4.17913 7.82072 4.1544 7.89683C4.13265 7.96378 4.13265 8.0359 4.1544 8.10284C4.17913 8.17895 4.24513 8.24496 4.37714 8.37696L7.62289 11.6227C7.7549 11.7547 7.8209 11.8207 7.89701 11.8455C7.96396 11.8672 8.03607 11.8672 8.10302 11.8455C8.17913 11.8207 8.24513 11.7547 8.37714 11.6227L11.6229 8.37696C11.7549 8.24496 11.8209 8.17895 11.8456 8.10284C11.8674 8.0359 11.8674 7.96378 11.8456 7.89683C11.8209 7.82072 11.7549 7.75472 11.6229 7.62272L8.37714 4.37696C8.24513 4.24496 8.17913 4.17895 8.10302 4.15422C8.03607 4.13247 7.96396 4.13247 7.89701 4.15422C7.8209 4.17895 7.7549 4.24496 7.62289 4.37696Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency02)
const Cryptocurrency02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cryptocurrency02', props.className].join(' ')}
    />
  )
})
Cryptocurrency02.displayName = 'IconCryptocurrency02'
export default Cryptocurrency02
