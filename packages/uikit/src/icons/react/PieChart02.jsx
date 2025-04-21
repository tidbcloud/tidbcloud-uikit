import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart02 = (props, ref) => {
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
        d="M11.4666 9.33335C11.6513 9.33335 11.7436 9.33335 11.8184 9.37435C11.8802 9.40817 11.9376 9.47169 11.9651 9.53649C11.9984 9.61505 11.9901 9.69864 11.9733 9.86581C11.8863 10.7325 11.588 11.5676 11.1011 12.2964C10.5151 13.1734 9.6821 13.857 8.70757 14.2607C7.73303 14.6644 6.66067 14.77 5.62611 14.5642C4.59154 14.3584 3.64123 13.8505 2.89535 13.1046C2.14947 12.3587 1.64152 11.4084 1.43573 10.3738C1.22995 9.33926 1.33556 8.26691 1.73923 7.29237C2.1429 6.31783 2.82648 5.48487 3.70355 4.89884C4.43229 4.41191 5.26742 4.11361 6.13412 4.02665C6.3013 4.00988 6.38488 4.00149 6.46344 4.03482C6.52824 4.06232 6.59176 4.11978 6.62558 4.18151C6.66659 4.25635 6.66659 4.34868 6.66659 4.53335V8.80001C6.66659 8.9867 6.66659 9.08004 6.70292 9.15134C6.73488 9.21406 6.78587 9.26506 6.84859 9.29701C6.91989 9.33335 7.01324 9.33335 7.19992 9.33335H11.4666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M9.33325 1.86668C9.33325 1.68201 9.33325 1.58967 9.37426 1.51484C9.40808 1.4531 9.47159 1.39564 9.53639 1.36815C9.61495 1.33482 9.69854 1.34321 9.86572 1.35997C11.0847 1.48224 12.2306 2.02155 13.1045 2.89544C13.9784 3.76934 14.5177 4.91528 14.64 6.13421C14.6567 6.30139 14.6651 6.38498 14.6318 6.46354C14.6043 6.52834 14.5468 6.59185 14.4851 6.62567C14.4103 6.66668 14.3179 6.66668 14.1333 6.66668L9.86659 6.66668C9.6799 6.66668 9.58656 6.66668 9.51526 6.63035C9.45254 6.59839 9.40154 6.5474 9.36959 6.48468C9.33325 6.41337 9.33325 6.32003 9.33325 6.13335V1.86668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart02)
const PieChart02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PieChart02', props.className].join(' ')}
    />
  )
})
PieChart02.displayName = 'IconPieChart02'
export default PieChart02
