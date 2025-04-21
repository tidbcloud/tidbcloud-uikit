import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCpuChip02 = (props, ref) => {
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
        d="M6.00001 1.33325V3.33325M10 1.33325V3.33325M6.00001 12.6666V14.6666M10 12.6666V14.6666M12.6667 5.99992H14.6667M12.6667 9.33325H14.6667M1.33334 5.99992H3.33334M1.33334 9.33325H3.33334M6.53334 12.6666H9.46668C10.5868 12.6666 11.1468 12.6666 11.5747 12.4486C11.951 12.2569 12.2569 11.9509 12.4487 11.5746C12.6667 11.1467 12.6667 10.5867 12.6667 9.46659V6.53325C12.6667 5.41315 12.6667 4.85309 12.4487 4.42527C12.2569 4.04895 11.951 3.74299 11.5747 3.55124C11.1468 3.33325 10.5868 3.33325 9.46668 3.33325H6.53334C5.41324 3.33325 4.85319 3.33325 4.42536 3.55124C4.04904 3.74299 3.74308 4.04895 3.55133 4.42527C3.33334 4.85309 3.33334 5.41315 3.33334 6.53325V9.46659C3.33334 10.5867 3.33334 11.1467 3.55133 11.5746C3.74308 11.9509 4.04904 12.2569 4.42536 12.4486C4.85319 12.6666 5.41324 12.6666 6.53334 12.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCpuChip02)
const CpuChip02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CpuChip02', props.className].join(' ')}
    />
  )
})
CpuChip02.displayName = 'IconCpuChip02'
export default CpuChip02
