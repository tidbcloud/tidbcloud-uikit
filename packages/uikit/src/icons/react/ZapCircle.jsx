import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZapCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 5.5-4.638 6.747c-.28.406-.42.609-.41.778a.5.5 0 0 0 .195.373c.135.102.38.102.874.102H12v5l4.638-6.747c.28-.406.42-.609.41-.778a.5.5 0 0 0-.195-.373c-.135-.102-.38-.102-.874-.102H12z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZapCircle)
const ZapCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ZapCircle'].join(' ')}
    />
  )
})
ZapCircle.displayName = 'IconZapCircle'
export default ZapCircle
