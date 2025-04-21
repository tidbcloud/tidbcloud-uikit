import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChartUp01 = (props, ref) => {
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
        d="M14 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23856 13.8634 2.13658 13.7614 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V2M13.3333 5.33333L10.7208 8.12177C10.6217 8.22745 10.5722 8.28029 10.5125 8.3076C10.4598 8.3317 10.4017 8.34164 10.344 8.33644C10.2786 8.33055 10.2143 8.29718 10.0858 8.23045L7.91421 7.10288C7.78569 7.03615 7.72143 7.00278 7.65602 6.99689C7.59829 6.99169 7.54021 7.00163 7.48749 7.02574C7.42777 7.05305 7.37826 7.10589 7.27925 7.21156L4.66667 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChartUp01)
const LineChartUp01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChartUp01', props.className].join(' ')}
    />
  )
})
LineChartUp01.displayName = 'IconLineChartUp01'
export default LineChartUp01
