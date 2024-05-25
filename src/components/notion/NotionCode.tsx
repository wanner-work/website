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
    <div className="relative my-8 rounded-lg bg-[#24292e] p-4 md:-mx-[40px] md:w-[100%+80px]">
      <div className="flex items-center justify-between">
        <div className="mb-3 flex items-center gap-2 text-[13px] opacity-70">
          <DocumentTextIcon className="h-3 w-3" />
          {block.code.caption[0].plain_text}
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <Copy content={block.code.rich_text[0].plain_text} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
