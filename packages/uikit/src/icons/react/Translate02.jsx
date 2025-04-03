import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTranslate02 = (props, ref) => {
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
        d="M3.3335 5.33337L6.66683 8.66671M2.66683 9.33337L6.66683 5.33337L8.00016 3.33337M1.3335 3.33337H9.3335M4.66683 1.33337H5.3335M8.60886 11.3334H13.3915M8.60886 11.3334L7.3335 14M8.60886 11.3334L10.519 7.33939C10.6729 7.01756 10.7499 6.85664 10.8552 6.80579C10.9468 6.76156 11.0535 6.76156 11.1451 6.80579C11.2504 6.85664 11.3274 7.01756 11.4813 7.33939L13.3915 11.3334M13.3915 11.3334L14.6668 14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTranslate02)
const Translate02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Translate02', props.className].join(' ')}
    />
  )
})
Translate02.displayName = 'IconTranslate02'
export default Translate02
