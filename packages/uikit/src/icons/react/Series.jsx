import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSeries = (props, ref) => {
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
        d="M6.8 3h-.6c-1.12 0-1.68 0-2.108.215-.376.19-.682.491-.874.863C3 4.5 3 5.053 3 6.158v.79c0 1.106 0 1.552.218 1.974.192.372.498.674.874.863C4.52 10 5.08 10 6.2 10h.6c1.12 0 1.68 0 2.108-.215.376-.19.682-.491.874-.863C10 8.5 10 8.054 10 6.948v-.79c0-1.105 0-1.658-.218-2.08a2 2 0 0 0-.874-.863C8.48 3 7.92 3 6.8 3M6.8 14h-.6c-1.12 0-1.68 0-2.108.215-.376.19-.682.491-.874.863C3 15.5 3 16.053 3 17.158v.79c0 1.106 0 1.552.218 1.974.192.372.498.674.874.863C4.52 21 5.08 21 6.2 21h.6c1.12 0 1.68 0 2.108-.215.376-.19.682-.491.874-.863.218-.422.218-.868.218-1.974v-.79c0-1.105 0-1.658-.218-2.08a2 2 0 0 0-.874-.863C8.48 14 7.92 14 6.8 14M17.8 3h-.6c-1.12 0-1.68 0-2.108.215-.376.19-.682.491-.874.863C14 4.5 14 5.053 14 6.158v.79c0 1.106 0 1.552.218 1.974.192.372.498.674.874.863.428.215.988.215 2.108.215h.6c1.12 0 1.68 0 2.108-.215.376-.19.682-.491.874-.863C21 8.5 21 8.054 21 6.948v-.79c0-1.105 0-1.658-.218-2.08a2 2 0 0 0-.874-.863C19.48 3 18.92 3 17.8 3M17.8 14h-.6c-1.12 0-1.68 0-2.108.215-.376.19-.682.491-.874.863-.218.422-.218.975-.218 2.08v.79c0 1.106 0 1.552.218 1.974.192.372.498.674.874.863.428.215.988.215 2.108.215h.6c1.12 0 1.68 0 2.108-.215.376-.19.682-.491.874-.863.218-.422.218-.868.218-1.974v-.79c0-1.105 0-1.658-.218-2.08a2 2 0 0 0-.874-.863C19.48 14 18.92 14 17.8 14"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSeries)
const Series = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Series'].join(' ')}
    />
  )
})
Series.displayName = 'IconSeries'
export default Series
