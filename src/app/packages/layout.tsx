import { ReactNode } from 'react'

export const revalidate = 3600

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Layout({ children }: Props) {
  return <>{children}</>
}
