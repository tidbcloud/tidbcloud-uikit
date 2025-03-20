import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSale04 = (props, ref) => {
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
        d="M9 9h.01M15 15h.01M16 8l-8 8m1.202 4.6a1.24 1.24 0 0 1 .92.247l1.203.924c.398.305.951.305 1.348 0l1.249-.959c.233-.179.527-.258.818-.219l1.562.206c.497.065.976-.212 1.168-.675l.601-1.453c.112-.272.328-.488.6-.6l1.453-.601c.464-.191.74-.671.675-1.168l-.198-1.505a1.24 1.24 0 0 1 .247-.92l.923-1.204a1.105 1.105 0 0 0 0-1.347l-.959-1.25a1.1 1.1 0 0 1-.219-.818l.206-1.562a1.11 1.11 0 0 0-.675-1.168l-1.453-.601a1.1 1.1 0 0 1-.6-.6l-.6-1.453a1.11 1.11 0 0 0-1.169-.675l-1.562.206a1.1 1.1 0 0 1-.817-.217l-1.25-.959a1.105 1.105 0 0 0-1.347 0l-1.249.959a1.12 1.12 0 0 1-.818.219L7.696 3.2a1.11 1.11 0 0 0-1.167.675l-.6 1.453a1.12 1.12 0 0 1-.6.6l-1.453.6c-.464.192-.74.671-.675 1.168l.206 1.562c.038.291-.041.585-.219.818l-.959 1.249a1.105 1.105 0 0 0 0 1.347l.959 1.25c.179.232.258.527.219.818L3.2 16.303c-.065.497.211.976.675 1.168l1.453.601c.272.112.488.328.6.6l.6 1.453c.192.464.672.74 1.169.675zM9.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSale04)
const Sale04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Sale04'].join(' ')}
    />
  )
})
Sale04.displayName = 'IconSale04'
export default Sale04
