import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from '@wanner.work/image'
import { NotionBlockObject } from '@wanner.work/notion'
import { getNotionImageURL } from '@wanner.work/notion/helper'

interface Props extends NotionBlockObject<ImageBlockObjectResponse> {}

export default function NotionImage({ block }: Props) {
  const src = getNotionImageURL(block.image)

  return (
    <div className="relative my-12 h-[450px] md:-mx-[67px] md:w-[100%+134px]">
      <Image src={src} alt="deger" fill loading="lazy" />
    </div>
  )
}
