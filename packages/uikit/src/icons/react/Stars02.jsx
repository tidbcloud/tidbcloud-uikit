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
      ref={ref}
      {...props}
    >
      <path
        d="M3.00016 14.6668V11.3335M3.00016 4.66683V1.3335M1.3335 3.00016H4.66683M1.3335 13.0002H4.66683M8.66683 2.00016L7.51071 5.00607C7.3227 5.49489 7.2287 5.7393 7.08252 5.94489C6.95296 6.12709 6.79376 6.28629 6.61155 6.41585C6.40597 6.56203 6.16156 6.65604 5.67274 6.84404L2.66683 8.00016L5.67274 9.15628C6.16156 9.34429 6.40597 9.43829 6.61155 9.58448C6.79376 9.71404 6.95296 9.87323 7.08252 10.0554C7.2287 10.261 7.3227 10.5054 7.51071 10.9943L8.66683 14.0002L9.82295 10.9943C10.011 10.5054 10.105 10.261 10.2511 10.0554C10.3807 9.87323 10.5399 9.71404 10.7221 9.58448C10.9277 9.43829 11.1721 9.34429 11.6609 9.15628L14.6668 8.00016L11.6609 6.84404C11.1721 6.65604 10.9277 6.56203 10.7221 6.41585C10.5399 6.28629 10.3807 6.12709 10.2511 5.94489C10.105 5.7393 10.011 5.49489 9.82295 5.00607L8.66683 2.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
