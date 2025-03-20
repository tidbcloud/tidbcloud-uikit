import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCopy06 = (props, ref) => {
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
        d="M7.5 3h7.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v7.1M6.2 21h8.1c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.98 6.5 15.42 6.5 14.3 6.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.02 3 8.58 3 9.7v8.1c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCopy06)
const Copy06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Copy06'].join(' ')}
    />
  )
})
Copy06.displayName = 'IconCopy06'
export default Copy06
