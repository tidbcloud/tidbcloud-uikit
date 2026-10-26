export default {
  index: {
    type: 'page',
    title: 'Home',
    theme: {
      layout: 'full',
      navbar: false,
      footer: false,
      sidebar: false,
      toc: false,
      breadcrumb: false,
      pagination: false,
      timestamp: false
    }
  },
  'cloud-ui': {
    type: 'page',
    title: 'Components',
    theme: {
      typesetting: 'article',
      layout: 'full'
    }
  },
  icons: {
    type: 'page',
    title: 'Icons',
    theme: {
      typesetting: 'article',
      layout: 'full'
    }
  },
  'sql-editor': {
    type: 'page',
    title: 'SQL Editor',
    theme: {
      typesetting: 'article',
      layout: 'full'
    }
  },
  docs: {
    type: 'page',
    title: 'Docs'
  },
  __rap: {
    type: 'page',
    title: 'RAP API',
    href: 'https://doc.rapapi.cn/'
  },
  storybook_link: {
    type: 'page',
    title: 'Storybook',
    href: 'https://tidbcloud-uikit-story.netlify.app/'
  }
}
