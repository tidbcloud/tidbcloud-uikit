import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBold02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4V20M9.5 4H15.5C17.7091 4 19.5 5.79086 19.5 8C19.5 10.2091 17.7091 12 15.5 12H9.5H16.5C18.7091 12 20.5 13.7909 20.5 16C20.5 18.2091 18.7091 20 16.5 20H9.5M9.5 4V20M9.5 4H4M9.5 20H4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBold02)
const Bold02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Bold02'].join(' ')}
    />
  )
})
Bold02.displayName = 'IconBold02'
export default Bold02
