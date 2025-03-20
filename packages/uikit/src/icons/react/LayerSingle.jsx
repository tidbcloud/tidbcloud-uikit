import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayerSingle = (props, ref) => {
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
        d="M12.358 7.179c-.131-.066-.197-.098-.266-.111a.5.5 0 0 0-.184 0c-.069.013-.135.045-.266.111L2 12l9.642 4.821c.131.066.197.099.266.111q.091.018.184 0c.069-.012.135-.045.266-.11L22 12z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayerSingle)
const LayerSingle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LayerSingle'].join(' ')}
    />
  )
})
LayerSingle.displayName = 'IconLayerSingle'
export default LayerSingle
