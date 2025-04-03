import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStrikethrough01 = (props, ref) => {
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
        d="M4 10.6665C4 12.1393 5.19391 13.3332 6.66667 13.3332H9.33333C10.8061 13.3332 12 12.1393 12 10.6665C12 9.19374 10.8061 7.99984 9.33333 7.99984M12 5.33317C12 3.86041 10.8061 2.6665 9.33333 2.6665H6.66667C5.19391 2.6665 4 3.86041 4 5.33317M2 7.99984H14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStrikethrough01)
const Strikethrough01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Strikethrough01', props.className].join(' ')}
    />
  )
})
Strikethrough01.displayName = 'IconStrikethrough01'
export default Strikethrough01
