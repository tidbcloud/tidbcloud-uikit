import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPhone01 = (props, ref) => {
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
        d="M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22m4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPhone01)
const Phone01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Phone01'].join(' ')}
    />
  )
})
Phone01.displayName = 'IconPhone01'
export default Phone01
