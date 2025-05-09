import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMinimize02 = (props, ref) => {
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
        d="M1.99988 5.33333H2.13321C3.25332 5.33333 3.81337 5.33333 4.24119 5.11535C4.61752 4.9236 4.92348 4.61764 5.11522 4.24131C5.33321 3.81349 5.33321 3.25344 5.33321 2.13333V2M1.99988 10.6667H2.13321C3.25332 10.6667 3.81337 10.6667 4.24119 10.8847C4.61752 11.0764 4.92348 11.3824 5.11522 11.7587C5.33321 12.1865 5.33321 12.7466 5.33321 13.8667V14M10.6665 2V2.13333C10.6665 3.25344 10.6665 3.81349 10.8845 4.24131C11.0763 4.61764 11.3822 4.9236 11.7586 5.11535C12.1864 5.33333 12.7464 5.33333 13.8665 5.33333H13.9999M10.6665 14V13.8667C10.6665 12.7466 10.6665 12.1865 10.8845 11.7587C11.0763 11.3824 11.3822 11.0764 11.7586 10.8847C12.1864 10.6667 12.7464 10.6667 13.8665 10.6667H13.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMinimize02)
const Minimize02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Minimize02', props.className].join(' ')}
    />
  )
})
Minimize02.displayName = 'IconMinimize02'
export default Minimize02
