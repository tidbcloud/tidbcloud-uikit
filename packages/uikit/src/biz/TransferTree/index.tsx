import { clsx, createStyles } from '@mantine/styles'
import { useMemoizedFn, useUpdateEffect } from 'ahooks'
import React, { ReactNode, useMemo, useState } from 'react'

import { IconChevronRight, IconChevronLeft } from '../../icons'
import { Card, Box, Stack, ActionIcon } from '../../primitive'
import { Tree, TreeDataNode, TreeProps } from '../Tree'

export interface TransferTreeProps {
  sourceHeader?: ReactNode
  targetHeader?: ReactNode
  dataSource: TreeDataNode[]
  onChange?: (targetTree: TreeDataNode[]) => void
  onCheckLeft?: TreeProps['onCheck']
  onCheckRight?: TreeProps['onCheck']
  onMoveRight?: () => void
  onMoveLeft?: () => void
  className?: string
  treeProps?: TreeProps
  initialTargetKeys?: string[]
}

const useStyles = createStyles({
  transferTree: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'stretch'
  },
  transfer: {
    flexBasis: 400,
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  treeWrapper: {
    padding: '1rem',
    flex: 1,
    overflow: 'auto'
  }
})

export const TransferTree: React.FC<TransferTreeProps> = ({
  sourceHeader,
  targetHeader,
  onChange,
  dataSource,
  className,
  treeProps = {},
  onCheckLeft,
  onCheckRight,
  onMoveRight,
  onMoveLeft,
  initialTargetKeys
}) => {
  const { classes } = useStyles()
  const [source, setSource] = useState<TreeDataNode[]>(dataSource)
  const [checkedSource, setCheckedSource] = useState<Set<string>>(new Set())
  const [checkedTarget, setCheckedTarget] = useState<Set<string>>(new Set())
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<Set<string>>(new Set(initialTargetKeys ?? []))

  const dataSourceMap = useMemo(() => {
    return dataSource.reduce((acc, next) => {
      acc.set(next.key, next)
      return acc
    }, new Map<string | number, TreeDataNode>())
  }, [dataSource])

  const renderedSource = useMemo(() => {
    return filterTree(
      source,
      () => true,
      (node) => (selectedNodeKeys.has(node.key as string) ? { ...node, disabled: true } : node)
    )
  }, [source, selectedNodeKeys])
  const renderedTarget = useMemo(() => {
    return filterTree(
      source,
      (node) =>
        selectedNodeKeys.has(node.key as string) ||
        (node.children ? node.children.some((c) => selectedNodeKeys.has(c.key as string)) : false)
    )
  }, [source, selectedNodeKeys])

  const onMoveToRight = () => {
    setSelectedNodeKeys(new Set(checkedSource))
    onMoveRight?.()
  }

  const onMoveToLeft = () => {
    setSelectedNodeKeys((prev) => new Set([...prev].filter((i) => !checkedTarget.has(i))))
    onMoveLeft?.()
  }

  const onCheckLeftTree: TreeProps['onCheck'] = (selected, event) => {
    setCheckedSource(new Set([...(selected as string[]), ...(event.halfCheckedKeys as string[])]))
    onCheckLeft?.(selected, event)
  }
  const onCheckRightTree: TreeProps['onCheck'] = (selected, event) => {
    setCheckedTarget(new Set(selected as string[]))
    onCheckRight?.(selected, event)
  }

  useUpdateEffect(() => {
    setSource(dataSource)
  }, [dataSource])

  useUpdateEffect(() => {
    onChange?.(renderedTarget)
  }, [renderedTarget])

  return (
    <Card withBorder className={clsx(classes.transferTree, className)}>
      <div className={classes.transfer}>
        {sourceHeader ? (
          sourceHeader
        ) : (
          <Box component="header" p={16} sx={(theme) => ({ backgroundColor: theme.colors.gray[2] })}>
            Source
          </Box>
        )}
        <div className={classes.treeWrapper}>
          <Tree {...treeProps} checkable treeData={renderedSource} onCheck={useMemoizedFn(onCheckLeftTree)} />
        </div>
      </div>
      <Stack align="center" justify="center">
        <ActionIcon variant="default" disabled={checkedSource.size === 0} onClick={useMemoizedFn(onMoveToRight)}>
          <IconChevronRight size={14} />
        </ActionIcon>
        <ActionIcon variant="default" disabled={checkedTarget.size === 0} onClick={useMemoizedFn(onMoveToLeft)}>
          <IconChevronLeft size={14} />
        </ActionIcon>
      </Stack>
      <div className={classes.transfer}>
        {targetHeader ? (
          targetHeader
        ) : (
          <Box component="header" h={60} p={16} sx={(theme) => ({ backgroundColor: theme.colors.gray[2] })}>
            Target
          </Box>
        )}
        <div className={classes.treeWrapper}>
          <Tree {...treeProps} checkable treeData={renderedTarget} onCheck={useMemoizedFn(onCheckRightTree)} />
        </div>
      </div>
    </Card>
  )
}

function filterTree(
  tree: TreeDataNode[],
  filterFunc: (i: TreeDataNode) => boolean,
  updaterFunc: (node: TreeDataNode) => TreeDataNode = (i) => i
): TreeDataNode[] {
  return tree
    .filter(filterFunc)
    .map((i) => ({ ...updaterFunc(i), children: i.children ? filterTree(i.children, filterFunc, updaterFunc) : [] }))
}
