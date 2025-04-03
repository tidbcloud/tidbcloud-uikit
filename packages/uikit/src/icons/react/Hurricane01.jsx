import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHurricane01 = (props, ref) => {
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
        d="M11 13.6668C10.1643 13.876 9.12561 14 8 14C6.87439 14 5.83566 13.876 5 13.6668M12 10.9537C11.0227 11.3228 9.59292 11.5556 8 11.5556C6.40708 11.5556 4.97726 11.3228 4 10.9537M3 7.77857C3.95429 8.37322 5.83541 8.77778 8 8.77778C10.1646 8.77778 12.0457 8.37322 13 7.77857M14 4C14 5.10457 11.3137 6 8 6C4.68629 6 2 5.10457 2 4C2 2.89543 4.68629 2 8 2C11.3137 2 14 2.89543 14 4Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHurricane01)
const Hurricane01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Hurricane01', props.className].join(' ')}
    />
  )
})
Hurricane01.displayName = 'IconHurricane01'
export default Hurricane01
