import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSliders02 = (props, ref) => {
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
        d="M3.33333 14L3.33333 10M3.33333 10C4.06971 10 4.66667 9.40305 4.66667 8.66667C4.66667 7.93029 4.06971 7.33333 3.33333 7.33333C2.59695 7.33333 2 7.93029 2 8.66667C2 9.40305 2.59695 10 3.33333 10ZM3.33333 4.66667V2M8 14V10M8 4.66667V2M8 4.66667C7.26362 4.66667 6.66667 5.26362 6.66667 6C6.66667 6.73638 7.26362 7.33333 8 7.33333C8.73638 7.33333 9.33333 6.73638 9.33333 6C9.33333 5.26362 8.73638 4.66667 8 4.66667ZM12.6667 14V11.3333M12.6667 11.3333C13.403 11.3333 14 10.7364 14 10C14 9.26362 13.403 8.66667 12.6667 8.66667C11.9303 8.66667 11.3333 9.26362 11.3333 10C11.3333 10.7364 11.9303 11.3333 12.6667 11.3333ZM12.6667 6V2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSliders02)
const Sliders02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sliders02', props.className].join(' ')}
    />
  )
})
Sliders02.displayName = 'IconSliders02'
export default Sliders02
