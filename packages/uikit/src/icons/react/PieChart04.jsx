import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart04 = (props, ref) => {
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
        d="M7.99968 7.99998L1.55419 6.29701C1.1395 7.86655 1.31176 9.53347 2.03865 10.985C2.76555 12.4366 3.99712 13.5731 5.5023 14.1812L7.99968 7.99998ZM7.99968 7.99998L8.06949 1.33368C6.59006 1.31819 5.1475 1.79527 3.96902 2.68978C2.79054 3.5843 1.9431 4.84542 1.56018 6.27452L7.99968 7.99998ZM14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99968 14.6666C4.31778 14.6666 1.33302 11.6819 1.33302 7.99998C1.33302 4.31808 4.31778 1.33331 7.99968 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart04)
const PieChart04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart04', props.className].join(' ')}
    />
  )
})
PieChart04.displayName = 'IconPieChart04'
export default PieChart04
