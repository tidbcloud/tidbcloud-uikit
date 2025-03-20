import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAward04 = (props, ref) => {
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
        d="M8.876 13.095 4.701 7.877c-.26-.325-.39-.488-.482-.669a2 2 0 0 1-.178-.507C4 6.5 4 6.294 4 5.878V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 2 6.08 2 7.2 2h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 3.52 20 4.08 20 5.2v.678c0 .416 0 .624-.04.823a2 2 0 0 1-.179.507c-.092.181-.222.344-.482.669l-4.175 5.218M5 3l7 9 7-9m-3.464 10.465a5 5 0 1 1-7.071 7.07 5 5 0 0 1 7.07-7.07"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAward04)
const Award04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Award04'].join(' ')}
    />
  )
})
Award04.displayName = 'IconAward04'
export default Award04
