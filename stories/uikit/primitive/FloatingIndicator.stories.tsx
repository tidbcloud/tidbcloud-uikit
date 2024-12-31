import type { Meta, StoryFn } from '@storybook/react'
import { FloatingIndicator, UnstyledButton } from '@tidbcloud/uikit'
import { createStyles } from '@tidbcloud/uikit/emotion'
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconCircle
} from '@tidbcloud/uikit/icons'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof FloatingIndicator> = {
  title: 'Primitive/Overlays/FloatingIndicator',
  component: FloatingIndicator,
  decorators: [decorator],
  parameters: {}
}

export default meta

const useStyles = createStyles((theme, _, u) => ({
  root: {
    position: 'relative',
    backgroundColor: 'var(--mantine-color-gray-0)',
    width: 'fit-content',
    padding: 'var(--mantine-spacing-sm)',
    borderRadius: 'var(--mantine-radius-md)',

    [u.dark]: {
      backgroundColor: 'var(--mantine-color-dark-8)'
    }
  },

  indicator: {
    backgroundColor: 'var(--mantine-color-white)',
    borderRadius: 'var(--mantine-radius-md)',
    boxShadow: 'var(--mantine-shadow-md)',
    border: '1px solid var(--mantine-color-gray-2)',

    [u.dark]: {
      backgroundColor: 'var(--mantine-color-dark-6)',
      borderColor: 'var(--mantine-color-dark-4)'
    }
  },

  controlsGroup: {
    display: 'flex'
  },

  control: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--mantine-color-gray-6)',
    borderRadius: 'var(--mantine-radius-md)',

    '&[data-active]': {
      color: 'var(--mantine-color-black)',
      [u.dark]: {
        color: 'var(--mantine-color-white)'
      }
    },

    '&:hover': {
      color: 'var(--mantine-color-black)',
      backgroundColor: 'var(--mantine-color-gray-1)',

      [u.dark]: {
        color: 'var(--mantine-color-white)',
        backgroundColor: 'var(--mantine-color-dark-7)'
      }
    },

    '& svg': {
      display: 'block',
      position: 'relative',
      zIndex: 1
    },

    [u.dark]: {
      color: 'var(--mantine-color-dark-2)'
    }
  }
}))

export function Pimary() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({})
  const [active, setActive] = useState('center')
  const { classes } = useStyles()

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node
    setControlsRefs(controlsRefs)
  }

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator target={controlsRefs[active]} parent={rootRef} className={classes.indicator} />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <IconArrowUpLeft size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <IconArrowUp size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <IconArrowUpRight size={26} stroke="1.5" />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <IconArrowLeft size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <IconCircle size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <IconArrowRight size={26} stroke="1.5" />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <IconArrowDownLeft size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <IconArrowDown size={26} stroke="1.5" />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <IconArrowDownRight size={26} stroke="1.5" />
        </UnstyledButton>
      </div>
    </div>
  )
}
