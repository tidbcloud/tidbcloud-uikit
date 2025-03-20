import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlasses01 = (props, ref) => {
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
        d="M10 11.535a4.01 4.01 0 0 1 4 0M8.828 9.172a4 4 0 1 1-5.657 5.656 4 4 0 0 1 5.657-5.656m12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlasses01)
const Glasses01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Glasses01'].join(' ')}
    />
  )
})
Glasses01.displayName = 'IconGlasses01'
export default Glasses01
