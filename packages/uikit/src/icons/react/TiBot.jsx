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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00007 14.6666L2.22656 11.3333V4.66665L8.00007 1.33331L13.7736 4.66665V11.3333V14.6129L10.8868 13L8.00007 14.6666Z"
        fill="white"
      />
      <path
        d="M13.7736 4.66665V11.3333V14.6129L10.8868 13L8.00007 14.6666M13.7736 4.66665L8.00007 1.33331L2.22656 4.66665M13.7736 4.66665L8.00007 7.99998M2.22656 4.66665V11.3333L8.00007 14.6666M2.22656 4.66665L8.00007 7.99998M8.00007 14.6666V7.99998"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinejoin="round"
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
