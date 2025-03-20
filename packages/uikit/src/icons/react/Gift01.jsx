import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGift01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v16m0-16H8.464c-.52 0-1.02-.21-1.389-.586A2.02 2.02 0 0 1 6.5 4c0-.53.207-1.04.575-1.414A1.95 1.95 0 0 1 8.465 2C11.214 2 12 6 12 6m0 0h3.536c.52 0 1.02-.21 1.389-.586.368-.375.575-.884.575-1.414s-.207-1.04-.575-1.414A1.95 1.95 0 0 0 15.535 2C12.786 2 12 6 12 6m8 5v7.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 22 17.92 22 16.8 22H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 20.48 4 19.92 4 18.8V11M2 7.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 11 3.04 11 3.6 11h16.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 10.24 22 9.96 22 9.4V7.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 6 20.96 6 20.4 6H3.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 6.76 2 7.04 2 7.6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGift01)
const Gift01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Gift01'].join(' ')}
    />
  )
})
Gift01.displayName = 'IconGift01'
export default Gift01
