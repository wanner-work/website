import getTextFadeClassName from "@/methods/ui/getTextFadeClassName"
import clsx from "clsx"

interface Props {
    title: string
    subtitle: string
    className?: string
}

export default function Title({ title, subtitle, className }: Props) {
    return (
        <div className={clsx(`flex flex-col gap-1`, className)}>
            <h3 className={getTextFadeClassName('text-4xl font-serif font-bold leading-[1.4em]')}>{title}</h3>
            <p className={getTextFadeClassName('text-lg')}>{subtitle}</p>
        </div>
    )
}
