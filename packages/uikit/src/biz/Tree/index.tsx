import 'rc-tree/assets/index.css'

import { Global } from '@mantine/core'
import { clsx } from '@mantine/styles'
import RcTree from 'rc-tree'
import type { TreeProps as RcTreeProps, BasicDataNode } from 'rc-tree'
import type { DataNode, Key } from 'rc-tree/lib/interface'
import React from 'react'

import { collapseMotion } from './motion.js'
import renderSwitcherIcon from './renderSwitcherIcon.js'

export type { DataNode as TreeDataNode, EventDataNode as TreeEventDataNode } from 'rc-tree/lib/interface'

export type SwitcherIcon = React.ReactNode | ((props: TreeNodeProps) => React.ReactNode)
export type TreeLeafIcon = React.ReactNode | ((props: TreeNodeProps) => React.ReactNode)

export interface TreeProps<T extends BasicDataNode = DataNode>
  extends Omit<RcTreeProps<T>, 'prefixCls' | 'showLine' | 'direction' | 'draggable' | 'icon' | 'switcherIcon'> {
  showLine?: boolean | { showLeafIcon: boolean | TreeLeafIcon }
  className?: string
  /** 是否支持多选 */
  multiple?: boolean
  /** 是否自动展开父节点 */
  autoExpandParent?: boolean
  /** 是否支持选中 */
  checkable?: boolean
  /** 是否禁用树 */
  disabled?: boolean
  /** 默认展开所有树节点 */
  defaultExpandAll?: boolean
  /** 默认展开对应树节点 */
  defaultExpandParent?: boolean
  /** 默认展开指定的树节点 */
  defaultExpandedKeys?: Key[]
  /** （受控）展开指定的树节点 */
  expandedKeys?: Key[]
  /** （受控）选中复选框的树节点 */
  checkedKeys?: Key[] | { checked: Key[]; halfChecked: Key[] }
  /** 默认选中复选框的树节点 */
  defaultCheckedKeys?: Key[]
  /** （受控）设置选中的树节点 */
  selectedKeys?: Key[]
  /** 默认选中的树节点 */
  defaultSelectedKeys?: Key[]
  selectable?: boolean
  prefixCls?: string
  style?: React.CSSProperties
  showIcon?: boolean
  children?: React.ReactNode
  blockNode?: boolean
  switcherIcon?: SwitcherIcon | RcTreeProps<T>['switcherIcon']
}

export interface TreeNodeProps {
  className?: string
  checkable?: boolean
  disabled?: boolean
  disableCheckbox?: boolean
  title?: string | React.ReactNode
  key?: Key
  eventKey?: string
  isLeaf?: boolean
  checked?: boolean
  expanded?: boolean
  loading?: boolean
  selected?: boolean
  selectable?: boolean
  icon?: ((treeNode: TreeNodeAttribute) => React.ReactNode) | React.ReactNode
  children?: React.ReactNode
  [customProp: string]: any
}

export interface TreeNodeAttribute {
  eventKey: string
  prefixCls: string
  className: string
  expanded: boolean
  selected: boolean
  checked: boolean
  halfChecked: boolean
  children: React.ReactNode
  title: React.ReactNode
  pos: string
  dragOver: boolean
  dragOverGapTop: boolean
  dragOverGapBottom: boolean
  isLeaf: boolean
  selectable: boolean
  disabled: boolean
  disableCheckbox: boolean
}

export const Tree = React.forwardRef<RcTree, TreeProps>((props, ref) => {
  const {
    prefixCls = 'tc-uikit-tree',
    className,
    switcherIcon,
    showIcon = false,
    showLine,
    blockNode = false,
    checkable = false,
    selectable = true,
    motion = { ...collapseMotion, motionAppear: false }
  } = props

  const newProps = {
    ...props,
    checkable,
    selectable,
    showIcon,
    motion,
    blockNode,
    showLine: Boolean(showLine)
  }

  return (
    <>
      <RcTree
        {...newProps}
        itemHeight={20}
        ref={ref}
        className={clsx(
          {
            [`${prefixCls}-icon-hide`]: !showIcon,
            [`${prefixCls}-block-node`]: blockNode,
            [`${prefixCls}-unselectable`]: !selectable
          },
          className
        )}
        checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
        prefixCls={prefixCls}
        switcherIcon={(nodeProps: TreeNodeProps) => renderSwitcherIcon(prefixCls, switcherIcon, showLine, nodeProps)}
      />
      <Global
        styles={(theme: any) => ({
          '.tc-uikit-tree': {
            lineHeight: '24px'
          },

          '.tc-uikit-tree-title': {
            color: theme.colors.gray[8]
          },

          '.tc-uikit-tree .tc-uikit-tree-treenode': {
            display: 'flex',
            alignItems: 'flex-start',
            padding: '0 0 4px',
            outline: 'none'
          },

          '.tc-uikit-tree .tc-uikit-tree-treenode-disabled .tc-uikit-tree-node-content-wrapper': {
            cursor: 'not-allowed'
          },

          '.tc-uikit-tree-motion-collapse': {
            overflow: 'hidden',
            transition:
              'height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) !important'
          },

          '.tc-uikit-tree-switcher': {
            position: 'relative',
            cursor: 'pointer',
            width: 24,
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },

          '.tc-uikit-tree-switcher-noop': {
            cursor: 'default'
          },

          '.tc-uikit-tree-switcher > svg': {
            color: theme.colors.gray[8],
            transition: 'transform 0.3s',
            margin: 0,
            fontSize: 12,
            textTransform: 'none',
            textRendering: 'optimizeLegibility',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
          },

          '.tc-uikit-tree-switcher_close > svg': {
            transform: 'rotate(-90deg)'
          },

          '.tc-uikit-tree-switcher_open > svg': {
            transform: 'rotate(0deg)'
          },

          '.tc-uikit-tree-indent-unit': {
            display: 'inline-block',
            width: 24
          },

          '.tc-uikit-tree-checkbox': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            marginRight: 6,
            color: theme.colors.dark[8],
            fontSize: 14,
            fontVariant: 'tabular-nums',
            listStyle: 'none',
            fontFeatureSettings: 'tnum',
            position: 'relative',
            top: 5,
            whiteSpace: 'nowrap',
            outline: 'none',
            cursor: 'pointer'
          },

          '.tc-uikit-tree-checkbox-disabled': {
            cursor: 'not-allowed'
          },

          '.tc-uikit-tree-checkbox-inner': {
            position: 'relative',
            top: 0,
            left: 0,
            display: 'block',
            width: 16,
            height: 16,
            direction: 'ltr',
            backgroundColor: theme.white,
            border: `1px solid ${theme.colors.gray[3]}`,
            borderRadius: 2,
            borderCollapse: 'separate',
            transition: 'all 0.3s'
          },

          '.tc-uikit-tree-checkbox-inner:after': {
            position: 'absolute',
            top: '50%',
            left: '21.5%',
            display: 'table',
            width: 6,
            height: 9,
            border: `2px solid ${theme.white}`,
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) scale(0) translate(-50%, -50%)',
            opacity: 0,
            transition: 'all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s',
            content: '" "'
          },

          '.tc-uikit-tree-checkbox-checked .tc-uikit-tree-checkbox-inner': {
            backgroundColor: theme.colors.blue[7],
            borderColor: theme.colors.blue[7]
          },

          '.tc-uikit-tree-checkbox-checked .tc-uikit-tree-checkbox-inner:after': {
            position: 'absolute',
            display: 'table',
            border: `2px solid ${theme.white}`,
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) scale(1) translate(-50%, -50%)',
            opacity: 1,
            transition: 'all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s',
            content: '" "'
          },

          '.tc-uikit-tree-checkbox-indeterminate .tc-uikit-tree-checkbox-inner:after': {
            top: '50%',
            left: '50%',
            width: 8,
            height: 8,
            backgroundColor: theme.colors.blue[7],
            border: 0,
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1,
            content: '" "'
          },

          '.tc-uikit-tree-checkbox-indeterminate .tc-uikit-tree-checkbox-inner': {
            backgroundColor: theme.white,
            borderColor: theme.colors.gray[3]
          },

          '.tc-uikit-tree-checkbox-disabled .tc-uikit-tree-checkbox-inner': {
            backgroundColor: theme.colors.gray[2],
            borderColor: theme.colors.gray[3]
          },

          '.tc-uikit-tree-checkbox-disabled.tc-uikit-tree-checkbox-checked .tc-uikit-tree-checkbox-inner:after': {
            borderColor: theme.colors.gray[5],
            animationName: 'none'
          },

          '.tc-uikit-tree-checkbox-disabled .tc-uikit-tree-checkbox-inner:after': {
            borderColor: theme.colors.gray[3],
            borderCollapse: 'separate',
            animationName: 'none'
          }
        })}
      />
    </>
  )
})
