import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHandsDown = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 22 22"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        d="M6.06862 12.9191V1.0143M19.6181 12.9889H14.1197C16.2501 20.6106 12.6516 21 12.6516 21C11.1259 21 11.4426 19.8317 11.3274 19.637C11.3274 15.9097 7.23971 12.9889 7.23971 12.9889C5.9539 12.9889 1.69089 12.9854 1.69089 12.9854C1.01074 12.9854 1 12.3386 1 12.3386L1.68015 1.67809C1.68015 1 2.38177 1 2.38177 1H17.5455C18.3227 1 18.956 2.97506 18.956 2.97506C21 9.70651 21 11.7093 21 11.7093C21 13.1001 19.6181 12.9889 19.6181 12.9889Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHandsDown)
const HandsDown = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'HandsDown'].join(' ')}
    />
  )
})
HandsDown.displayName = 'IconHandsDown'
export default HandsDown
