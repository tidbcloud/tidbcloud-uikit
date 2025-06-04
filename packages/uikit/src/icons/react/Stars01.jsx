import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStars01 = (props, ref) => {
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
        d="M4.33337 8.66683L4.85635 9.71277C5.03334 10.0668 5.12184 10.2438 5.24006 10.3971C5.34497 10.5332 5.46698 10.6552 5.60308 10.7601C5.75645 10.8784 5.93344 10.9669 6.28743 11.1439L7.33337 11.6668L6.28743 12.1898C5.93344 12.3668 5.75645 12.4553 5.60308 12.5735C5.46698 12.6784 5.34497 12.8004 5.24006 12.9365C5.12184 13.0899 5.03334 13.2669 4.85635 13.6209L4.33337 14.6668L3.8104 13.6209C3.63341 13.2669 3.54491 13.0899 3.42669 12.9365C3.32178 12.8004 3.19977 12.6784 3.06367 12.5735C2.9103 12.4553 2.7333 12.3668 2.37932 12.1898L1.33337 11.6668L2.37932 11.1439C2.7333 10.9669 2.9103 10.8784 3.06367 10.7601C3.19977 10.6552 3.32178 10.5332 3.42669 10.3971C3.54491 10.2438 3.63341 10.0668 3.8104 9.71277L4.33337 8.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M10 1.3335L10.7858 3.37644C10.9738 3.86526 11.0678 4.10967 11.214 4.31526C11.3435 4.49747 11.5027 4.65666 11.6849 4.78622C11.8905 4.9324 12.1349 5.02641 12.6238 5.21441L14.6667 6.00016L12.6238 6.78591C12.1349 6.97392 11.8905 7.06792 11.6849 7.21411C11.5027 7.34367 11.3435 7.50286 11.214 7.68507C11.0678 7.89065 10.9738 8.13506 10.7858 8.62388L10 10.6668L9.21429 8.62388C9.02629 8.13506 8.93228 7.89065 8.7861 7.68507C8.65654 7.50286 8.49734 7.34367 8.31514 7.21411C8.10955 7.06792 7.86514 6.97392 7.37632 6.78591L5.33337 6.00016L7.37632 5.21441C7.86514 5.02641 8.10955 4.9324 8.31513 4.78622C8.49734 4.65666 8.65654 4.49747 8.7861 4.31526C8.93228 4.10967 9.02629 3.86526 9.21429 3.37644L10 1.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStars01)
const Stars01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Stars01', props.className].join(' ')}
    />
  )
})
Stars01.displayName = 'IconStars01'
export default Stars01
