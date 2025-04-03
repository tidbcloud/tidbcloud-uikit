import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFilterFunnel01 = (props, ref) => {
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
        d="M1.3335 3.06667C1.3335 2.6933 1.3335 2.50661 1.40616 2.36401C1.47007 2.23856 1.57206 2.13658 1.6975 2.07266C1.84011 2 2.02679 2 2.40016 2H13.6002C13.9735 2 14.1602 2 14.3028 2.07266C14.4283 2.13658 14.5303 2.23856 14.5942 2.36401C14.6668 2.50661 14.6668 2.6933 14.6668 3.06667V3.51293C14.6668 3.69213 14.6668 3.78173 14.6449 3.86504C14.6255 3.93887 14.5936 4.00882 14.5505 4.07184C14.5019 4.14295 14.4342 4.20164 14.2988 4.319L10.0349 8.01434C9.89949 8.1317 9.83178 8.19038 9.78316 8.26149C9.74007 8.32451 9.70813 8.39446 9.68873 8.46829C9.66683 8.55161 9.66683 8.64121 9.66683 8.8204V12.3056C9.66683 12.436 9.66683 12.5011 9.6458 12.5575C9.62722 12.6073 9.597 12.6519 9.55767 12.6877C9.51315 12.7281 9.45262 12.7524 9.33157 12.8008L7.0649 13.7074C6.81988 13.8054 6.69736 13.8545 6.59901 13.834C6.51301 13.8161 6.43753 13.765 6.389 13.6918C6.3335 13.6081 6.3335 13.4762 6.3335 13.2122V8.8204C6.3335 8.64121 6.3335 8.55161 6.3116 8.46829C6.29219 8.39446 6.26025 8.32451 6.21717 8.26149C6.16855 8.19038 6.10084 8.1317 5.96542 8.01434L1.70157 4.319C1.56615 4.20164 1.49844 4.14295 1.44982 4.07184C1.40674 4.00882 1.3748 3.93887 1.35539 3.86504C1.3335 3.78173 1.3335 3.69213 1.3335 3.51293V3.06667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilterFunnel01)
const FilterFunnel01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FilterFunnel01', props.className].join(' ')}
    />
  )
})
FilterFunnel01.displayName = 'IconFilterFunnel01'
export default FilterFunnel01
