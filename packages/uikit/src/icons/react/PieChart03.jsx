import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart03 = (props, ref) => {
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
        d="M7.99967 1.33331C8.87515 1.33331 9.74206 1.50575 10.5509 1.84078C11.3597 2.17581 12.0947 2.66688 12.7137 3.28594C13.3328 3.90499 13.8238 4.63992 14.1589 5.44876C14.4939 6.2576 14.6663 7.1245 14.6663 7.99998M7.99967 1.33331V7.99998M7.99967 1.33331C4.31778 1.33331 1.33301 4.31808 1.33301 7.99998C1.33301 11.6819 4.31778 14.6666 7.99967 14.6666C11.6816 14.6666 14.6663 11.6819 14.6663 7.99998M7.99967 1.33331C11.6816 1.33331 14.6663 4.31809 14.6663 7.99998M14.6663 7.99998L7.99967 7.99998M14.6663 7.99998C14.6663 9.05205 14.4173 10.0892 13.9397 11.0266C13.4621 11.964 12.7694 12.775 11.9182 13.3934L7.99967 7.99998"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart03)
const PieChart03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart03', props.className].join(' ')}
    />
  )
})
PieChart03.displayName = 'IconPieChart03'
export default PieChart03
