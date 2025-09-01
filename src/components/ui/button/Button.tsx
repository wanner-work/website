import getFadeClassName from "@/methods/ui/getFadeClassName";
import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";

interface Props {
    href?: string
    iconAfter?: FunctionComponent<{
        className?: string
    }>
}

export default function Button ({ iconAfter: IconAfter, href, children }: PropsWithChildren<Props>) {
    const Component = href ? 'a' : 'button';

    return (
        <Component href={href} className={getFadeClassName(
        'text-light dark:text-dark flex cursor-pointer items-center gap-3 rounded-full transition-all hover:gap-5 hover:opacity-80 active:scale-95',
        children && 'text-sm font-medium px-6 py-4',
        !children && 'size-[56px] justify-center items-center'
        )}>
            {children}
            {IconAfter && <span className="icon-after"><IconAfter className="size-4" /></span>}
        </Component>
    )
}