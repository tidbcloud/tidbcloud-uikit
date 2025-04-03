import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHandsUp = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      strokeWidth={1.5}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6.06862 9.08094V20.9857M19.6181 9.01111H14.1197C16.2501 1.3894 12.6516 1 12.6516 1C11.1259 1 11.4426 2.16831 11.3274 2.36297C11.3274 6.09034 7.23971 9.01111 7.23971 9.01111C5.9539 9.01111 1.69089 9.01457 1.69089 9.01457C1.01074 9.01457 1 9.66137 1 9.66137L1.68015 20.3219C1.68015 21 2.38177 21 2.38177 21H17.5455C18.3227 21 18.956 19.0249 18.956 19.0249C21 12.2935 21 10.2907 21 10.2907C21 8.89994 19.6181 9.01111 19.6181 9.01111Z"
        stroke="currentColor"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHandsUp)
const HandsUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HandsUp', props.className].join(' ')}
    />
  )
})
HandsUp.displayName = 'IconHandsUp'
export default HandsUp
