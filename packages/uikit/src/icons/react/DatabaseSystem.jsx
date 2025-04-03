import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabaseSystem = (props, ref) => {
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
        d="M14 3.33337C14 4.43794 11.3137 5.33337 8 5.33337C4.68629 5.33337 2 4.43794 2 3.33337M14 3.33337C14 2.2288 11.3137 1.33337 8 1.33337C4.68629 1.33337 2 2.2288 2 3.33337M14 3.33337V7.00004M2 3.33337V12.6667C2 13.7734 4.66667 14.6667 8 14.6667M8 10C4.66667 10 2 9.10671 2 8.00004M10 13.2667C10 14.0399 10.597 14.6667 11.3333 14.6667H12.5714C13.3604 14.6667 14 13.9951 14 13.1667C14 12.3383 13.3604 11.6667 12.5714 11.6667H11.4286C10.6396 11.6667 10 10.9951 10 10.1667C10 9.33828 10.6396 8.66671 11.4286 8.66671H12.6667C13.403 8.66671 14 9.29351 14 10.0667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabaseSystem)
const DatabaseSystem = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DatabaseSystem', props.className].join(' ')}
    />
  )
})
DatabaseSystem.displayName = 'IconDatabaseSystem'
export default DatabaseSystem
