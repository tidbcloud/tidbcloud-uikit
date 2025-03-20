import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDivider = (props, ref) => {
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
        d="M3 12h.01m4.49 0h.01m8.99 0h.01M12 12h.01M21 12h.01M21 21v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 17 18.92 17 17.8 17H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 18.52 3 19.08 3 20.2v.8M21 3v.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 7 18.92 7 17.8 7H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 5.48 3 4.92 3 3.8V3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDivider)
const Divider = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Divider'].join(' ')}
    />
  )
})
Divider.displayName = 'IconDivider'
export default Divider
