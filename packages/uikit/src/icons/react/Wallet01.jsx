import * as React from 'react'
import { forwardRef } from 'react'
const Wallet01 = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
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
        d="M22 8.5H2m0 4h3.547c.54 0 .81 0 1.071.047.232.04.458.11.674.204.243.106.468.256.917.555l.582.388c.45.3.674.45.917.555.216.095.442.163.674.204.261.047.531.047 1.071.047h1.094c.54 0 .81 0 1.071-.047.232-.04.458-.11.674-.204.243-.106.468-.256.917-.555l.582-.388c.45-.3.674-.45.917-.555.216-.095.442-.163.674-.204.261-.047.531-.047 1.071-.047H22M2 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 20 4.08 20 5.2 20h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 18.48 22 17.92 22 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 5.52 2 6.08 2 7.2Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Wallet01)
export default ForwardRef
