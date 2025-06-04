import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZapFast = (props, ref) => {
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
        d="M5.99998 11.6667H2.33331M4.33331 8H1.33331M5.99998 4.33333H2.66665M11.3333 2L6.93569 8.15667C6.74105 8.42917 6.64373 8.56542 6.64794 8.67902C6.65161 8.77792 6.69903 8.87008 6.77738 8.93055C6.86737 9 7.03481 9 7.36968 9H10.6666L9.99998 14L14.3976 7.84333C14.5922 7.57083 14.6896 7.43458 14.6854 7.32098C14.6817 7.22208 14.6343 7.12992 14.5559 7.06945C14.4659 7 14.2985 7 13.9636 7H10.6666L11.3333 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZapFast)
const ZapFast = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ZapFast', props.className].join(' ')}
    />
  )
})
ZapFast.displayName = 'IconZapFast'
export default ZapFast
