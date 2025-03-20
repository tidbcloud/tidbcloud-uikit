import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTrophy01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15a6 6 0 0 1-6-6V3.444c0-.413 0-.62.06-.786a1 1 0 0 1 .598-.598C6.824 2 7.031 2 7.444 2h9.112c.413 0 .62 0 .786.06a1 1 0 0 1 .598.598c.06.166.06.373.06.786V9a6 6 0 0 1-6 6m0 0v3m6-14h2.5c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V6c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C19.396 10 18.93 10 18 10M6 4H3.5c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C2 4.801 2 5.034 2 5.5V6c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C4.605 10 5.07 10 6 10m1.444 12h9.112a.444.444 0 0 0 .444-.444A3.556 3.556 0 0 0 13.444 18h-2.888A3.556 3.556 0 0 0 7 21.556c0 .245.199.444.444.444"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTrophy01)
const Trophy01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Trophy01'].join(' ')}
    />
  )
})
Trophy01.displayName = 'IconTrophy01'
export default Trophy01
