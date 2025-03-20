import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTools = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 20 19"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 5 3.75 3.75M5 5H2.5l-.833-2.5.833-.833L5 2.5zm11.05-2.716-2.19 2.19c-.33.33-.495.495-.557.685a.83.83 0 0 0 0 .515c.061.19.226.355.557.685l.197.198c.33.33.495.495.686.557a.83.83 0 0 0 .515 0c.19-.062.355-.227.685-.557L17.99 4.51a4.583 4.583 0 0 1-5.133 6.238c-.405-.08-.607-.12-.73-.108a.7.7 0 0 0-.31.094c-.11.059-.219.168-.437.386l-5.964 5.964a1.768 1.768 0 0 1-2.5-2.5L8.88 8.62c.218-.218.327-.327.386-.436a.7.7 0 0 0 .094-.31c.012-.123-.028-.326-.108-.731a4.583 4.583 0 0 1 6.796-4.858M10 12.5l4.583 4.583a1.768 1.768 0 1 0 2.5-2.5l-3.77-3.77a4.6 4.6 0 0 1-.779-.143c-.324-.089-.68-.024-.918.214z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTools)
const Tools = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Tools'].join(' ')}
    />
  )
})
Tools.displayName = 'IconTools'
export default Tools
