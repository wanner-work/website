import type { PropsWithChildren } from "react";
import TestimonialOverview from "../testimonials/TestimonialOverview";
import { ExternalLink, MoveRight, MoveUpRight, Quote } from "lucide-react";
import getFadeClassName from "../../methods/getFadeClassName";

interface Props {
  name: string
  picture?: string
  company: string
  companyLink?: string
  html: string
}

export default function Testimonials ({children, ...props }: PropsWithChildren<Props>) {
    return (
        <div>
        <div className="grid grid-cols-5 border-t border-t-dark/10 mt-8 gap-x-8">
            <div className="py-8 col-span-3">
                <Quote className="absolute size-12 -translate-y-3 -translate-x-5 text-dark/10" />
                <TestimonialOverview {...props}>
                    {children}
                </TestimonialOverview>
            </div>
            <div className="border-l border-l-dark/10 py-8 pl-8 col-span-2">
                <p>
                    <span className="font-bold text-[120px] leading-26 block">&</span>
                    ... noch viele weitere Stimmen.
                </p>
            </div>
        </div>

        <div className="flex justify-center mt-6">
            <a href='/testimonials' className={getFadeClassName('text-light dark:text-dark px-4 py-3 text-sm font-medium cursor-pointer flex gap-3 items-center hover:opacity-80 active:scale-95 transition')}>
                Siehe weitere Referenzen
                <span>
                <MoveRight className='size-4' />
                </span>
            </a>
        </div>
    </div>
    )
}
