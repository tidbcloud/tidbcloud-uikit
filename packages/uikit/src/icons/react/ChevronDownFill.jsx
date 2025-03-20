import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronDownFill = (props, ref) => {
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
        fill="currentColor"
        d="M5.175 8.4c.297-.389.971-.4 1.348-.4h10.665c.449 0 1.094 0 1.469.22.375.221.366.594.322.81a.63.63 0 0 1-.172.299l-5.902 6.258-.025.025c-.072.066-.451.388-.974.388-.504 0-.875-.3-.965-.38l-.04-.04c-.346-.386-5.497-6.109-5.726-6.38-.238-.28-.228-.503 0-.8"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronDownFill)
const ChevronDownFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ChevronDownFill'].join(' ')}
    />
  )
})
ChevronDownFill.displayName = 'IconChevronDownFill'
export default ChevronDownFill
