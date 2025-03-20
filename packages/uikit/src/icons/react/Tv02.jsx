import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTv02 = (props, ref) => {
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
        d="m17 21-5-4-5 4m-.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTv02)
const Tv02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Tv02'].join(' ')}
    />
  )
})
Tv02.displayName = 'IconTv02'
export default Tv02
