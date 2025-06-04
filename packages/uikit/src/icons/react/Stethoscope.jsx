import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStethoscope = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.84211 1.94444H2.89474C2.39222 1.94444 1.91029 2.14345 1.55496 2.49769C1.19962 2.85192 1 3.33237 1 3.83333V7.13889C1 8.51654 1.54896 9.83777 2.52613 10.8119C3.50329 11.7861 4.82861 12.3333 6.21053 12.3333C7.59244 12.3333 8.91776 11.7861 9.89493 10.8119C10.8721 9.83777 11.4211 8.51654 11.4211 7.13889V3.83333C11.4211 3.33237 11.2214 2.85192 10.8661 2.49769C10.5108 2.14345 10.0288 1.94444 9.52632 1.94444H8.57895M5.73684 12.3333C5.73684 13.0775 5.88387 13.8144 6.16953 14.5019C6.45519 15.1894 6.87388 15.8141 7.40171 16.3403C7.92954 16.8665 8.55616 17.2839 9.2458 17.5687C9.93544 17.8534 10.6746 18 11.4211 18C12.1675 18 12.9067 17.8534 13.5963 17.5687C14.2859 17.2839 14.9126 16.8665 15.4404 16.3403C15.9682 15.8141 16.3869 15.1894 16.6726 14.5019C16.9582 13.8144 17.1053 13.0775 17.1053 12.3333V9.5M17.1053 9.5C16.6027 9.5 16.1208 9.30099 15.7655 8.94676C15.4102 8.59252 15.2105 8.11208 15.2105 7.61111C15.2105 7.11015 15.4102 6.6297 15.7655 6.27547C16.1208 5.92123 16.6027 5.72222 17.1053 5.72222C17.6078 5.72222 18.0897 5.92123 18.445 6.27547C18.8004 6.6297 19 7.11015 19 7.61111C19 8.11208 18.8004 8.59252 18.445 8.94676C18.0897 9.30099 17.6078 9.5 17.1053 9.5ZM8.57895 1V2.88889M3.84211 1V2.88889"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStethoscope)
const Stethoscope = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Stethoscope', props.className].join(' ')}
    />
  )
})
Stethoscope.displayName = 'IconStethoscope'
export default Stethoscope
