import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag || '')
  return redirect(`/?action=revalidated&tag=${tag}`)
}
