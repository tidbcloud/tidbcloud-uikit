import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImage05 = (props, ref) => {
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
        d="M12.6664 14H13.34C13.9875 14 14.3112 14 14.4896 13.865C14.6451 13.7474 14.7413 13.5677 14.7529 13.3731C14.7662 13.1497 14.5867 12.8804 14.2275 12.3417L12.2206 9.33128C11.9239 8.88616 11.7755 8.66359 11.5885 8.58604C11.425 8.51823 11.2412 8.51823 11.0777 8.58604C10.8907 8.66359 10.7423 8.88616 10.4456 9.33128L9.94945 10.0755M12.6664 14L7.54344 6.60012C7.24881 6.17455 7.1015 5.96176 6.91749 5.88696C6.75651 5.82152 6.57635 5.82152 6.41538 5.88696C6.23137 5.96176 6.08406 6.17455 5.78943 6.60012L1.82523 12.3262C1.44988 12.8684 1.26221 13.1394 1.27289 13.3649C1.2822 13.5612 1.37768 13.7435 1.53382 13.8629C1.7131 14 2.04281 14 2.70224 14H12.6664ZM13.9998 4C13.9998 5.10457 13.1043 6 11.9998 6C10.8952 6 9.99977 5.10457 9.99977 4C9.99977 2.89543 10.8952 2 11.9998 2C13.1043 2 13.9998 2.89543 13.9998 4Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImage05)
const Image05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Image05', props.className].join(' ')}
    />
  )
})
Image05.displayName = 'IconImage05'
export default Image05
