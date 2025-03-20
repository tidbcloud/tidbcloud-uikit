import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataflow04 = (props, ref) => {
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
        d="M4 18v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 13 7.12 13 8.8 13h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 15.28 20 16.12 20 17.8v.2M4 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8M6 8h12c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 6.398 21 5.932 21 5s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 2 18.932 2 18 2H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 3.602 3 4.068 3 5s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 8 5.068 8 6 8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataflow04)
const Dataflow04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Dataflow04'].join(' ')}
    />
  )
})
Dataflow04.displayName = 'IconDataflow04'
export default Dataflow04
