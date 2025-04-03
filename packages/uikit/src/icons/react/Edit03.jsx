import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconEdit03 = (props, ref) => {
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
        d="M7.99998 13.3333H14M2 13.3333H3.11636C3.44248 13.3333 3.60554 13.3333 3.75899 13.2965C3.89504 13.2638 4.0251 13.21 4.1444 13.1369C4.27895 13.0544 4.39425 12.9391 4.62486 12.7085L13 4.33334C13.5523 3.78106 13.5523 2.88563 13 2.33334C12.4477 1.78106 11.5523 1.78106 11 2.33334L2.62484 10.7085C2.39424 10.9391 2.27894 11.0544 2.19648 11.189C2.12338 11.3083 2.0695 11.4383 2.03684 11.5744C2 11.7278 2 11.8909 2 12.217V13.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconEdit03)
const Edit03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Edit03', props.className].join(' ')}
    />
  )
})
Edit03.displayName = 'IconEdit03'
export default Edit03
