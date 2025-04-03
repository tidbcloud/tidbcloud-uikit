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
      ref={ref}
      {...props}
    >
      <path
        d="M5.99967 11.3335L2.66634 14.6668M9.99967 11.3335L13.333 14.6668M7.99967 1.3335V2.66683M7.99967 14.6668V11.3335M3.46634 11.3335H12.533C13.2797 11.3335 13.6531 11.3335 13.9383 11.1882C14.1892 11.0603 14.3932 10.8564 14.521 10.6055C14.6663 10.3203 14.6663 9.9469 14.6663 9.20016V4.80016C14.6663 4.05343 14.6663 3.68006 14.521 3.39484C14.3932 3.14396 14.1892 2.93999 13.9383 2.81215C13.6531 2.66683 13.2797 2.66683 12.533 2.66683H3.46634C2.7196 2.66683 2.34624 2.66683 2.06102 2.81215C1.81014 2.93999 1.60616 3.14396 1.47833 3.39484C1.33301 3.68006 1.33301 4.05343 1.33301 4.80016V9.20016C1.33301 9.9469 1.33301 10.3203 1.47833 10.6055C1.60616 10.8564 1.81014 11.0603 2.06102 11.1882C2.34624 11.3335 2.7196 11.3335 3.46634 11.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
