import Box from "@wanner.work/box";
import { type PropsWithChildren } from "react";
import getTextFadeClassName from "../../methods/getTextFadeString";
import Logo from "../brand/Logo";
import getFadeOverlay from "../../methods/getFadeOverlay";

interface Props {
  title: string;
  description?: string;
}

export default function Page ({title, description, children }: Readonly<PropsWithChildren<Props>>) {
  return <>
      <Box align="center" className="px-8 pt-14 max-w-[500px] md:max-w-[800px] flex flex-col">
        <div>
          <a href="/" className="overflow-hidden inline-block relative">
            <div className={getFadeOverlay('size-full absolute top-0 left-0')} />
            <Logo color="var(--color-dark)" background="var(--color-light)" size={0.08} className="mx-[-19px] my-[-28px]" />
          </a>
        </div>
        <h1 className={getTextFadeClassName("text-5xl md:text-6xl leading-22 font-bold font-serif")}>
          {title}
        </h1>
        {description && <p className={getTextFadeClassName("text-xl md:text-2xl font-medium max-w-[400px] mt-2")}>
          {description}
        </p>}
      </Box>
      <Box align="center" className="mt-12 px-8 max-w-[500px] md:max-w-[800px] ">
          {children}
      </Box>
    </>
}