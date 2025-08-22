import getFadeOverlay from "../../methods/getFadeOverlay";
import Logo2 from "../brand/Logo2";
import Box from "@wanner.work/box";

export default function Footer () {
    return <div className="relative h-[280px] md:mt-12">
        <Box align="center" className="absolute z-20 inset-0 px-8 max-w-small md:max-w-large mx-auto flex justify-end flex-col py-8">
            <p className="text-light font-light">wanner.work © <span className="text-sm">2025</span></p>
            <p className="font-serif text-4xl font-bold text-light">Soli Deo Gloria.</p>
        </Box>
        <div className="overflow-hidden absolute inset-0 h-full">
            <div className="bg-linear-to-b from-light to-dark/80 dark:from-dark/80 dark:to-transparent z-10 size-full absolute" />
            <Logo2 className="text-dark dark:text-light w-full absolute left-0 scale-110" />
        </div>
    </div>
} 