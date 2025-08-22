import getFadeOverlay from "../../methods/getFadeOverlay";
import Logo2 from "../brand/Logo2";
import Box from "@wanner.work/box";

export default function Footer () {
    return <div className="relative h-[400px]">
        <Box align="center" className="absolute z-20 bottom-0 left-0 max-w-[500px] md:max-w-[800px] mx-auto">
            <p className="text-light">wanner.work © 2025</p>
            <p className="font-serif text-3xl font-bold text-light">Soli Deo Gloria.</p>
        </Box>
        <div className="overflow-y-hidden relative h-full">
            <div className="bg-linear-to-b from-light to-dark/50 dark:from-dark/80 dark:to-transparent z-10 size-full absolute" />
            <Logo2 className="text-dark dark:text-light w-full absolute left-0" />
        </div>
    </div>
} 