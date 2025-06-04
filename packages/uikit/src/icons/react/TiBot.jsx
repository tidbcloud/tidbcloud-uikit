import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTiBot = (props, ref) => {
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
        d="M8.00007 14.6667L2.22656 11.3333V4.66668L8.00007 1.33334L13.7736 4.66668V11.3333V14.6129L10.8868 13L8.00007 14.6667Z"
        fill="white"
        strokeWidth="inherit"
        stroke="currentColor"
      />
      <path
        d="M13.7736 4.66668V11.3333V14.6129L10.8868 13L8.00007 14.6667M13.7736 4.66668L8.00007 1.33334L2.22656 4.66668M13.7736 4.66668L8.00007 8.00001M2.22656 4.66668V11.3333L8.00007 14.6667M2.22656 4.66668L8.00007 8.00001M8.00007 14.6667V8.00001"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTiBot)
const TiBot = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TiBot', props.className].join(' ')}
    />
  )
})
TiBot.displayName = 'IconTiBot'
export default TiBot
