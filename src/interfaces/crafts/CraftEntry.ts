import type { FunctionComponent, ReactNode } from "react";

export default interface CraftEntry {
    title: string;
    description: string;
    component: FunctionComponent
}