import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSave02 = (props, ref) => {
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
        d="M10 5.33333H5.73333C5.35997 5.33333 5.17328 5.33333 5.03067 5.26067C4.90523 5.19676 4.80324 5.09477 4.73933 4.96933C4.66667 4.82672 4.66667 4.64004 4.66667 4.26667V2M11.3333 14V9.73333C11.3333 9.35997 11.3333 9.17328 11.2607 9.03067C11.1968 8.90523 11.0948 8.80324 10.9693 8.73933C10.8267 8.66667 10.64 8.66667 10.2667 8.66667H5.73333C5.35997 8.66667 5.17328 8.66667 5.03067 8.73933C4.90523 8.80324 4.80324 8.90523 4.73933 9.03067C4.66667 9.17328 4.66667 9.35997 4.66667 9.73333V14M14 6.21699V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.0799 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H9.78301C10.1091 2 10.2722 2 10.4256 2.03684C10.5617 2.0695 10.6918 2.12337 10.811 2.19648C10.9456 2.27894 11.0609 2.39424 11.2915 2.62484L13.3752 4.7085C13.6058 4.9391 13.7211 5.0544 13.8035 5.18895C13.8766 5.30825 13.9305 5.43831 13.9632 5.57436C14 5.72781 14 5.89087 14 6.21699Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSave02)
const Save02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Save02', props.className].join(' ')}
    />
  )
})
Save02.displayName = 'IconSave02'
export default Save02
