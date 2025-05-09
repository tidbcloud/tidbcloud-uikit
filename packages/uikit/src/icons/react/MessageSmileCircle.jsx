import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageSmileCircle = (props, ref) => {
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
        d="M5.99983 9.33333C5.99983 9.33333 6.87483 10.3333 8.33316 10.3333C9.7915 10.3333 10.6665 9.33333 10.6665 9.33333M10.1665 6H10.1732M6.49983 6H6.5065M8.33316 13.3333C11.4628 13.3333 13.9998 10.7963 13.9998 7.66667C13.9998 4.53705 11.4628 2 8.33316 2C5.20355 2 2.6665 4.53705 2.6665 7.66667C2.6665 8.3 2.7704 8.90906 2.96208 9.47774C3.03421 9.69175 3.07028 9.79875 3.07678 9.88095C3.08321 9.96213 3.07835 10.019 3.05827 10.098C3.03793 10.1779 2.99303 10.261 2.90323 10.4272L1.81279 12.4456C1.65725 12.7335 1.57948 12.8774 1.59688 12.9885C1.61204 13.0853 1.669 13.1705 1.75261 13.2215C1.84862 13.2801 2.01136 13.2632 2.33686 13.2296L5.75087 12.8767C5.85426 12.866 5.90595 12.8606 5.95307 12.8624C5.99941 12.8642 6.03213 12.8686 6.07732 12.879C6.12327 12.8896 6.18104 12.9118 6.2966 12.9564C6.92864 13.1999 7.61531 13.3333 8.33316 13.3333ZM10.4998 6C10.4998 6.18409 10.3506 6.33333 10.1665 6.33333C9.9824 6.33333 9.83316 6.18409 9.83316 6C9.83316 5.8159 9.9824 5.66667 10.1665 5.66667C10.3506 5.66667 10.4998 5.8159 10.4998 6ZM6.83316 6C6.83316 6.18409 6.68393 6.33333 6.49983 6.33333C6.31574 6.33333 6.1665 6.18409 6.1665 6C6.1665 5.8159 6.31574 5.66667 6.49983 5.66667C6.68393 5.66667 6.83316 5.8159 6.83316 6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageSmileCircle)
const MessageSmileCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MessageSmileCircle', props.className].join(' ')}
    />
  )
})
MessageSmileCircle.displayName = 'IconMessageSmileCircle'
export default MessageSmileCircle
