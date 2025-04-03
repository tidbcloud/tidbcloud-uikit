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
      ref={ref}
      {...props}
    >
      <path
        d="M2 5.33333H2.13333C3.25344 5.33333 3.81349 5.33333 4.24131 5.11535C4.61764 4.9236 4.9236 4.61764 5.11535 4.24131C5.33333 3.81349 5.33333 3.25344 5.33333 2.13333V2M2 10.6667H2.13333C3.25344 10.6667 3.81349 10.6667 4.24131 10.8847C4.61764 11.0764 4.9236 11.3824 5.11535 11.7587C5.33333 12.1865 5.33333 12.7466 5.33333 13.8667V14M10.6667 2V2.13333C10.6667 3.25344 10.6667 3.81349 10.8847 4.24131C11.0764 4.61764 11.3824 4.9236 11.7587 5.11535C12.1865 5.33333 12.7466 5.33333 13.8667 5.33333H14M10.6667 14V13.8667C10.6667 12.7466 10.6667 12.1865 10.8847 11.7587C11.0764 11.3824 11.3824 11.0764 11.7587 10.8847C12.1865 10.6667 12.7466 10.6667 13.8667 10.6667H14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
