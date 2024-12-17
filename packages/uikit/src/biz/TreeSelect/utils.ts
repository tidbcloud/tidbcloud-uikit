import type { SelectionProtectType, TreeSelectOption } from './types'

/**
 * Check or uncheck all the options in the given TreeSelectOption array.
 *
 * The given boolean value will be applied to all the options, unless the
 * option is disabled. If an option has children, the given boolean value
 * will be applied to all of them recursively.
 *
 * @param options - The TreeSelectOption array to be checked or unchecked
 * @param isChecked - The boolean value to be applied to all the options
 * @returns The checked or unchecked TreeSelectOption array
 */
export const checkAll = <T extends SelectionProtectType = string>(
  options: TreeSelectOption<T>[],
  isChecked: boolean
): TreeSelectOption<T>[] => {
  return options.map((v) => ({
    ...v,
    // skip disabled
    isChecked: v.disabled ? false : isChecked,
    children: v.children ? checkAll(v.children, isChecked) : undefined
  }))
}

/**
 * Check TreeSelectOption items based on given value array.
 *
 * If the value array is empty, all options will be checked.
 *
 * @param options - TreeSelectOption items
 * @param value - Value array
 * @returns Checked TreeSelectOption items
 */
export const checkOptionsByValue = <T extends SelectionProtectType = string>(
  options: TreeSelectOption<T>[],
  value: T[],
  allWithEmpty: boolean
): TreeSelectOption<T>[] => {
  if (!!options?.length && !value.length) {
    return checkAll(options, allWithEmpty)
  }
  return options.map((op) => {
    if (op.children?.length) {
      op.children = checkOptionsByValue(op.children, value, allWithEmpty)
    }
    return { ...op, isChecked: value.includes(op.value) }
  })
}

/**
 * Flatten all leaf nodes from a TreeSelectOption array.
 *
 * A leaf node is a node that has no children and is not disabled.
 *
 * @param value - TreeSelectOption array
 * @returns An array of leaf nodes
 */
export const treeToFlatArray = <T extends SelectionProtectType = string>(value: TreeSelectOption<T>[]) =>
  value.reduce((prev, cur) => {
    if (cur.isLeaf && !cur.disabled) {
      prev.push(cur)
    }
    if (cur.children) {
      prev.push(...treeToFlatArray(cur.children))
    }
    return prev
  }, [] as TreeSelectOption<T>[])
