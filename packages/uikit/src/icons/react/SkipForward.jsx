import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSkipForward = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12.6666 3.33325V12.6666M5.06626 11.9468L8.95876 8.83285C9.31466 8.54813 9.49261 8.40577 9.55703 8.23378C9.61352 8.08299 9.61352 7.91685 9.55703 7.76605C9.49261 7.59407 9.31466 7.45171 8.95876 7.16699L5.06626 4.05299C4.51148 3.60917 4.23409 3.38725 4.00064 3.387C3.79761 3.38678 3.60555 3.47909 3.47889 3.63777C3.33325 3.82022 3.33325 4.17545 3.33325 4.88592V11.1139C3.33325 11.8244 3.33325 12.1796 3.47889 12.3621C3.60555 12.5207 3.79761 12.6131 4.00064 12.6128C4.23409 12.6126 4.51148 12.3907 5.06626 11.9468Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSkipForward)
const SkipForward = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SkipForward', props.className].join(' ')}
    />
  )
})
SkipForward.displayName = 'IconSkipForward'
export default SkipForward
