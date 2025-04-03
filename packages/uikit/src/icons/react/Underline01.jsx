import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUnderline01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M12.0003 2.6665V7.33317C12.0003 9.54231 10.2095 11.3332 8.00033 11.3332C5.79119 11.3332 4.00033 9.54231 4.00033 7.33317V2.6665M2.66699 13.9998H13.3337"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUnderline01)
const Underline01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Underline01', props.className].join(' ')}
    />
  )
})
Underline01.displayName = 'IconUnderline01'
export default Underline01
