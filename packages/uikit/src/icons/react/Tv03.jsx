import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTv03 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTv03)
const Tv03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Tv03', props.className].join(' ')}
    />
  )
})
Tv03.displayName = 'IconTv03'
export default Tv03
