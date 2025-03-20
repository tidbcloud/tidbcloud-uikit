import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPalette = (props, ref) => {
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
        d="M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 18.0356 15 17.8034 15.0257 17.6084C15.2029 16.2622 16.2622 15.2029 17.6084 15.0257C17.8034 15 18.0356 15 18.5 15H19C20.6569 15 22 13.6569 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 13C7.55228 13 8 12.5523 8 12 8 11.4477 7.55228 11 7 11 6.44772 11 6 11.4477 6 12 6 12.5523 6.44772 13 7 13ZM16 9C16.5523 9 17 8.55228 17 8 17 7.44772 16.5523 7 16 7 15.4477 7 15 7.44772 15 8 15 8.55228 15.4477 9 16 9ZM10 8C10.5523 8 11 7.55228 11 7 11 6.44772 10.5523 6 10 6 9.44772 6 9 6.44772 9 7 9 7.55228 9.44772 8 10 8Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPalette)
const Palette = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Palette'].join(' ')}
    />
  )
})
Palette.displayName = 'IconPalette'
export default Palette
