import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataServiceAdd = (props, ref) => {
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
        d="M20.64 7.278 12.48 12m0 0v9.5m0-9.5-2.64-1.528-1.32-.764M21.12 12V7.942c0-.343 0-.514-.049-.667a1 1 0 0 0-.205-.364c-.105-.119-.249-.202-.536-.368l-7.104-4.111c-.273-.158-.409-.237-.553-.267a.9.9 0 0 0-.387 0c-.144.03-.28.11-.552.267l-1.813.907m5.08 17.202-1.775 1.027c-.273.158-.409.237-.553.268a.9.9 0 0 1-.387 0c-.144-.031-.28-.11-.552-.268L5.76 17.5M19.2 21v-6m-2.88 3h5.76M3.072 3.8c0-.28 0-.42.052-.527a.5.5 0 0 1 .21-.219C3.437 3 3.571 3 3.84 3h2.304c.269 0 .403 0 .506.054a.5.5 0 0 1 .21.219c.052.107.052.247.052.527v2.4c0 .28 0 .42-.052.527a.5.5 0 0 1-.21.218C6.547 7 6.413 7 6.144 7H3.84c-.269 0-.403 0-.506-.054a.5.5 0 0 1-.21-.219c-.052-.107-.052-.247-.052-.527zM2 11.613c0-.28 0-.42.052-.527a.5.5 0 0 1 .21-.218c.103-.055.237-.055.506-.055h2.304c.269 0 .403 0 .506.055a.5.5 0 0 1 .21.218c.052.107.052.247.052.527v2.4c0 .28 0 .42-.052.527a.5.5 0 0 1-.21.219c-.103.054-.237.054-.506.054H2.768c-.269 0-.403 0-.506-.054a.5.5 0 0 1-.21-.219C2 14.434 2 14.294 2 14.013z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataServiceAdd)
const DataServiceAdd = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DataServiceAdd'].join(' ')}
    />
  )
})
DataServiceAdd.displayName = 'IconDataServiceAdd'
export default DataServiceAdd
