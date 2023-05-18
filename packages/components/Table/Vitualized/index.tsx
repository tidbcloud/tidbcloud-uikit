import { createStyles, CSSObject } from '@mantine/core'
import { useElementSize, useHover } from '@mantine/hooks'
import { useMemoizedFn } from 'ahooks'
import React from 'react'
import { useTable, useBlockLayout, useResizeColumns, Column } from 'react-table'
import { VariableSizeList, VariableSizeListProps } from 'react-window'

import { useScrollbarWidth } from '../../../hooks'

export interface VirtualizedTableProps
  extends Omit<VariableSizeListProps, 'width' | 'height' | 'itemCount' | 'children'> {
  columns: Column<any>[]
  data: any[]
  height?: number
  headerClassName?: string
  bodyClassName?: string
  bodyHeight?: number
}

const useStyles = createStyles((theme, _params, getRef) => {
  const isDark = theme.colorScheme === 'dark'

  const resizing: CSSObject = {
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderColor: theme.fn.rgba(theme.colors.gray[4], 0.4)
  }
  const border = `1px solid ${theme.fn.rgba(theme.colors.gray[4], isDark ? 0.4 : 1)}`
  const thtd: CSSObject = {
    margin: 0,
    padding: '0.5rem',
    borderBottom: border,
    borderRight: border,
    position: 'relative',
    boxSizing: 'border-box',
    fontSize: 12,
    whiteSpace: 'nowrap',
    background: theme.colors.white,
    '&:last-child': {
      overflow: 'hidden'
    },
    color: theme.colors.gray[7]
  }
  return {
    wrapper: {
      overflow: 'hidden',
      display: 'inline-block',
      borderSpacing: 0,
      '&::-webkit-scrollbar': {
        width: 0
      }
    },
    wrapperResizing: {
      userSelect: 'none'
    },
    wrapperLastHover: {
      borderRightWidth: resizing.borderRightWidth,
      borderRightStyle: resizing.borderRightStyle,
      borderColor: resizing.borderColor
    },
    header: {
      color: theme.black,
      height: '32px'
    },
    tr: {},
    headerTh: {
      ...thtd,
      '&:last-child': {
        overflow: 'unset'
      },
      color: theme.colors.gray[9],
      background: theme.colors.slate[9],
      height: '32px',
      fontWeight: 500,
      padding: 0,
      margin: 0,
      lineHeight: '32px',
      paddingLeft: '0.5em'
    },
    th: { ...thtd },
    td: { ...thtd },
    resizer: {
      display: 'inline-block',
      background: 'transparent',
      width: 1,
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translateX(50%)',
      zIndex: 1,
      cursor: 'col-resize',
      '&:hover': {
        ...resizing
      }
    },
    resizing,
    tbody: {
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        width: 0,
        '&:horizontal': {
          height: 0
        }
      }
    }
  }
})

const BASE_ROW_HEIGHT = 40

export const VirtualizedTable: React.FC<VirtualizedTableProps> = ({
  columns,
  data,
  className,
  headerClassName,
  bodyClassName,
  height,
  bodyHeight,
  ...rest
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, totalColumnsWidth, rows, prepareRow, state } = useTable(
    {
      columns,
      data
    },
    useBlockLayout,
    useResizeColumns
  )

  const scrollbarWidth = useScrollbarWidth()
  const { ref: hoverRef, hovered: lastColumnHovered } = useHover()
  const { classes, cx } = useStyles()
  const { ref: headerRef, height: headerHeight } = useElementSize()

  const RenderRow = useMemoizedFn(({ index, style }) => {
    const row = rows[index]
    if (!row) {
      return null
    }
    prepareRow(row)
    return (
      <div
        {...row.getRowProps({
          style
        })}
        className={classes.tr}
      >
        {row.cells.map((cell) => {
          const cellProps = cell.getCellProps()
          const cellStyle = {
            ...(cellProps.style || {}),
            maxWidth: cellProps.style?.width,
            overflow: 'hidden'
          }
          return (
            <div {...cellProps} style={cellStyle} className={classes.td}>
              {cell.render('Cell')}
            </div>
          )
        })}
      </div>
    )
  })

  const baseHeight = rows.length * BASE_ROW_HEIGHT + headerHeight

  const listHeight = Math.min(height ? height - headerHeight - scrollbarWidth : 0, bodyHeight ? bodyHeight : baseHeight)

  const resizerHeight = Math.min(
    height ? height : baseHeight,
    bodyHeight ? bodyHeight + headerHeight : baseHeight + headerHeight
  )

  return (
    <div
      {...getTableProps()}
      className={cx(
        classes.wrapper,
        {
          [classes.wrapperResizing]: state.columnResizing.isResizingColumn,
          [classes.wrapperLastHover]: lastColumnHovered
        },
        className
      )}
    >
      <div className={cx(classes.header, headerClassName)} ref={headerRef}>
        {headerGroups.map((headerGroup: any) => (
          <div {...headerGroup.getHeaderGroupProps()} className={classes.tr}>
            {headerGroup.headers.map((column: any) => {
              const props = column.getHeaderProps()
              const isLast =
                column.id === columns[columns.length - 1].id || column.Header === columns[columns.length - 1].Header
              return (
                <div
                  {...props}
                  className={cx(classes.th, classes.headerTh)}
                  style={{ ...(props.style || {}), height: rest?.itemSize || 'auto' }}
                >
                  <div style={{ ...(props.style || {}), maxWidth: props.style?.width, overflow: 'hidden' }}>
                    {column.render('Header')}
                  </div>
                  {/* Use column.getResizerProps to hook up the events correctly */}
                  <div
                    {...column.getResizerProps()}
                    ref={isLast ? hoverRef : undefined}
                    className={cx(classes.resizer, { [classes.resizing]: column.isResizing })}
                    style={{
                      height: resizerHeight
                    }}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()}>
        <VariableSizeList
          height={listHeight}
          width={totalColumnsWidth}
          itemCount={rows.length}
          className={cx(classes.tbody, bodyClassName)}
          {...rest}
        >
          {RenderRow}
        </VariableSizeList>
      </div>
    </div>
  )
}
