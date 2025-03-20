import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataApiSystem = (props, ref) => {
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
        d="M20.5 7.278 12 12m0 0L3.5 7.278M12 12v9.5m.777.068c-.284.158-.425.237-.575.267q-.201.042-.403 0c-.15-.03-.292-.11-.576-.267l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.058V7.941c0-.342 0-.514.05-.666a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111c.284-.158.425-.237.576-.268a1 1 0 0 1 .402 0c.15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 20.133c0 1.031.746 1.867 1.667 1.867h1.547c.987 0 1.786-.895 1.786-2s-.8-2-1.786-2h-1.428C16.799 18 16 17.105 16 16s.8-2 1.786-2h1.547c.92 0 1.667.836 1.667 1.867"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataApiSystem)
const DataApiSystem = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DataApiSystem'].join(' ')}
    />
  )
})
DataApiSystem.displayName = 'IconDataApiSystem'
export default DataApiSystem
