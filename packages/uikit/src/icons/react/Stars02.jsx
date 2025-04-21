import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStars02 = (props, ref) => {
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
        d="M3.00004 14.6668V11.3335M3.00004 4.66683V1.3335M1.33337 3.00016H4.66671M1.33337 13.0002H4.66671M8.66671 2.00016L7.51059 5.00607C7.32258 5.49489 7.22858 5.7393 7.08239 5.94489C6.95283 6.12709 6.79364 6.28629 6.61143 6.41585C6.40585 6.56203 6.16144 6.65604 5.67261 6.84404L2.66671 8.00016L5.67262 9.15628C6.16144 9.34429 6.40585 9.43829 6.61143 9.58448C6.79364 9.71404 6.95283 9.87323 7.08239 10.0554C7.22858 10.261 7.32258 10.5054 7.51059 10.9943L8.66671 14.0002L9.82283 10.9943C10.0108 10.5054 10.1048 10.261 10.251 10.0554C10.3806 9.87323 10.5398 9.71404 10.722 9.58448C10.9276 9.43829 11.172 9.34429 11.6608 9.15628L14.6667 8.00016L11.6608 6.84404C11.172 6.65604 10.9276 6.56203 10.722 6.41585C10.5398 6.28629 10.3806 6.12709 10.251 5.94489C10.1048 5.7393 10.0108 5.49489 9.82283 5.00607L8.66671 2.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStars02)
const Stars02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Stars02', props.className].join(' ')}
    />
  )
})
Stars02.displayName = 'IconStars02'
export default Stars02
