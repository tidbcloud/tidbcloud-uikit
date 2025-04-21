import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency01 = (props, ref) => {
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
        d="M11.9186 13.3933C10.7796 14.2208 9.40788 14.6665 8.00001 14.6665C6.59215 14.6665 5.22043 14.2208 4.08145 13.3933M10.9225 2.00788C12.1879 2.62504 13.2254 3.62696 13.8863 4.87003C14.5473 6.11309 14.7977 7.5335 14.6018 8.92766M1.39829 8.92759C1.20235 7.53343 1.45281 6.11303 2.11376 4.86996C2.77471 3.62689 3.81223 2.62498 5.0776 2.00781M11.6667 7.99984C11.6667 10.0249 10.0251 11.6665 8.00001 11.6665C5.97497 11.6665 4.33335 10.0249 4.33335 7.99984C4.33335 5.97479 5.97497 4.33317 8.00001 4.33317C10.0251 4.33317 11.6667 5.97479 11.6667 7.99984Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency01)
const Cryptocurrency01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cryptocurrency01', props.className].join(' ')}
    />
  )
})
Cryptocurrency01.displayName = 'IconCryptocurrency01'
export default Cryptocurrency01
