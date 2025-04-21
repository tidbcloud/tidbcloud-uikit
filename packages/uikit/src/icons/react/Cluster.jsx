import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCluster = (props, ref) => {
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
        d="M3.99998 3.99992H4.00665M3.99998 11.9999H4.00665M3.46665 6.66659H12.5333C13.28 6.66659 13.6534 6.66659 13.9386 6.52126C14.1895 6.39343 14.3935 6.18946 14.5213 5.93857C14.6666 5.65336 14.6666 5.27999 14.6666 4.53325V3.46659C14.6666 2.71985 14.6666 2.34648 14.5213 2.06126C14.3935 1.81038 14.1895 1.60641 13.9386 1.47858C13.6534 1.33325 13.28 1.33325 12.5333 1.33325H3.46665C2.71991 1.33325 2.34654 1.33325 2.06133 1.47858C1.81044 1.60641 1.60647 1.81038 1.47864 2.06126C1.33331 2.34648 1.33331 2.71985 1.33331 3.46659V4.53325C1.33331 5.27999 1.33331 5.65336 1.47864 5.93857C1.60647 6.18946 1.81044 6.39343 2.06133 6.52126C2.34654 6.66659 2.71991 6.66659 3.46665 6.66659ZM3.46665 14.6666H12.5333C13.28 14.6666 13.6534 14.6666 13.9386 14.5213C14.1895 14.3934 14.3935 14.1895 14.5213 13.9386C14.6666 13.6534 14.6666 13.28 14.6666 12.5333V11.4666C14.6666 10.7198 14.6666 10.3465 14.5213 10.0613C14.3935 9.81038 14.1895 9.60641 13.9386 9.47858C13.6534 9.33325 13.28 9.33325 12.5333 9.33325H3.46665C2.71991 9.33325 2.34654 9.33325 2.06133 9.47858C1.81044 9.60641 1.60647 9.81038 1.47864 10.0613C1.33331 10.3465 1.33331 10.7198 1.33331 11.4666V12.5333C1.33331 13.28 1.33331 13.6534 1.47864 13.9386C1.60647 14.1895 1.81044 14.3934 2.06133 14.5213C2.34654 14.6666 2.71991 14.6666 3.46665 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCluster)
const Cluster = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cluster', props.className].join(' ')}
    />
  )
})
Cluster.displayName = 'IconCluster'
export default Cluster
