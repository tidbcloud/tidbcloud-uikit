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
      ref={ref}
      {...props}
    >
      <path
        d="M12.6668 3.33325V12.6666M5.0665 11.9468L8.959 8.83285C9.3149 8.54813 9.49285 8.40577 9.55728 8.23378C9.61376 8.08299 9.61376 7.91685 9.55728 7.76605C9.49285 7.59407 9.3149 7.45171 8.959 7.16699L5.0665 4.05299C4.51172 3.60917 4.23433 3.38725 4.00088 3.387C3.79786 3.38678 3.60579 3.47909 3.47913 3.63777C3.3335 3.82022 3.3335 4.17545 3.3335 4.88592V11.1139C3.3335 11.8244 3.3335 12.1796 3.47913 12.3621C3.60579 12.5207 3.79786 12.6131 4.00088 12.6128C4.23433 12.6126 4.51172 12.3907 5.0665 11.9468Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
