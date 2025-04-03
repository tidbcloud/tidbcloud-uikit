import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWallet02 = (props, ref) => {
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
        d="M10.6667 5.33322V3.00032C10.6667 2.44583 10.6667 2.16858 10.5499 1.9982C10.4478 1.84934 10.2898 1.74822 10.1118 1.71794C9.90819 1.68328 9.65646 1.79947 9.153 2.03183L3.23934 4.76121C2.79034 4.96845 2.56583 5.07206 2.4014 5.23276C2.25604 5.37483 2.14508 5.54825 2.077 5.73977C2 5.95641 2 6.20367 2 6.69819V9.99988M11 9.66655H11.0067M2 7.46655L2 11.8666C2 12.6133 2 12.9867 2.14532 13.2719C2.27316 13.5228 2.47713 13.7267 2.72801 13.8546C3.01323 13.9999 3.3866 13.9999 4.13333 13.9999H11.8667C12.6134 13.9999 12.9868 13.9999 13.272 13.8546C13.5229 13.7267 13.7268 13.5228 13.8547 13.2719C14 12.9867 14 12.6133 14 11.8666V7.46655C14 6.71982 14 6.34645 13.8547 6.06123C13.7268 5.81035 13.5229 5.60638 13.272 5.47854C12.9868 5.33322 12.6134 5.33322 11.8667 5.33322L4.13333 5.33322C3.3866 5.33322 3.01323 5.33322 2.72801 5.47854C2.47713 5.60637 2.27316 5.81035 2.14532 6.06123C2 6.34645 2 6.71982 2 7.46655ZM11.3333 9.66655C11.3333 9.85065 11.1841 9.99988 11 9.99988C10.8159 9.99988 10.6667 9.85065 10.6667 9.66655C10.6667 9.48246 10.8159 9.33322 11 9.33322C11.1841 9.33322 11.3333 9.48246 11.3333 9.66655Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWallet02)
const Wallet02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wallet02', props.className].join(' ')}
    />
  )
})
Wallet02.displayName = 'IconWallet02'
export default Wallet02
