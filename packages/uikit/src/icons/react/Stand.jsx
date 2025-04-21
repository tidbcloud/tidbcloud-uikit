import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStand = (props, ref) => {
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
        d="M5.99992 11.3335L2.66659 14.6668M9.99992 11.3335L13.3333 14.6668M7.99992 1.3335V2.66683M7.99992 14.6668V11.3335M3.46659 11.3335H12.5333C13.28 11.3335 13.6534 11.3335 13.9386 11.1882C14.1895 11.0603 14.3934 10.8564 14.5213 10.6055C14.6666 10.3203 14.6666 9.9469 14.6666 9.20016V4.80016C14.6666 4.05343 14.6666 3.68006 14.5213 3.39484C14.3934 3.14396 14.1895 2.93999 13.9386 2.81215C13.6534 2.66683 13.28 2.66683 12.5333 2.66683H3.46659C2.71985 2.66683 2.34648 2.66683 2.06126 2.81215C1.81038 2.93999 1.60641 3.14396 1.47858 3.39484C1.33325 3.68006 1.33325 4.05343 1.33325 4.80016V9.20016C1.33325 9.9469 1.33325 10.3203 1.47858 10.6055C1.60641 10.8564 1.81038 11.0603 2.06126 11.1882C2.34648 11.3335 2.71985 11.3335 3.46659 11.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStand)
const Stand = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Stand', props.className].join(' ')}
    />
  )
})
Stand.displayName = 'IconStand'
export default Stand
