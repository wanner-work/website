interface Props {
    name: string;
    picture?: string;
    company: string;
    companyLink?: string;
    html: string
}

export default function TestimonialOverview({ name, picture, company, companyLink, html }: Props) {
    return (
        <div>
            <div className="mb-3 text-lg" dangerouslySetInnerHTML={{ __html:  html }}></div>
            <div className="flex gap-3 md:gap-5 align-center">
                {picture ? <img className="size-12 rounded-full object-cover" src={picture} alt={`${name}'s picture`} /> : <div className="size-12 bg-gradient-to-br from-dark to-dark/40 rounded-full shrink-0" />}
                <div className="flex flex-col">
                    <p className="font-serif font-medium">{name}</p>
                    <span className="text-sm flex gap-x-2 flex-wrap">
                        <p>{company}</p>
                        {companyLink && <>• <a href={companyLink} className="underline text-dark/50 dark:text-light/50">{companyLink}</a></>}
                    </span>
                </div>
            </div>
        </div>
    );
}
