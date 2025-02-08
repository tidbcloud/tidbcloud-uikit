# @tidbcloud/uikit

## 2.1.0

### Minor Changes

- feat: add AnimatedNumber component ([#465](https://github.com/tidbcloud/tidbcloud-uikit/pull/465))

## 2.0.11

### Patch Changes

- fix(FormTimeRangePickerProps): types ([#463](https://github.com/tidbcloud/tidbcloud-uikit/pull/463))
- tweak(TimeRangePicker): compatible types ([#462](https://github.com/tidbcloud/tidbcloud-uikit/pull/462))

## 2.0.10

### Patch Changes

- Feat/remove clear btn icon ([#460](https://github.com/tidbcloud/tidbcloud-uikit/pull/460))

## 2.0.9

### Patch Changes

- refine(time_range_picker): update default order of timerange ([#458](https://github.com/tidbcloud/tidbcloud-uikit/pull/458))

## 2.0.8

### Patch Changes

- fix(uikit): adjust Select component null value handling ([#456](https://github.com/tidbcloud/tidbcloud-uikit/pull/456))

## 2.0.7

### Patch Changes

- fix(uikit): pass null value for Select when value is empty string ([#454](https://github.com/tidbcloud/tidbcloud-uikit/pull/454))

## 2.0.6

### Patch Changes

- Fix/search area bug fix ([#452](https://github.com/tidbcloud/tidbcloud-uikit/pull/452))

## 2.0.5

### Patch Changes

- fix(uikit): enforce input placeholder color with !important ([#449](https://github.com/tidbcloud/tidbcloud-uikit/pull/449))

## 2.0.4

### Patch Changes

- feat(uikit): fix SearchArea components bugs
- Feat/search area fix ([#448](https://github.com/tidbcloud/tidbcloud-uikit/pull/448))
- chore: add type checking for UIKit in CI/CD pipeline ([#447](https://github.com/tidbcloud/tidbcloud-uikit/pull/447))
- feat(story): add RadioCard story demonstrating card-style radio selection ([#446](https://github.com/tidbcloud/tidbcloud-uikit/pull/446))

## 2.0.3

### Patch Changes

- fix(SearchArea): allow undefined values in search area type ([#444](https://github.com/tidbcloud/tidbcloud-uikit/pull/444))

## 2.0.2

### Patch Changes

- tweak(TimeRangePicker): support empty value & clearable ([#442](https://github.com/tidbcloud/tidbcloud-uikit/pull/442))

## 2.0.1

### Patch Changes

- feat(uikit): bug fix of SearchArea component
- feat: fix input reset bug ([#440](https://github.com/tidbcloud/tidbcloud-uikit/pull/440))

## 2.0.0

### Major Changes

#### Upgrade to Mantine v7

##### Theme Provider

Use `ThemeProvider` from `@tidbcloud/uikit/theme`, this provider includes both emotion provider, mantine provider, notification provider and modals provider. You should set the color scheme prop via `useColorScheme`

```tsx
import { ThemeProvider, useColorScheme } from '@tidbcloud/uikit'

function App({ children }) {
  const { colorScheme } = useColorScheme('auto')

  return <ThemeProvider colorScheme={colorScheme}>{children}</ThemeProvider>
}
```

##### Color Scheme

`theme.colorScheme` was removed.
Use `useColorScheme` from `@tidbcloud/uikit/hooks` to get your color scheme or set the color scheme. (this is for declaring what color scheme you want to use in the top level, it will read from local storage when initializing)
Use `useComputedColorScheme` if you just want to know that color scheme is using now inside component tree.

```tsx
import { Button } from '@tidbcloud/uikit'
import { useColorScheme, useComputedColorScheme } from '@tidbcloud/uikit'

function ComponentA() {
  const { setColorScheme } = useColorScheme()

  return (
    <>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
    </>
  )
}

function ComponentB() {
  const colorScheme = useComputedColorScheme()
  return colorScheme === 'dark' ? <DarkImage /> : <LightImage />
}
```

##### createStyles/styles signature change

```tsx
// theme: MantineTheme
// _params: component props, this is void when using createStyles
// u: helper functions
const C = <Box styles={(theme, _params, u) => {}} />

const useStyles = createStyles((theme, _params, u) => {})

// the u arg internal is like below:
const u = {
  light: '[data-mantine-color-scheme="light"] &',
  dark: '[data-mantine-color-scheme="dark"] &',
  rtl: '[dir="rtl"] &',
  ltr: '[dir="ltr"] &',
  notRtl: '[dir="ltr"] &',
  notLtr: '[dir="rtl"] &',
  ref: getStylesRef,
  smallerThan: (breakpoint: MantineBreakpoint | number) =>
    `@media (max-width: ${em(getBreakpointValue(theme, breakpoint) - 0.1)})`,
  largerThan: (breakpoint: MantineBreakpoint | number) =>
    `@media (min-width: ${em(getBreakpointValue(theme, breakpoint))})`
}
```

Since `theme.colorScheme` was removed, if you need to access colorScheme in createStyles, you can use the 3rd arg:

```tsx
import { createStyles } from '@tidbcloud/uikit/utils'

export const useStyles = createStyles((theme, _params, u) => {
  return {
    root: {
      [u.dark]: {
        backgroundColor: theme.colors.dark[6]
      },
      [u.light]: {
        backgroundColor: theme.white
      }
    }
  }
})
```

##### Access to Theme object

```tsx
import { useMantineTheme } from '@tidbcloud/uikit'

function Component() {
  const theme = useMantineTheme()
  theme.colors.carbon[5]
}
```

##### `theme.fn` is removed

Some utils can be imported from `@tidbcloud/uikit/utils`

```tsx
import { rgba, rem, getPrimaryShade } from '@tidbcloud/uikit/utils`
```

##### CodeBlock

`prismProps` to `codeHighlightProps`: https://mantine.dev/x/code-highlight/?t=prop

##### Common props renams

```
spacing -> gap
position -> justify
icon -> leftSection/rightSection
width -> w
overlayBlur -> overlayProps
```

##### Left/right section

`icon => leftSection`
`rightIcon => rightSection`

```tsx
<Button leftSection="left" rightSection="right">
  Label
</Button>
```

##### Group/Stack

- `position` => `justify` – it now supports all justify-content values
- `noWrap` prop was replaced with `wrap="nowrap"`, wrap prop now supports all flex-wrap values
- `spacing` prop was replaced with `gap`

```
// Tabs
onTabChange -> onChange
TabProps -> TabsTabProps
tabsList -> list

// Button
leftIcon/rightIcon -> leftSection/rightSection
compact -> size="compact-XXX"

// Group
position -> justify
noWrap -> wrap="nowrap"
spacing -> gap
```

ProTable

- `Pagination` changed
  - `initialPage` -> `defaultValue`
  - `page` -> `value`
- `ProTableProps` -> `ProTableOptions`
- `enablePinning` -> `enableColumnPinning`

```tsx
// Recommended
// Method1
export const List = () => {
  const data = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]

  const columns = [
    {
      header: 'Position',
      accessorKey: 'position'
    },
    {
      header: 'Name',
      accessorKey: 'name'
    },
    {
      header: 'Symbol',
      accessorKey: 'symbol'
    },
    {
      header: 'Mass',
      accessorKey: 'mass'
    }
  ]

  const table = useProTable({ data, columns })
  return <ProTable table={table} />
}

// Method2
export const List2 = () => {
  const data = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]

  const columns = [
    {
      header: 'Position',
      accessorKey: 'position'
    },
    {
      header: 'Name',
      accessorKey: 'name'
    },
    {
      header: 'Symbol',
      accessorKey: 'symbol'
    },
    {
      header: 'Mass',
      accessorKey: 'mass'
    }
  ]

  // const table = useProTable({ data, columns})
  return <ProTable data={data} columns={columns} />
}
```

##### Elements type

Since `PolymorphicComponentProps` was not exported from the uikit. Sometimes, you may need to extend component props such as ButtonProps, but there is no element interface, you can extends ElementProps<element name> and omit the color property.

```tsx
import { ButtonProps, ElementProps } from '@tidbcloud/uikit'

interface A extends ButtonProps {}

;<A onClick={() => {}} /> // ❌ Error, can't find onClick

interface B extends ButtonProps, ElementProps<'button', 'color'> {}

;<B onClick={() => {}} /> // ✅
```

##### Components

###### `Typography`

- component no longer supports `underline`, `color`, `strikethrough`, `italic`, `transform`, `align` and `weight` prop – use style props instead. Eg: `align` -> `ta`
- Legacy variants were removed.
  - title -> headline-sm
  - body2 -> body-lg

###### `Tooltip`

- `width` -> `w`, see https://mantine.dev/core/tooltip/#multiline

###### `Container`

- `Container` component no longer supports `sizes` prop, use CSS variables to customize sizes on theme instead
- If you want sizes, you can try

```tsx
  <Container styles={{ root: { '--container-size': xxx } }} />

<Container sx={{ '--container-size': xxx }} />
```

###### `Button`

https://mantine.dev/changelog/7-0-0/#button-changes

- `compact` prop was removed, use `size="compact-XXX"` instead
- `leftIcon` and `rightIcon` props were renamed to `leftSection` and `rightSection`
- `uppercase` prop was removed, use `tt` style prop instead
- `loaderPosition` prop was removed, Loader is now always rendered in the center to prevent layout shifts
- Styles API selectors were changed. See Button Styles API documentation for more details

###### `Select`

- `nothingFound` was renamed to `nothingFoundMessage`.
- Options filtering props signature changed, filter function receives all options and search query and should return a new options array. It has 1 input argument with 3 fields:
  - options – array of options or options groups, all options are in { value: string; label: string; disabled?: boolean } format
  - search – current search query
  - limit – value of limit prop passed to Select
- `itemComponent` renamed to `renderOption` for custom select option rendering. The signature is also changed to:

```
(item: { option: { label: string; value: string }; checked: boolean }) => ReactNode
```

Note that your option can have extra fields other than label and value, you can just annotate them like this for example:

```tsx
const options = [
{label: 'label', value: 'value', description: '...', avatar: '...', disabled: false, ...}
]

type SelectOption = typeof options[number]

<Select
data={options}
renderOption={(item: { option: SelectOption, checked: boolean }) =>
<SelectItem label={item.option.label} description={item.option.description} />}
```

####### Input

- Input Styles API was changed – disabled, invalid and withIcon selectors are no longer available, they were migrated to data-disabled, data-invalid and data-with-icon attributes
  NumberInput
- `precision` -> `decimalScale`
- `icon` -> `leftSection`
- `iconWidth` -> `leftSectionWidth`
- parser and formatter were removed, you can just use prefix or suffix

For more details, please refer to:

- https://v6.mantine.dev/changelog/6-0-0/
- https://mantine.dev/changelog/7-0-0/
- https://mantine.dev/guides/6x-to-7x/

## 2.0.0-beta.126

### Patch Changes

- fix(Progress): ensured that the border radius is applied with `!important` to maintain styling integrity. ([#437](https://github.com/tidbcloud/tidbcloud-uikit/pull/437))

## 2.0.0-beta.125

### Patch Changes

- tweak: scroll bar style ([#435](https://github.com/tidbcloud/tidbcloud-uikit/pull/435))
- refactor(Select): remove unused export and enhance stories ([#434](https://github.com/tidbcloud/tidbcloud-uikit/pull/434))

## 2.0.0-beta.124

### Patch Changes

- fix(Select): refactor handleChange function and update imports ([#432](https://github.com/tidbcloud/tidbcloud-uikit/pull/432))

## 2.0.0-beta.123

### Patch Changes

- fix(Button): update default variant's disabled state colors to use 'c… ([#430](https://github.com/tidbcloud/tidbcloud-uikit/pull/430))

## 2.0.0-beta.122

### Patch Changes

- Fix/system endpoint icon ([#428](https://github.com/tidbcloud/tidbcloud-uikit/pull/428))

## 2.0.0-beta.121

### Patch Changes

- fix: code block scroll area ([#424](https://github.com/tidbcloud/tidbcloud-uikit/pull/424))

## 2.0.0-beta.120

### Patch Changes

- Fix/ai icon ([#414](https://github.com/tidbcloud/tidbcloud-uikit/pull/414))
- feat(CodeBlock): add withBorder prop and improve styling ([#423](https://github.com/tidbcloud/tidbcloud-uikit/pull/423))

## 2.0.0-beta.119

### Patch Changes

- refactor(theme/select): set default `allowDeselect` to `false` ([#421](https://github.com/tidbcloud/tidbcloud-uikit/pull/421))
- Revert "chore: export language type of prism" ([#420](https://github.com/tidbcloud/tidbcloud-uikit/pull/420))

## 2.0.0-beta.118

### Patch Changes

- chore: export language type of prism ([#418](https://github.com/tidbcloud/tidbcloud-uikit/pull/418))

## 2.0.0-beta.117

### Patch Changes

- feat(primitive): prism ([#416](https://github.com/tidbcloud/tidbcloud-uikit/pull/416))

## 2.0.0-beta.116

### Patch Changes

- feat(DateTimePicker): enhance user interaction and styling ([#413](https://github.com/tidbcloud/tidbcloud-uikit/pull/413))

## 2.0.0-beta.115

### Patch Changes

- fix(select): remove redundant onChange call in useCreateableSelect hook ([#411](https://github.com/tidbcloud/tidbcloud-uikit/pull/411))

## 2.0.0-beta.114

### Patch Changes

- feat(protable): hide pagination when rowCount is 0 ([#409](https://github.com/tidbcloud/tidbcloud-uikit/pull/409))

## 2.0.0-beta.113

### Patch Changes

- fix(TransferTree): update layout to use row flex direction for improv… ([#407](https://github.com/tidbcloud/tidbcloud-uikit/pull/407))

## 2.0.0-beta.112

### Patch Changes

- fix(select): enhance creatable select functionality ([#405](https://github.com/tidbcloud/tidbcloud-uikit/pull/405))

## 2.0.0-beta.111

### Patch Changes

- fix(theme): update default transition property to 'fade-down' to them… ([#403](https://github.com/tidbcloud/tidbcloud-uikit/pull/403))
- fix: storybook emotion support to uikit and update imports ([#402](https://github.com/tidbcloud/tidbcloud-uikit/pull/402))

## 2.0.0-beta.110

### Minor Changes

- feat(emotion): add emotion support with new entry and server files ([#400](https://github.com/tidbcloud/tidbcloud-uikit/pull/400))

## 2.0.0-beta.109

### Minor Changes

- docs: update docs and changeset script ([#398](https://github.com/tidbcloud/tidbcloud-uikit/pull/398))
- fix(build): fix typings version conflict and ignore eslint error in build ([#397](https://github.com/tidbcloud/tidbcloud-uikit/pull/397))
- chore: add examples ([#396](https://github.com/tidbcloud/tidbcloud-uikit/pull/396))
- fix(build): add 'react-textarea-autosize' to package.json and Vite config for improved dependency management ([#395](https://github.com/tidbcloud/tidbcloud-uikit/pull/395))

## 2.0.0-beta.108

### Patch Changes

- fix(build): update TypeScript configuration to use 'bundler' module resolution for improved compatibility ([#393](https://github.com/tidbcloud/tidbcloud-uikit/pull/393))
- fix(build): fix cjs/mjs output and external packages ([#392](https://github.com/tidbcloud/tidbcloud-uikit/pull/392))

## 2.0.0-beta.107

### Patch Changes

- fix(build): update external dependencies in Vite config for improved … ([#390](https://github.com/tidbcloud/tidbcloud-uikit/pull/390))

## 2.0.0-beta.106

### Patch Changes

- fix(build): fix Mantine core path resolution and remove unused code ([#388](https://github.com/tidbcloud/tidbcloud-uikit/pull/388))

## 2.0.0-beta.105

### Patch Changes

- fix(build): enhance Mantine core path resolution and improve e… ([#386](https://github.com/tidbcloud/tidbcloud-uikit/pull/386))

## 2.0.0-beta.104

### Minor Changes

- chore: add @emotion/server dependency and export it in utils ([#384](https://github.com/tidbcloud/tidbcloud-uikit/pull/384))

## 2.0.0-beta.103

### Minor Changes

- refactor: fix code highlight theme and upgrade @tabler icon ([#382](https://github.com/tidbcloud/tidbcloud-uikit/pull/382))

## 2.0.0-beta.102

### Minor Changes

- release: bump versions (beta) ([#380](https://github.com/tidbcloud/tidbcloud-uikit/pull/380))
- chore: update dependencies to version 7.15.2 for Mantine packages and Emotion libraries ([#379](https://github.com/tidbcloud/tidbcloud-uikit/pull/379))
- feat(ProTable): default hide per page ([#378](https://github.com/tidbcloud/tidbcloud-uikit/pull/378))

## 2.0.0-beta.101

### Patch Changes

- feat(ProTable): default hide per page ([#378](https://github.com/tidbcloud/tidbcloud-uikit/pull/378))

## 2.0.0-beta.100

### Minor Changes

- feat(FormCheckboxGroup): add Flex layout support and accept gap/direction prop ([#375](https://github.com/tidbcloud/tidbcloud-uikit/pull/375))
- fix: code highlight styles ([#376](https://github.com/tidbcloud/tidbcloud-uikit/pull/376))

## 2.0.0-beta.99

### Patch Changes

- fix(MultiSelect): remove padding from input styles in MultiSelect ([#373](https://github.com/tidbcloud/tidbcloud-uikit/pull/373))

## 2.0.0-beta.98

### Patch Changes

- fix(TextInput): fix a typo that uses rightLabel, should be rightSection ([#371](https://github.com/tidbcloud/tidbcloud-uikit/pull/371))
- docs(contribution): refine release process and changeset instructions ([#370](https://github.com/tidbcloud/tidbcloud-uikit/pull/370))
- docs(contribution): update contribution guidelines for changeset usage ([#369](https://github.com/tidbcloud/tidbcloud-uikit/pull/369))
- fix(changeset): enhance changelog generation from git tags ([#368](https://github.com/tidbcloud/tidbcloud-uikit/pull/368))
- fix(ProTable): pagination missing in hook ([#360](https://github.com/tidbcloud/tidbcloud-uikit/pull/360))

## 2.0.0-beta.97

### Patch Changes

- feat: make default key exported and add some desc, this is still a PR for the release
- Feat/search area bug fix ([#364](https://github.com/tidbcloud/tidbcloud-uikit/pull/364))
- feat: Commit the generated changeset file
- Feat/search area fix ([#363](https://github.com/tidbcloud/tidbcloud-uikit/pull/363))
- fix(theme): enhance ActionIcon styles with size and hover effects ([#362](https://github.com/tidbcloud/tidbcloud-uikit/pull/362))
- fix(theme): add border bottom to Modal header for improved styling consistency ([#361](https://github.com/tidbcloud/tidbcloud-uikit/pull/361))

## 2.0.0-beta.96

### Patch Changes

- fix(Select): update Select component styles to include check icon and… ([#358](https://github.com/tidbcloud/tidbcloud-uikit/pull/358))
- fix(Tree): update background color from blue to carbon for indeterminate checkbox for improved theme consistency ([#357](https://github.com/tidbcloud/tidbcloud-uikit/pull/357))
- fix(PageShell): update PageHeader styles to set height instead of margin ([#356](https://github.com/tidbcloud/tidbcloud-uikit/pull/356))
- fix(ProTable): resizing cursor missing ([#355](https://github.com/tidbcloud/tidbcloud-uikit/pull/355))

## 2.0.0-beta.95

### Patch Changes

- feat(ProTable): update version
- fix(ProTable): invalid use hook
- feat(ProTable): update version
- feat(ProTable): enable scrollbar
- fix(ProTable): typo
- feat(ProTable): update storybook
- refactor(ProTable): add new pagination
- feat: add protablepagination

## 2.0.0-beta.94

### Patch Changes

- fix(Button): fix button component with support of 'data-loading' and … ([#353](https://github.com/tidbcloud/tidbcloud-uikit/pull/353))
- fix(customChangeset): correct pull request link formatting in changelog generation script ([#352](https://github.com/tidbcloud/tidbcloud-uikit/pull/352))

## 2.0.0-beta.93

### Patch Changes

- feat(theme): enhance disabled state handling for buttons ( ([#350](https://github.com/tidbcloud/tidbcloud-uikit/pull/350)))
- feat(changelog): enhance changelog generation with pull request links ( ([#349](https://github.com/tidbcloud/tidbcloud-uikit/pull/349)))
- chore: update package configuration and add custom changelog generation scripts ( ([#348](https://github.com/tidbcloud/tidbcloud-uikit/pull/348)))
- refactor(PageShell): enhance Box component usage with clsx and mergeS… ( ([#347](https://github.com/tidbcloud/tidbcloud-uikit/pull/347)))

## 2.0.0-beta.92

### Patch Changes

- fix unstyled input and clean sizes check

## 2.0.0-beta.91

### Patch Changes

- useColorScheme returning value includes auto now for easier manage

## 2.0.0-beta.90

### Patch Changes

- Fix build script with better typings override

## 2.0.0-beta.89

### Patch Changes

- Fix type override handling for other TypeScript declaration files under primitive folder and pass `loaderProps` to `Button` component

## 2.0.0-beta.88

### Patch Changes

- wrap Button for old loading state support

## 2.0.0-beta.87

### Patch Changes

- add right label to textinput

## 2.0.0-beta.86

### Patch Changes

- fix protable layout mode style

## 2.0.0-beta.85

### Patch Changes

- export InlineCodeHighlight

## 2.0.0-beta.84

### Patch Changes

- fix TimeRangePicker style

## 2.0.0-beta.83

### Patch Changes

- fix DateTimePicker with refactored scroll picker

## 2.0.0-beta.82

### Patch Changes

- fix tabs hover dark style & protabe row dark theme style

## 2.0.0-beta.81

### Patch Changes

- fix(theme): set overflow to unset in button style

## 2.0.0-beta.80

### Patch Changes

- update xl -> 24px

## 2.0.0-beta.79

### Patch Changes

- fix(theme): set default variant to light for Badge component

## 2.0.0-beta.78

### Patch Changes

- fix(theme): revert default component to 'button' for NavLink consistency

## 2.0.0-beta.77

### Minor Changes

- feat(icon): use Box wrapped icon
  fix(Select): add onDropdownOpen and onDropdownClose callbacks for controlled dropdown behavior
  feat(RadioGroup): enhance FormRadioGroup with tooltip support and flexible layout options

## 2.0.0-beta.76

### Patch Changes

- fix protable column pinning style

## 2.0.0-beta.75

### Patch Changes

- Fix `NavLink` styles

## 2.0.0-beta.74

### Patch Changes

- fix text input with left label padding

## 2.0.0-beta.73

### Patch Changes

- fix protable sticky & rowVirtualization style

## 2.0.0-beta.72

### Patch Changes

- fix ProTable footer style

## 2.0.0-beta.71

### Patch Changes

- fix ProTable Expaned styles

## 2.0.0-beta.70

### Patch Changes

- Update creatable select and multi-select

## 2.0.0-beta.69

### Patch Changes

- re-export card section props

## 2.0.0-beta.68

### Minor Changes

- Add `creatable` prop to `Select` component and re-export more types

## 2.0.0-beta.67

### Minor Changes

- Re-export code-highlight

## 2.0.0-beta.66

### Patch Changes

- fix MediaQuery type error

## 2.0.0-beta.65

### Patch Changes

- add MediaQuery

## 2.0.0-beta.64

### Patch Changes

- fix phone input filter conflict

## 2.0.0-beta.63

### Patch Changes

- fix protable sx missing

## 2.0.0-beta.62

### Patch Changes

- fix form actions type

## 2.0.0-beta.61

### Minor Changes

- Update build config with types bunddled

## 2.0.0-beta.60

### Minor Changes

- Update exports and fix typings

## 2.0.0-beta.59

### Patch Changes

- Re-export emotion types

## 2.0.0-beta.58

### Patch Changes

- Fix build external

## 2.0.0-beta.57

### Patch Changes

- Fix TYPOGRAPHY_STYLES_MAP export and build external

## 2.0.0-beta.56

### Patch Changes

- Update component exports

## 2.0.0-beta.55

### Patch Changes

- Fix a issue that requestIdleCallback is missing in safari

## 2.0.0-beta.54

### Patch Changes

- fix table scroll

## 2.0.0-beta.53

### Patch Changes

- Fix PasswordInput border style when validate fail

## 2.0.0-beta.52

### Minor Changes

- adjust Dot and DotBadge color

## 2.0.0-beta.51

### Patch Changes

- update form

## 2.0.0-beta.50

### Minor Changes

- Remove dot badge padding and add new icon

## 2.0.0-beta.49

### Minor Changes

- set button left and right icon margin to 4

## 2.0.0-beta.48

### Patch Changes

- update timerangepicker style

## 2.0.0-beta.47

### Patch Changes

- Fix scroll position adjust when controlled value change

## 2.0.0-beta.46

### Minor Changes

- Add DateTimePicker and update Calendar styles

## 2.0.0-beta.45

### Minor Changes

- Update ActionIcon styles and added jsdoc preview for icon component

## 2.0.0-beta.44

### Patch Changes

- update table skeleton

## 2.0.0-beta.43

### Minor Changes

- Update carbon color

## 2.0.0-beta.42

### Patch Changes

- fix phone input placeholder

## 2.0.0-beta.41

### Patch Changes

- fix phone input label style

## 2.0.0-beta.40

### Patch Changes

- fix table pinning

## 2.0.0-beta.39

### Patch Changes

- update phone input style, update table height

## 2.0.0-beta.38

### Patch Changes

- update timerangepicker style

## 2.0.0-beta.37

### Minor Changes

- add tableList,block icon

## 2.0.0-beta.36

### Minor Changes

- Update Input/Select size and styles

## 2.0.0-beta.35

### Minor Changes

- Update Select unstyled/filled variant styles and make input default border to carbon4

## 2.0.0-beta.34

### Patch Changes

- update table

## 2.0.0-beta.33

### Minor Changes

- use interface augmentation to correct MantineThemeColor type

## 2.0.0-beta.32

### Minor Changes

- Fix ActionIcon subtle color; Add icon component type declaration.

## 2.0.0-beta.31

### Minor Changes

- Update CodeBlock/TimeRangePicker color and ActionIcon size

## 2.0.0-beta.30

### Patch Changes

- Select description use carbon.7

## 2.0.0-beta.29

### Minor Changes

- Update Button padding and font weight, TextInput description use color carbon.7

## 2.0.0-beta.28

### Minor Changes

- Update Input/Select/PhoneInput styles

## 2.0.0-beta.27

### Minor Changes

- Update stepper styles and set dot badge to font weight 400

## 2.0.0-beta.26

### Patch Changes

- fix modal border radius

## 2.0.0-beta.25

### Patch Changes

- update table border

## 2.0.0-beta.24

### Minor Changes

- ActionIcon default to subtle, Anchor default to peacock, ProTable row hover to bg caron.3

## 2.0.0-beta.23

### Minor Changes

- make PageShell back icon and CodeBlock Copy icon to subtle

## 2.0.0-beta.22

### Minor Changes

- Update ActionIcon/Tooltip/Modal style set Badge/Alert default to peacock color

## 2.0.0-beta.21

### Minor Changes

- Update Badge/Switch style and fix menu data attributes style

## 2.0.0-beta.20

### Minor Changes

- Update badge styles

## 2.0.0-beta.19

### Minor Changes

- Adjust theme colors in components

## 2.0.0-beta.18

### Minor Changes

- Update Menu/Checkbox/Badge/Paper style

## 2.0.0-beta.17

### Patch Changes

- Update Card/Paper/ProTable styles

## 2.0.0-beta.16

### Patch Changes

- adjust color and backgroundColor for NavLink

## 2.0.0-beta.15

### Minor Changes

- Update NavLink/SegmentedControl/Tabs style

## 2.0.0-beta.14

### Minor Changes

- update ProTable style

## 2.0.0-beta.13

### Patch Changes

- map gray color to carbon

## 2.0.0-beta.12

### Minor Changes

- map gray color to carbon

## 2.0.0-beta.11

### Patch Changes

- fix radio icon and label size mapping

## 2.0.0-beta.10

### Minor Changes

- Update radio and radio group style

## 2.0.0-beta.9

### Minor Changes

- Update button styles and typography colors

## 2.0.0-beta.8

### Minor Changes

- add new theming color

## 2.0.0-beta.7

### Patch Changes

- fix timezone props bug for TimeRangePicker component

## 2.0.0-beta.6

### Patch Changes

- export helper functions for TimeRangePicker component

## 2.0.0-beta.5

### Minor Changes

- add TimeRangePicker component

## 2.0.0-beta.4

### Patch Changes

- Fix `useURLQueryState` bug

## 2.0.0-beta.3

### Patch Changes

- Fix checkbox error status

## 2.0.0-beta.2

### Patch Changes

- Fix form field error message display

## 2.0.0-beta.1

### Minor Changes

- Merge master branch

## 2.0.0-beta.0

### Major Changes

- Upgrade react-hook-form to v7

## 1.18.0

### Minor Changes

- cd2433d: add icon: vector

## 1.17.1

### Patch Changes

- 886ebb5: Make pageshell children optional

## 1.17.0

### Minor Changes

- cbe56a8: Using built-in mantine-react-table loading state

## 1.16.2

### Patch Changes

- b5a68e9: Remove types version for root path import

## 1.16.1

### Patch Changes

- 9432c15: fix typesVersions in package.json to resolve imports inferences

## 1.16.0

### Minor Changes

- 3098b60: Add `PropertyCard` and `PageShell` component

## 1.15.1

### Patch Changes

- 7714a56: database-none icon style

## 1.15.0

### Minor Changes

- be06bc5: add database none icon

## 1.14.2

### Patch Changes

- 244491d: Only include mantine related libs to bundling

## 1.14.1

### Patch Changes

- 27aa2bd: Bundle MRT and other dependencies to avoid referencing original pakages

## 1.14.0

### Minor Changes

- 8edbe98: Use vite/rollup for bundler

## 1.13.0

### Minor Changes

- 8ddf73d: add notification icon

## 1.12.0

### Minor Changes

- 6b61b67: Add border for light variant button

## 1.11.0

### Minor Changes

- 8c883b7: Add arrow tab icon

## 1.10.2

### Patch Changes

- 83b39ba: Fix the missing className when spread props in patch

## 1.10.1

### Patch Changes

- 74ebe3e: Use pnpm patch for loader fix

## 1.10.0

### Minor Changes

- 81fc3bc: Enhance SearchArea component ability

## 1.9.0

### Minor Changes

- 9080eb9: add FormCopyText

## 1.8.0

### Minor Changes

- 0cb1ac2: add system endpoint icon

## 1.7.0

### Minor Changes

- fd2ef2a: Fix transfer tree default checked keys not synced

## 1.6.2

### Patch Changes

- 2635cd7: Add sideEffects property in package.json for better tree shaking

## 1.6.1

### Patch Changes

- c7c9587: Fixed a issue where transfer tree parent node remains even all children were moved

## 1.6.0

### Minor Changes

- 0fca76b: Add `Tree` and `TransferTree` component

## 1.5.0

### Minor Changes

- 1e3d838: Fix icon name, from `DataAppAi` to `IconDataAppAi`

## 1.4.0

### Minor Changes

- dfcb3d2: add new icon

## 1.3.0

### Minor Changes

- 41af00f:
  - Make all icon's default stroke-width to 1.5
  - Hoist stroke-width attribute to svg element
  - Tweak icon script to accomplish the stroke-width change

## 1.2.0

### Minor Changes

- e4955b1: Remove `Icon` component

## 1.1.0

### Minor Changes

- cb94eb4: icon api redesigned, use single import for each icon, the old `Icon` was marked deprecated

## 1.0.1

### Patch Changes

- 3aa2977: PhoneInputV2 support filter country

## 1.0.0

### Major Changes

- 6bf8b39: add some icons

## 0.10.2

### Patch Changes

- d0d60c4: fix text input icon missing

## 0.10.1

### Patch Changes

- c6c7236: Fix cjs import from esm for react-phone-input-2

## 0.10.0

### Minor Changes

- 908cd04: add leftLabel to TextInput

## 0.9.0

### Minor Changes

- 8c57c6e: extract form error message

## 0.8.3

### Patch Changes

- 24e2501: Fix SearchArea exports

## 0.8.2

### Patch Changes

- 471fa41: Fix missing form component ex-exports

## 0.8.1

### Patch Changes

- d6010ed: Fix missing LabelTooltip export

## 0.8.0

### Minor Changes

- 4ed148d: Add Form/SearchArea/LabelTooltip components

## 0.7.1

### Patch Changes

- d1a5304: fix missing uploaded files when publish

## 0.7.0

### Minor Changes

- 7e4deb7: reorganize package entry point, now it only has `biz`/`hooks`/`icons`/`theme`/`utils` as legal subpath imports

## 0.6.7

### Patch Changes

- c9a9b28: test changelog

## 0.6.6

### Patch Changes

- 708b524: test

## 0.6.5

### Patch Changes

- 9110ca1: Fix prism import path

## 0.6.4

### Patch Changes

- fix build

## 0.6.3

### Patch Changes

- uikit/icons: add Star06

## 0.6.2

### Patch Changes

- 659205f: fix: globe01 icon add entry

## 0.6.1

### Patch Changes

- 793a330: feat(uikit): add icon globe01

## 0.6.0

### Minor Changes

- 5fa0e82: fix: forward ref when build icon component

## 0.5.1

### Patch Changes

- 06ce447: Update icon styles

## 0.5.0

### Minor Changes

- ec57499: Fix bundle and esm/cjs issue

## 0.4.0

### Minor Changes

- move SearchArea to /form

## 0.3.0

### Minor Changes

- split hook-form to resolve peer dependency issue

## 0.2.7

### Patch Changes

- bundle react-phone-input2

## 0.2.6

### Patch Changes

- update phone input

## 0.2.5

### Patch Changes

- update phone

## 0.2.4

### Patch Changes

- update phone input

## 0.2.3

### Patch Changes

- update react-phone-input2 typing

## 0.2.2

### Patch Changes

- update phoneinput import

## 0.2.1

### Patch Changes

- update codeblock

## 0.2.0

### Minor Changes

- add dropzone

## 0.1.0

### Minor Changes

- add uitest entry

## 0.0.24

### Patch Changes

- Update loader

## 0.0.23

### Patch Changes

- Update Icons

## 0.0.22

### Patch Changes

- update build

## 0.0.21

### Patch Changes

- build raw icons

## 0.0.20

### Patch Changes

- Update d.ts

## 0.0.6

### Patch Changes

- update form path

## 0.0.5

### Patch Changes

- bundle icons

## 0.0.4

### Patch Changes

- update build

## 0.0.4

### Patch Changes

- update icons

## 0.0.3

### Patch Changes

- update icons

## 0.0.2

### Patch Changes

- init packages
