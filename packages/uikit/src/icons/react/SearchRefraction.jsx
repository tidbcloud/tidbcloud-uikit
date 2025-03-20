import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSearchRefraction = (props, ref) => {
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
        d="m21 21-4.35-4.35M11 6a5 5 0 0 1 5 5m3 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSearchRefraction)
const SearchRefraction = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SearchRefraction'].join(' ')}
    />
  )
})
SearchRefraction.displayName = 'IconSearchRefraction'
export default SearchRefraction
