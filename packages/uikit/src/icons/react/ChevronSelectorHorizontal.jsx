import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronSelectorHorizontal = (props, ref) => {
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
        d="M5.99984 4.66663L2.6665 7.99996L5.99984 11.3333M9.99984 4.66663L13.3332 7.99996L9.99984 11.3333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronSelectorHorizontal)
const ChevronSelectorHorizontal = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChevronSelectorHorizontal', props.className].join(' ')}
    />
  )
})
ChevronSelectorHorizontal.displayName = 'IconChevronSelectorHorizontal'
export default ChevronSelectorHorizontal
