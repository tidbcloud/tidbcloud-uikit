import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLifeBuoy = (props, ref) => {
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
        d="M6.09085 6.0909L3.28597 3.28601M3.28597 12.7141L6.11199 9.88808M9.90739 9.90922L12.7123 12.7141M12.7123 3.28601L9.88583 6.11245M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004ZM10.6667 8.00004C10.6667 9.4728 9.47277 10.6667 8.00001 10.6667C6.52725 10.6667 5.33334 9.4728 5.33334 8.00004C5.33334 6.52728 6.52725 5.33337 8.00001 5.33337C9.47277 5.33337 10.6667 6.52728 10.6667 8.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLifeBuoy)
const LifeBuoy = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LifeBuoy', props.className].join(' ')}
    />
  )
})
LifeBuoy.displayName = 'IconLifeBuoy'
export default LifeBuoy
