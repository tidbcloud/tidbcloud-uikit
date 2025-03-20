import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding05 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="M13 11h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 12.52 21 13.08 21 14.2V21m-8 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C11.48 3 10.92 3 9.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2V21m19 0H2M6.5 7h3m-3 4h3m-3 4h3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding05)
const Building05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Building05'].join(' ')}
    />
  )
})
Building05.displayName = 'IconBuilding05'
export default Building05
