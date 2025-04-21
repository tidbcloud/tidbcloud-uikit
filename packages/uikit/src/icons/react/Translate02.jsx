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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.33331 5.33337L6.66665 8.66671M2.66665 9.33337L6.66665 5.33337L7.99998 3.33337M1.33331 3.33337H9.33331M4.66665 1.33337H5.33331M8.60868 11.3334H13.3913M8.60868 11.3334L7.33331 14M8.60868 11.3334L10.5188 7.33939C10.6728 7.01756 10.7497 6.85664 10.855 6.80579C10.9466 6.76156 11.0534 6.76156 11.1449 6.80579C11.2502 6.85664 11.3272 7.01756 11.4811 7.33939L13.3913 11.3334M13.3913 11.3334L14.6666 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
