import type { PropsWithChildren } from "react";
import type CraftEntry from "../../interfaces/crafts/CraftEntry";
import getFadeClassName from "../../methods/getFadeClassName";

interface Props extends CraftEntry {
    title: string;
    description: string;
}

export default function CraftOverview({ title, description, children }: PropsWithChildren<Props>) {
    
    return <div>
        <div className={getFadeClassName("")}>
            
        </div>
    </div>
}