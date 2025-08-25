interface Props {
  name: string
  picture?: string
  company: string
  companyLink?: string
  html: string
}

export default function TestimonialOverview({
  name,
  picture,
  company,
  companyLink,
  html
}: Props) {
  return (
    <div>
      <div
        className="mb-3 text-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div className="align-center flex gap-3 md:gap-5">
        {picture ? (
          <img
            className="size-12 rounded-full object-cover"
            src={picture}
            alt={`${name}'s picture`}
          />
        ) : (
          <div className="from-dark to-dark/40 size-12 shrink-0 rounded-full bg-gradient-to-br" />
        )}
        <div className="flex flex-col">
          <p className="font-serif font-medium">{name}</p>
          <span className="flex flex-wrap gap-x-2 text-sm">
            <p>{company}</p>
            {companyLink && (
              <>
                •{' '}
                <a
                  href={companyLink}
                  className="text-dark/50 dark:text-light/50 underline"
                >
                  {companyLink}
                </a>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}
