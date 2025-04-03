import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClusterExchange = (props, ref) => {
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
        d="M3.99967 5.33329H4.00634M3.99967 10.6666H4.00634M3.99967 7.99996H11.9997C13.4724 7.99996 14.6663 6.80605 14.6663 5.33329C14.6663 3.86053 13.4724 2.66663 11.9997 2.66663H3.99967C2.52692 2.66663 1.33301 3.86053 1.33301 5.33329C1.33301 6.80605 2.52692 7.99996 3.99967 7.99996ZM3.99967 7.99996C2.52692 7.99996 1.33301 9.19387 1.33301 10.6666C1.33301 12.1394 2.52692 13.3333 3.99967 13.3333H6.89443M14.6663 13.1824H9.33301L10.6663 14.6666M9.33301 10.8175H14.6663L13.333 9.33329"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClusterExchange)
const ClusterExchange = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ClusterExchange', props.className].join(' ')}
    />
  )
})
ClusterExchange.displayName = 'IconClusterExchange'
export default ClusterExchange
