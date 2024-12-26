import { useState } from 'react'

import type {
  ToggleExpand,
  LoadChildren,
  OnOptionChange,
  SelectionProtectType,
  ToggleLoading,
  TreeSelectOption,
  TreeStore,
  TreeStoreConfig,
  UpdateChildren,
  ToggleCheck
} from './useTreeStore.js'
import { flatArrayToTree, getAllLeafNodes } from './utils.js'

export const useCascader = <T extends SelectionProtectType = string>({
  options,
  onOptionChange,
  onLoadChildren,
  onLoadChildrenAsync
}: TreeStoreConfig<T>): TreeStore<T> => {
  const [_options, setOptions] = useState(flatArrayToTree(options))
  const _updateOptions = (
    tree: TreeSelectOption<T>[],
    identifier: T | ((opt: TreeSelectOption<T>) => boolean),
    newData: Partial<TreeSelectOption<T>> | ((opt: TreeSelectOption<T>) => Partial<TreeSelectOption<T>>),
    preprocess?: (node: TreeSelectOption<T>) => TreeSelectOption<T>,
    postprocess?: (node: TreeSelectOption<T>) => TreeSelectOption<T>
  ): TreeSelectOption<T>[] => {
    return tree.map((opt) => {
      let _opt = opt
      if (preprocess) {
        _opt = preprocess(opt)
      }

      const shouldUpdate = typeof identifier === 'function' ? identifier(_opt) : _opt.value === identifier
      if (shouldUpdate) {
        const _newData = typeof newData === 'function' ? newData(_opt) : newData
        _opt = { ..._opt, ..._newData }
      }

      if (_opt.children) {
        _opt = { ..._opt, children: _updateOptions(_opt.children, identifier, newData, preprocess, postprocess) }
      }

      return _opt
    })
  }

  const toggleCheck: ToggleCheck<T> = (target) => {
    const allLeafNodes = getAllLeafNodes([target])
    const allValues = allLeafNodes.map((n) => n.value)
    const isAllLeaesChecked = allLeafNodes.every((n) => n.isChecked)
    const newData = { isChecked: !isAllLeaesChecked }
    const updatedOptions = _updateOptions(
      _options,
      (opt) => !opt.disabled && allValues.includes(opt.value),
      newData,
      undefined
    )

    setOptions(updatedOptions)
    onOptionChange?.({ type: 'check', target, newData })

    return updatedOptions
  }
  const checkByValues = (values: T[]) => {
    const updatedOptions = _updateOptions(
      _options,
      (opt) => !opt.disabled,
      (opt) => ({ isChecked: values.includes(opt.value) })
    )
    setOptions(updatedOptions)

    return updatedOptions
  }

  const updateOption: OnOptionChange<T> = (evt, preprocess) => {
    const { target, newData } = evt
    const updatedOptions = _updateOptions(_options, target.value, newData, preprocess)

    setOptions(updatedOptions)
    onOptionChange?.(evt)
  }
  const updateChildren: UpdateChildren<T> = (target, children) =>
    updateOption({ type: 'updateChildren', target, newData: { children } })
  const toggleLoading: ToggleLoading<T> = (target) => {
    updateOption({ type: 'loading', target, newData: { isLoading: !target.isLoading } })
  }
  const toggleExpand: ToggleExpand<T> = (target, reset) => {
    updateOption(
      {
        type: 'expand',
        target,
        newData: { expanded: !target.expanded }
      },
      (node) => {
        if (reset && node.parentValue === target.parentValue) {
          return { ...node, expanded: false }
        }
        return node
      }
    )
  }
  const foldAll = () => {
    const updatedOptions = _updateOptions(_options, () => true, { expanded: false })
    setOptions(updatedOptions)
  }
  const loadChildren: LoadChildren<T> = async (target) => {
    onLoadChildren?.(target)
    if (onLoadChildrenAsync) {
      toggleLoading(target)
      const children = await onLoadChildrenAsync(target)
      updateChildren(target, children)
      toggleLoading(target)
    }
  }

  return {
    options: _options,
    updateOption,
    updateChildren,
    toggleLoading,
    loadChildren,
    toggleExpand,
    foldAll,
    toggleCheck,
    checkByValues
  }
}
