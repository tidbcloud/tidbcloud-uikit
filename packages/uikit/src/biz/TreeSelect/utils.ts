import type { SelectionProtectType, SelectOption, TreeSelectOption } from './types'

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
export const treeToLeafArray = <T extends SelectionProtectType = string>(
  value: TreeSelectOption<T>[],
  parent?: TreeSelectOption<T>
) =>
  value.reduce((prev, cur) => {
    const { children, ...rest } = cur
    if (cur.isLeaf && !cur.disabled) {
      prev.push({ ...rest, parent: parent?.value })
    }
    if (children) {
      prev.push(...treeToLeafArray(children, rest))
    }
    return prev
  }, [] as SelectOption<T>[])

/**
 * Flatten a TreeSelectOption array into a plain array of SelectOption.
 *
 * This function will traverse the tree recursively and return all the leaf
 * nodes in a single array. Each leaf node will have a parent field pointing to
 * its parent node's value.
 *
 * @param value - The TreeSelectOption array to be flattened
 * @param parent - The parent node of the current node
 * @returns An array of SelectOption
 */
export const treeToFlatArray = <T extends SelectionProtectType = string>(
  value: TreeSelectOption<T>[],
  parent?: TreeSelectOption<T>
) => {
  return value.reduce((prev, cur) => {
    const { children, ...rest } = cur
    prev.push({ ...rest, parent: parent?.value })
    if (children) {
      prev.push(...treeToFlatArray(children, rest))
    }
    return prev
  }, [] as SelectOption<T>[])
}

/**
 * Converts a flat array of SelectOption items into a tree structure of TreeSelectOption.
 *
 * This function organizes the flat array by mapping each option to its parent based on the parent field.
 * Options without a parent are considered root nodes and are directly added to the tree array.
 * Children are recursively added to their respective parent nodes.
 *
 * @param value - The flat array of SelectOption items to be converted into a tree structure.
 * @returns A TreeSelectOption array representing the hierarchical tree structure.
 */

export const flatArrayToTree = <T extends SelectionProtectType = string>(value: SelectOption<T>[]) => {
  const treeArr: TreeSelectOption<T>[] = []
  const treeMap = new Map<T, TreeSelectOption<T>>()
  value.forEach((v) => {
    const { parent, ...rest } = v
    treeMap.set(v.value, { ...rest, children: [] })
  })
  value.forEach((v) => {
    const node = treeMap.get(v.value)!
    if (!v.parent) {
      treeArr.push(node)
      return
    }

    const parent = treeMap.get(v.parent)
    if (!parent) {
      return
    }

    parent.children!.push(node)
  })

  return treeArr
}

export const isSelectOptionChecked = <T extends SelectionProtectType = string>(
  option: SelectOption<T> | TreeSelectOption<T>
): option is SelectOption<T> => !!(option as SelectOption<T>).parent
