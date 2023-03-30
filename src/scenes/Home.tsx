import useMediaQuery from "@/hooks/useMediaQuery";
import ActionBtn from "@/shared/ActionBtn";
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";
import band from "@/assets/band.jpg"
import chester from "@/assets/chester.jpg"
import mike from "@/assets/mike.jpg"
import brad from "@/assets/brad.jpg"
import rob from "@/assets/rob.jpg"
import joe from "@/assets/joe.jpg"
import dave from "@/assets/dave.jpg"
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: ( value: SelectedPage ) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="bg-gray-20 py-10 mx-auto md:h-full md:pb-0 md:mt-28">
            <motion.div 
                className="md:flex justify-between gap-16 w-5/6 mx-auto"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:mr-7">
                    <p className="text-4xl">Linkin Park Community</p>
                    <p className="text-xl mt-1">One of the Best bands of 21st century</p>
                    <p className="mt-4">Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members.</p>
                    <div className="mt-5 flex justify-start items-center gap-16">
                        <ActionBtn setSelectedPage={setSelectedPage}><span>Join Now</span></ActionBtn>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                <div className="mt-10 md:mt-0 w-full flex justify-center md:justify-end">
                    <img src={band} alt="Linkin Park Band Photo" className="w-[500px]" />
                </div>
            </motion.div>

            {isAboveMediumScreens && (
                <motion.div 
                    className="bg-primary-100 h-[250px] mt-28 w-5/6 mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        // hidden: { opacity: 0, x: -50 },
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className=" flex justify-between h-full">
                        <div className="flex flex-col justify-evenly">
                            <img src={chester} alt="Chester" className="h-[150px]"/>
                            <p className="text-center">Chester Bennington</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <img src={mike} alt="Mike" className="h-[150px] w-[150px]"/>
                            <p className="text-center">Mike Shinoda</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <img src={brad} alt="Brad" className="h-[150px] w-[150px]"/>
                            <p className="text-center">Brad Delson</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <img src={rob} alt="Rob" className="h-[150px] w-[150px]"/>
                            <p className="text-center">Rob Bourdon</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <img src={joe} alt="Joe" className="h-[150px] w-[150px]"/>
                            <p className="text-center">Joe Hahn</p>
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <img src={dave} alt="Dave" className="h-[150px] w-[150px]"/>
                            <p className="text-center">Dave Farrell</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    )
}

export default Home