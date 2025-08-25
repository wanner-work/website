import Markdown from "react-markdown"

interface Props {
    children: string | any
}

export default function Renderer({ children }: Props) {
    console.log(children)

    return <><Markdown>{children}</Markdown>{children}</>
}