import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRows01 = (props, ref) => {
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
        d="M17.8 10c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 8.48 21 7.92 21 6.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 10 5.08 10 6.2 10zM17.8 21c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 14 18.92 14 17.8 14H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 15.52 3 16.08 3 17.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRows01)
const Rows01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Rows01'].join(' ')}
    />
  )
})
Rows01.displayName = 'IconRows01'
export default Rows01
