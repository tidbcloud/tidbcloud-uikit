import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWind01 = (props, ref) => {
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
        d="M14 12.0002C14 12.0002 13.2064 11.6872 12.6667 11.5349C9.25314 10.5718 6.74686 13.4286 3.33333 12.4655C2.79361 12.3132 2 12.0002 2 12.0002M14 8.00016C14 8.00016 13.2064 7.68715 12.6667 7.53487C9.25314 6.57176 6.74686 9.42857 3.33333 8.46546C2.79361 8.31317 2 8.00016 2 8.00016M14 4.00016C14 4.00016 13.2064 3.68715 12.6667 3.53487C9.25314 2.57176 6.74686 5.42857 3.33333 4.46546C2.79361 4.31317 2 4.00016 2 4.00016"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWind01)
const Wind01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wind01', props.className].join(' ')}
    />
  )
})
Wind01.displayName = 'IconWind01'
export default Wind01
