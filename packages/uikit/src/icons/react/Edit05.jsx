import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEdit05 = (props, ref) => {
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
        d="M7.33334 2.66666H4.53334C3.41324 2.66666 2.85319 2.66666 2.42536 2.88464C2.04904 3.07639 1.74308 3.38235 1.55133 3.75867C1.33334 4.1865 1.33334 4.74655 1.33334 5.86666V11.4667C1.33334 12.5868 1.33334 13.1468 1.55133 13.5746C1.74308 13.951 2.04904 14.2569 2.42536 14.4487C2.85319 14.6667 3.41324 14.6667 4.53334 14.6667H10.1333C11.2534 14.6667 11.8135 14.6667 12.2413 14.4487C12.6176 14.2569 12.9236 13.951 13.1154 13.5746C13.3333 13.1468 13.3333 12.5868 13.3333 11.4667V8.66666M5.33333 10.6667H6.44969C6.77581 10.6667 6.93887 10.6667 7.09232 10.6298C7.22837 10.5972 7.35843 10.5433 7.47772 10.4702C7.61228 10.3877 7.72758 10.2724 7.95818 10.0418L14.3333 3.66666C14.8856 3.11437 14.8856 2.21894 14.3333 1.66666C13.7811 1.11437 12.8856 1.11437 12.3333 1.66665L5.95817 8.04182C5.72756 8.27242 5.61226 8.38772 5.52981 8.52228C5.4567 8.64157 5.40283 8.77163 5.37017 8.90768C5.33333 9.06113 5.33333 9.22419 5.33333 9.55031V10.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEdit05)
const Edit05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Edit05', props.className].join(' ')}
    />
  )
})
Edit05.displayName = 'IconEdit05'
export default Edit05
