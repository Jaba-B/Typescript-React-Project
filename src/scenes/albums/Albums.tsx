import { SelectedPage } from "@/shared/types";
import hybridTheory from "@/assets/hybridTheory.jpg";
import meteora from "@/assets/meteora.jpg";
import minutesToMidnight from "@/assets/minutesToMidnight.jpg";
import aThousandSuns from "@/assets/aThousandSuns.jpg";
import livingThings from "@/assets/livingThings.jpg";
import huntingParty from "@/assets/huntingParty.jpg";
import oneMoreLight from "@/assets/oneMoreLight.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { AlbumType } from "@/shared/types"
import Album from "./Album"

const albums: Array<AlbumType> = [
    {
        name: "Hybrid Theory",
        description: "Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000, through Warner Bros. Records. Recorded at NRG Recordings in North Hollywood, California, and produced by Don Gilmore, the album's lyrical themes deal with problems lead vocalist Chester Bennington experienced during his adolescence.",
        image: hybridTheory,
    },
    {
        name: "Meteora",
        description: "Meteora is the second studio album by American rock band Linkin Park. It was released on March 25, 2003, through Warner Bros. Records, following Reanimation, a collaboration album which featured remixes of songs included on their 2000 debut studio album Hybrid Theory. The album was produced by the band alongside Don Gilmore.",
        image: meteora,
    },
    {
        name: "Minutes To Midnight",
        description: "Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007, through Warner Bros. Records. The album was produced by Mike Shinoda and Rick Rubin, and it is Linkin Park's first studio album produced without Don Gilmore, who had produced the band's two previous albums.",
        image: minutesToMidnight,
    },
    {
        name: "A Thousand Suns",
        description: "A Thousand Suns is the fourth studio album by American rock band Linkin Park. It was released on September 13, 2010,[1] by Warner Bros. Records. The album was produced by Mike Shinoda and Rick Rubin, who had also worked together to produce the band's previous studio album Minutes to Midnight (2007).",
        image: aThousandSuns,
    },
    {
        name: "Living Things",
        description: "Living Things (stylized in all caps) is the fifth studio album by the American rock band Linkin Park. It was released under Warner Bros. Records and Machine Shop Recordings on June 26, 2012, in Japan, and throughout the rest of the world during the following week. Production was handled by vocalist Mike Shinoda and Rick Rubin.",
        image: livingThings,
    },
    {
        name: "The Hunting Party",
        description: "The Hunting Party is the sixth studio album by American rock band Linkin Park. The album, produced by band members Mike Shinoda and Brad Delson, was released by Warner Bros. Records and Machine Shop on June 13, 2014. It is the first album since Meteora (2003) not to be produced with Rick Rubin, who produced the band's previous three studio albums.",
        image: huntingParty,
    },
    {
        name: "One More Light",
        description: "One More Light is the seventh studio album by American rock band Linkin Park. It was released on May 19, 2017, through Warner Bros. Records and Machine Shop. It is the band's first album to have a title track, as they felt that the song One More Light was the heart of the album. It is also the last Linkin Park album to be released before the death of lead vocalist.",
        image: oneMoreLight,
    },
]

type Props = {
    setSelectedPage: ( value: SelectedPage ) => void;
};

const Albums = ({ setSelectedPage }: Props) => {
    return (
        <section id="albums" className="w-full bg-primary-100 py-28">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Albums)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                <div className="md:w-3/5">
                    <HText>Albums</HText>
                    <p className="py-5" >American rock band Linkin Park have released seven studio albums, three live albums, two compilation albums, two remix albums, three soundtrack albums, 12 video albums, 10 extended plays, 35 singles, 20 promotional singles, and 68 music videos.</p>
                </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                    {albums.map((item: AlbumType, index) => (
                        <Album 
                           key={`${item.name}-${index}`} 
                           name={item.name}
                           description={item.description}
                           image={item.image}
                        />
                    ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Albums