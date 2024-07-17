import { EmbeddedStory } from '@components/EmbeddedStory'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components/ui/tabs'

const SQLEditorThemeChange = () => {
  return (
    <div>
      <Tabs defaultValue="oneDark">
        <TabsList>
          <TabsTrigger value="oneDark">oneDark</TabsTrigger>
          <TabsTrigger value="bbedit">bbedit</TabsTrigger>
        </TabsList>
        <TabsContent value="oneDark">
          <EmbeddedStory
            title="dark"
            src={'https://tisqleditor-playground.netlify.app/?example=cur-sql-gutter&theme=oneDark'}
            initHeight={400}
          ></EmbeddedStory>
        </TabsContent>
        <TabsContent value="bbedit">
          <EmbeddedStory
            title="light"
            src={'https://tisqleditor-playground.netlify.app/?example=cur-sql-gutter&theme=bbedit'}
            initHeight={400}
          ></EmbeddedStory>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SQLEditorThemeChange
