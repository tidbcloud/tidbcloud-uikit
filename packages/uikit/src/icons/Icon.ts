import React, { forwardRef } from 'react'

import { ICON_MAP } from './map'

export type IconProps = {
  name: keyof typeof ICON_MAP
  size?: number
} & React.SVGProps<SVGSVGElement>

/**
 * @deprecated just import each icon like IconAlertCircle
 */
export const Icon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(({ name, size, ...restProps }, ref) => {
  return React.createElement(ICON_MAP[name], {
    ...restProps,
    ref,
    ...(typeof size !== 'undefined' ? { height: size, width: size } : {})
  })
})
