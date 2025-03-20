import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding06 = (props, ref) => {
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
        d="M11 11H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 12.52 3 13.08 3 14.2V21m18 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C11 4.52 11 5.08 11 6.2V21m11 0H2M14.5 7h3m-3 4h3m-3 4h3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding06)
const Building06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Building06'].join(' ')}
    />
  )
})
Building06.displayName = 'IconBuilding06'
export default Building06
