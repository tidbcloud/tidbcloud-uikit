import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsSwap01 = (props, ref) => {
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
        d="M4.00016 4.00016L5.3335 2.66683M5.3335 2.66683L4.00016 1.3335M5.3335 2.66683H4.00016C2.5274 2.66683 1.3335 3.86074 1.3335 5.3335M12.0002 12.0002L10.6668 13.3335M10.6668 13.3335L12.0002 14.6668M10.6668 13.3335H12.0002C13.4729 13.3335 14.6668 12.1396 14.6668 10.6668M8.94494 8.94494C9.46645 9.19404 10.0504 9.3335 10.6668 9.3335C12.876 9.3335 14.6668 7.54264 14.6668 5.3335C14.6668 3.12436 12.876 1.3335 10.6668 1.3335C8.45769 1.3335 6.66683 3.12436 6.66683 5.3335C6.66683 5.94997 6.80629 6.53388 7.05538 7.05538M9.3335 10.6668C9.3335 12.876 7.54264 14.6668 5.3335 14.6668C3.12436 14.6668 1.3335 12.876 1.3335 10.6668C1.3335 8.45769 3.12436 6.66683 5.3335 6.66683C7.54264 6.66683 9.3335 8.45769 9.3335 10.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsSwap01)
const CoinsSwap01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CoinsSwap01', props.className].join(' ')}
    />
  )
})
CoinsSwap01.displayName = 'IconCoinsSwap01'
export default CoinsSwap01
