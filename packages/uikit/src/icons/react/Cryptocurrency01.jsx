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
      ref={ref}
      {...props}
    >
      <path
        d="M11.9187 13.3933C10.7797 14.2208 9.40797 14.6665 8.00011 14.6665C6.59224 14.6665 5.22052 14.2208 4.08154 13.3933M10.9226 2.00788C12.188 2.62504 13.2255 3.62696 13.8864 4.87003C14.5474 6.11309 14.7978 7.5335 14.6019 8.92766M1.39838 8.92759C1.20245 7.53343 1.4529 6.11303 2.11385 4.86996C2.7748 3.62689 3.81232 2.62498 5.0777 2.00781M11.6668 7.99984C11.6668 10.0249 10.0251 11.6665 8.00011 11.6665C5.97506 11.6665 4.33344 10.0249 4.33344 7.99984C4.33344 5.97479 5.97506 4.33317 8.00011 4.33317C10.0251 4.33317 11.6668 5.97479 11.6668 7.99984Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
