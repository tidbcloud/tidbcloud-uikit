import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsSwap02 = (props, ref) => {
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
        d="M4 4.00016L5.33334 2.66683M5.33334 2.66683L4 1.3335M5.33334 2.66683H4C2.52724 2.66683 1.33334 3.86074 1.33334 5.3335M12 12.0002L10.6667 13.3335M10.6667 13.3335L12 14.6668M10.6667 13.3335H12C13.4728 13.3335 14.6667 12.1396 14.6667 10.6668M6.79269 4.3335C7.23673 2.60827 8.80283 1.3335 10.6667 1.3335C12.8758 1.3335 14.6667 3.12436 14.6667 5.3335C14.6667 7.19732 13.3919 8.76341 11.6667 9.20747M9.33334 10.6668C9.33334 12.876 7.54248 14.6668 5.33334 14.6668C3.1242 14.6668 1.33334 12.876 1.33334 10.6668C1.33334 8.45769 3.1242 6.66683 5.33334 6.66683C7.54248 6.66683 9.33334 8.45769 9.33334 10.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsSwap02)
const CoinsSwap02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CoinsSwap02', props.className].join(' ')}
    />
  )
})
CoinsSwap02.displayName = 'IconCoinsSwap02'
export default CoinsSwap02
