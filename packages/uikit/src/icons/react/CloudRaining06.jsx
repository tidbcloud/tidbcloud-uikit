import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining06 = (props, ref) => {
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
        d="M8.66683 14.0002H4.00016M12.6668 12.0002H6.66683M4.66683 12.0002H3.3335M12.0002 14.0002H10.6668M4.66683 10.0002C2.82588 10.0002 1.3335 8.50778 1.3335 6.66683C1.3335 4.82588 2.82588 3.3335 4.66683 3.3335C4.68893 3.3335 4.71098 3.33371 4.73297 3.33414C5.33976 2.14656 6.57501 1.3335 8.00016 1.3335C9.67965 1.3335 11.0954 2.46267 11.5297 4.00324C11.5751 4.0012 11.6209 4.00016 11.6668 4.00016C13.3237 4.00016 14.6668 5.34331 14.6668 7.00016C14.6668 8.65702 13.3237 10.0002 11.6668 10.0002C9.16244 10.0002 7.4903 10.0002 4.66683 10.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining06)
const CloudRaining06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudRaining06', props.className].join(' ')}
    />
  )
})
CloudRaining06.displayName = 'IconCloudRaining06'
export default CloudRaining06
