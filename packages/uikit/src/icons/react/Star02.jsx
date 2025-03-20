import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStar02 = (props, ref) => {
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
        d="M11.306 3.207c.228-.396.342-.594.49-.66a.5.5 0 0 1 .408 0c.148.066.262.264.49.66l1.955 3.402c.084.147.126.22.185.273a.5.5 0 0 0 .18.105c.077.024.161.024.33.024l3.924-.008c.457-.001.685-.002.817.094a.5.5 0 0 1 .203.353c.017.162-.097.36-.326.754l-1.97 3.394c-.084.147-.126.22-.143.297a.5.5 0 0 0 0 .21c.017.077.059.15.144.296l1.969 3.395c.229.395.343.592.326.754a.5.5 0 0 1-.203.353c-.132.096-.36.095-.817.094l-3.924-.008c-.169 0-.253 0-.33.024a.5.5 0 0 0-.18.104c-.059.054-.101.127-.185.273l-1.955 3.403c-.228.396-.342.594-.49.66a.5.5 0 0 1-.408 0c-.148-.066-.262-.264-.49-.66L9.351 17.39c-.084-.147-.126-.22-.185-.273a.5.5 0 0 0-.18-.105c-.077-.024-.161-.024-.33-.024l-3.924.008c-.457.001-.685.002-.817-.094a.5.5 0 0 1-.204-.353c-.016-.162.098-.36.327-.754l1.97-3.395c.084-.146.126-.219.143-.297a.5.5 0 0 0 0-.208c-.017-.078-.06-.151-.144-.298L4.038 8.205c-.229-.395-.343-.592-.327-.754a.5.5 0 0 1 .204-.353c.132-.096.36-.095.817-.094l3.924.008c.169 0 .253 0 .33-.024a.5.5 0 0 0 .18-.105c.059-.053.1-.126.185-.273z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStar02)
const Star02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Star02'].join(' ')}
    />
  )
})
Star02.displayName = 'IconStar02'
export default Star02
