import { revalidatePath } from 'next/cache'

export default function Revalidate() {
  const revalidate = async () => {
    'use server'
    revalidatePath('/', 'layout')
  }

  return (
    <form action={revalidate}>
      <button className="underline">Revalidate</button>
    </form>
  )
}
