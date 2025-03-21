import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRightIndent01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M21 4H3M21 20H3M12 9.25H3M12 14.75H3M19.72 8.46L15.8533 11.36C15.5638 11.5771 15.4191 11.6857 15.3673 11.8188C15.322 11.9353 15.322 12.0647 15.3673 12.1812C15.4191 12.3143 15.5638 12.4229 15.8533 12.64L19.72 15.54C20.132 15.849 20.338 16.0035 20.5104 15.9999C20.6604 15.9968 20.8012 15.9264 20.8937 15.8082C21 15.6725 21 15.415 21 14.9V9.1C21 8.58503 21 8.32754 20.8937 8.19175C20.8012 8.07358 20.6604 8.00323 20.5104 8.00011C20.338 7.99652 20.132 8.15102 19.72 8.46Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRightIndent01)
const RightIndent01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RightIndent01'].join(' ')}
    />
  )
})
RightIndent01.displayName = 'IconRightIndent01'
export default RightIndent01
