import SimpleReveal from '@/components/effects/SimpleReveal'
import NotionCode from '@/components/notion/NotionCode'
import NotionImage from '@/components/notion/NotionImage'
import Box from '@wanner.work/box'
import Notion, { NotionBlockObject } from '@wanner.work/notion'

interface Props {
  data: NotionBlockObject[]
}

export default function CustomNotion({ data }: Props) {
  return (
    <SimpleReveal>
      <Box
        width="content"
        align="center"
        className="mt-20 text-white"
        px="small"
      >
        <Notion
          data={data}
          custom={[
            {
              type: 'code',
              component: NotionCode
            },
            {
              type: 'image',
              component: NotionImage
            }
          ]}
        />
      </Box>
    </SimpleReveal>
  )
}
