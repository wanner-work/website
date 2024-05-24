import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from '@wanner.work/image'
import { NotionBlockObject } from '@wanner.work/notion'
import { getNotionImageURL } from '@wanner.work/notion/helper'

interface Props extends NotionBlockObject<ImageBlockObjectResponse> {}

export default function NotionImage({ block }: Props) {
  const src = getNotionImageURL(block.image)

  return (
    <div className="h-[450px] md:-mx-[55px] md:w-[100%+110px] my-12 relative">
      <Image src={src} alt="deger" fill loading="lazy" />
    </div>
  )
}
