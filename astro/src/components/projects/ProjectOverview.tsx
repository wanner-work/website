import { ArrowUpLeftSquare, ExternalLink } from "lucide-react";
import Box from '@wanner.work/box'
import getFadeOverlay from "../../methods/getFadeOverlay";

interface Props {
    id: string;
    image: string;
    description: string;
    link?: string;
}

export default function ProjectOverview({ id, image, description, link }: Props) {
    return (
        <Box align="center" className="max-w-[500px] md:max-w-[800px]">
            <a href={`/projects/${id}`} className="block hover:opacity-80 transition-all">
                <div className="h-40 relative">
                    <div className={getFadeOverlay('absolute inset-0')} />
                    <img src={image} alt={description} className="object-cover size-full" />
                </div>
                <p className="mt-3">{description}</p>
                {link && <a href={link} className="inline-flex items-center gap-1.5 mt-2 text-sm hover:opacity-80 transition-all">
                    <ExternalLink className="size-3" />
                    <span>Sehe dir das Projekt live an!</span>
                </a>}
            </a>
        </Box>
    );
}
