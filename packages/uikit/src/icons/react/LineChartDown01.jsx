import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartDown01 = (props, ref) => {
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
        d="M14 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23856 13.8634 2.13658 13.7614 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V2M13.3333 10L10.7208 7.21156C10.6217 7.10589 10.5722 7.05305 10.5125 7.02574C10.4598 7.00163 10.4017 6.99169 10.344 6.99689C10.2786 7.00278 10.2143 7.03615 10.0858 7.10288L7.91421 8.23045C7.78569 8.29718 7.72143 8.33055 7.65602 8.33644C7.59829 8.34164 7.54021 8.3317 7.48749 8.3076C7.42777 8.28029 7.37826 8.22745 7.27925 8.12177L4.66667 5.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartDown01)
const LineChartDown01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartDown01', props.className].join(' ')}
    />
  )
})
LineChartDown01.displayName = 'IconLineChartDown01'
export default LineChartDown01
