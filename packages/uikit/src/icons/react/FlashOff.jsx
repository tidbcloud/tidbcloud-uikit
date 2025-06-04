import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlashOff = (props, ref) => {
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
        d="M5.33333 5.3335L2.72897 8.45873C2.49643 8.73778 2.38016 8.8773 2.37839 8.99514C2.37684 9.09757 2.42249 9.19503 2.50217 9.25943C2.59383 9.3335 2.77545 9.3335 3.13869 9.3335H8L7.33333 14.6668L10.6667 10.6668M10.4334 6.66683H12.8613C13.2245 6.66683 13.4062 6.66683 13.4978 6.7409C13.5775 6.80529 13.6232 6.90275 13.6216 7.00519C13.6198 7.12302 13.5036 7.26255 13.271 7.5416L12.3668 8.62663M7.0485 3.27526L8.66664 1.3335L8.26683 4.53197M14 14.0002L2 2.00016"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlashOff)
const FlashOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FlashOff', props.className].join(' ')}
    />
  )
})
FlashOff.displayName = 'IconFlashOff'
export default FlashOff
