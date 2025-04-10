import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLaptop01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 5.52 21 6.08 21 7.2V16h-5.337c-.245 0-.367 0-.482.028a1 1 0 0 0-.29.12c-.1.061-.187.148-.36.32l-.062.063c-.173.173-.26.26-.36.322a1 1 0 0 1-.29.12c-.115.027-.237.027-.482.027h-2.674c-.245 0-.367 0-.482-.028a1 1 0 0 1-.29-.12c-.1-.061-.187-.148-.36-.32l-.062-.063c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C8.704 16 8.582 16 8.337 16zm0 0a1 1 0 0 0-1 1v.333c0 .62 0 .93.068 1.185a2 2 0 0 0 1.414 1.414c.255.068.565.068 1.185.068h14.666c.62 0 .93 0 1.185-.068a2 2 0 0 0 1.414-1.414c.068-.255.068-.565.068-1.185 0-.31 0-.465-.034-.592a1 1 0 0 0-.707-.707C21.132 16 20.977 16 20.667 16H20"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLaptop01)
const Laptop01 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Laptop01.displayName = 'IconLaptop01'
export default Laptop01
