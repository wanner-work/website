import Copy from '@/components/utils/Copy'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import {} from '@heroicons/react/24/solid'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionBlockObject } from '@wanner.work/notion'
import { codeToHtml } from 'shiki'

export default async function NotionCode({
  block,
  level
}: NotionBlockObject<CodeBlockObjectResponse>) {
  const html = await codeToHtml(block.code.rich_text[0].plain_text, {
    lang: 'tsx',
    theme: 'github-dark'
  })

  return (
    <div className="md:-mx-[40px] md:w-[100%+80px] my-8 bg-[#24292e] p-4 rounded-lg relative">
      <div className="flex justify-between items-center">
        <div className="text-[13px] mb-3 opacity-70 flex items-center gap-2">
          <DocumentTextIcon className="h-3 w-3" />
          {block.code.caption[0].plain_text}
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Copy content={block.code.rich_text[0].plain_text} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
