import { clsx } from '@mantine/styles'
import { isValidElement, cloneElement } from 'react'

import { IconFile02, IconMinus, IconPlus, IconChevronDownFill } from '../../icons/index.js'
import { Loader } from '../../primitive/index.js'

import type { SwitcherIcon, TreeLeafIcon, TreeNodeProps } from './index'

export default function renderSwitcherIcon(
  prefixCls: string,
  switcherIcon: SwitcherIcon,
  showLine: boolean | { showLeafIcon: boolean | TreeLeafIcon } | undefined,
  treeNodeProps: TreeNodeProps
): React.ReactNode {
  const { isLeaf, expanded, loading } = treeNodeProps

  if (loading) {
    return <Loader size="xs" className={`${prefixCls}-switcher-loading-icon`} />
  }
  let showLeafIcon: boolean | TreeLeafIcon
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon
  }

  if (isLeaf) {
    if (!showLine) {
      return null
    }

    if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
      const leafIcon = typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon
      const leafCls = `${prefixCls}-switcher-line-custom-icon`

      if (isValidElement(leafIcon)) {
        return cloneElement(leafIcon, {
          //@ts-ignore
          className: clsx(leafIcon.props.className || '', leafCls)
        })
      }

      return leafIcon
    }

    return showLeafIcon ? (
      <IconFile02 className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <span className={`${prefixCls}-switcher-leaf-line`} />
    )
  }

  const switcherCls = `${prefixCls}-switcher-icon`

  const switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon

  if (isValidElement(switcher)) {
    return cloneElement(switcher, {
      //@ts-ignore
      className: clsx(switcher.props.className || '', switcherCls)
    })
  }

  if (switcher) {
    return switcher
  }

  if (showLine) {
    return expanded ? (
      <IconMinus size={14} className={`${prefixCls}-switcher-line-icon`} />
    ) : (
      <IconPlus size={14} className={`${prefixCls}-switcher-line-icon`} />
    )
  }
  return <IconChevronDownFill size={14} className={switcherCls} />
}
