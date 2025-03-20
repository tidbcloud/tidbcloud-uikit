import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTruck02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 16V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 3 13.92 3 12.8 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 16 4.08 16 5.2 16zm0 0h4.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 15.24 22 14.96 22 14.4v-2.737c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L19.468 8.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C18.704 8 18.582 8 18.337 8H16M9 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTruck02)
const Truck02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Truck02'].join(' ')}
    />
  )
})
Truck02.displayName = 'IconTruck02'
export default Truck02
