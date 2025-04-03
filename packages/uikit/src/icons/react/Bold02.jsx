import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBold02 = (props, ref) => {
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
        d="M3.99984 2.6665V13.3332M6.33317 2.6665H10.3332C11.8059 2.6665 12.9998 3.86041 12.9998 5.33317C12.9998 6.80593 11.8059 7.99984 10.3332 7.99984H6.33317H10.9998C12.4726 7.99984 13.6665 9.19374 13.6665 10.6665C13.6665 12.1393 12.4726 13.3332 10.9998 13.3332H6.33317M6.33317 2.6665V13.3332M6.33317 2.6665H2.6665M6.33317 13.3332H2.6665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Bold02', props.className].join(' ')}
    />
  )
})
Bold02.displayName = 'IconBold02'
export default Bold02
