import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEdit04 = (props, ref) => {
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
        d="M14 12L13.3333 12.7294C12.9797 13.1161 12.5001 13.3333 12.0001 13.3333C11.5001 13.3333 11.0206 13.1161 10.667 12.7294C10.3128 12.3434 9.83335 12.1267 9.33348 12.1267C8.83362 12.1267 8.35412 12.3434 8.00001 12.7294M2.00003 13.3333H3.11639C3.44251 13.3333 3.60557 13.3333 3.75902 13.2965C3.89507 13.2638 4.02513 13.21 4.14443 13.1369C4.27898 13.0544 4.39428 12.9391 4.62489 12.7085L13 4.33334C13.5523 3.78106 13.5523 2.88563 13 2.33334C12.4478 1.78106 11.5523 1.78106 11 2.33334L2.62487 10.7085C2.39427 10.9391 2.27897 11.0544 2.19651 11.189C2.12341 11.3083 2.06953 11.4383 2.03687 11.5744C2.00003 11.7278 2.00003 11.8909 2.00003 12.217V13.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEdit04)
const Edit04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Edit04', props.className].join(' ')}
    />
  )
})
Edit04.displayName = 'IconEdit04'
export default Edit04
