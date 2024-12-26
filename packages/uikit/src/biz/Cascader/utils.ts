import type { SelectOption, TreeSelectOption } from './useTreeStore'

/**
 * Flatten all leaf nodes from a TreeSelectOption array.
 *
 * A leaf node is a node that has no children and is not disabled.
 *
 * @param value - TreeSelectOption array
 * @returns An array of leaf nodes
 */
export const getAllLeafNodes = <T = string>(value: TreeSelectOption<T>[], parent?: TreeSelectOption<T>) =>
  value.reduce((prev, cur) => {
    const { children, ...rest } = cur
    if (cur.isLeaf && !cur.disabled) {
      prev.push({ ...rest, parentValue: parent?.value! })
    }
    if (children) {
      prev.push(...getAllLeafNodes(children, rest))
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
export const treeToFlatArray = <T = string>(value: TreeSelectOption<T>[], parent?: TreeSelectOption<T>) => {
  return value.reduce((prev, cur) => {
    const { children, ...rest } = cur
    prev.push({ ...rest, parentValue: parent?.value! })
    if (children) {
      prev.push(...treeToFlatArray(children, cur))
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

export const flatArrayToTree = <T = string>(value: SelectOption<T>[]) => {
  const treeArr: TreeSelectOption<T>[] = []
  const treeMap = new Map<T, TreeSelectOption<T>>()
  value.forEach((v) => {
    treeMap.set(v.value, { ...v, children: [] })
  })
  value.forEach((v) => {
    const cur = treeMap.get(v.value)!
    if (!v.parentValue) {
      treeArr.push(cur)
      return
    }

    const parent = treeMap.get(v.parentValue)
    if (!parent) {
      return
    }

    parent.children!.push(cur)
  })

  return treeArr
}
