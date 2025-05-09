import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWallet05 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 10H5m14 0 1.864 3.107c.418.696.627 1.044.735 1.42.096.331.134.678.113 1.023-.025.389-.153.774-.41 1.544l-.208.624c-.393 1.18-.59 1.77-.955 2.206a3 3 0 0 1-1.203.868c-.53.208-1.151.208-2.396.208H7.46c-1.244 0-1.866 0-2.396-.208a3 3 0 0 1-1.203-.868c-.365-.436-.562-1.026-.955-2.206l-.208-.624c-.257-.77-.385-1.155-.41-1.545a3 3 0 0 1 .113-1.023c.108-.375.317-.723.735-1.42L5 10m14 0 .417-1.46c.198-.693.297-1.039.22-1.313a1 1 0 0 0-.436-.577c-.242-.15-.602-.15-1.322-.15H6.12c-.72 0-1.08 0-1.322.15a1 1 0 0 0-.435.577c-.078.274.02.62.219 1.313L5 10m7-3.5H8.464c-.52 0-1.02-.21-1.389-.586A2.02 2.02 0 0 1 6.5 4.5c0-.53.207-1.04.575-1.414a1.95 1.95 0 0 1 1.39-.586c2.75 0 3.535 4 3.535 4m0 0h3.536c.52 0 1.02-.21 1.389-.586.368-.375.575-.884.575-1.414s-.207-1.04-.575-1.414a1.95 1.95 0 0 0-1.39-.586c-2.75 0-3.535 4-3.535 4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWallet05)
const Wallet05 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Wallet05.displayName = 'IconWallet05'
export default Wallet05
