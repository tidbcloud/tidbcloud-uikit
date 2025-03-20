import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSend02 = (props, ref) => {
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
        d="M12 19v-7m.292 7.084 6.978 2.337c.547.183.82.274.99.209a.5.5 0 0 0 .3-.331c.048-.175-.07-.438-.305-.964L12.766 3.622c-.23-.514-.346-.772-.507-.852a.5.5 0 0 0-.443 0c-.16.079-.277.336-.51.85L3.753 20.336c-.237.526-.356.789-.308.963a.5.5 0 0 0 .3.332c.168.066.442-.025.99-.206l7.052-2.341c.094-.031.14-.047.189-.053a.5.5 0 0 1 .128 0c.048.006.095.022.189.053"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSend02)
const Send02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Send02'].join(' ')}
    />
  )
})
Send02.displayName = 'IconSend02'
export default Send02
