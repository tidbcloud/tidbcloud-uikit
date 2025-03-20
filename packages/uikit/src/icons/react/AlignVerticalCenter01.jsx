import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignVerticalCenter01 = (props, ref) => {
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
        d="M3 12h18M12 2v6.5m0 0 4-4m-4 4-4-4M12 22v-6.5m0 0 4 4m-4-4-4 4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignVerticalCenter01)
const AlignVerticalCenter01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'AlignVerticalCenter01'].join(' ')}
    />
  )
})
AlignVerticalCenter01.displayName = 'IconAlignVerticalCenter01'
export default AlignVerticalCenter01
