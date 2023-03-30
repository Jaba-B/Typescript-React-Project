import { SelectedPage } from "@/shared/types"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import { HText } from "../../shared/HText"
import SpecialnessItem from "./SpecialnessItem";
import { SpecialnessType } from "@/shared/types"

const specialnesses: Array<SpecialnessType> = [
    { 
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Foundation",
        description: "Linkin Park was founded by three high school friends: Mike Shinoda, Rob Bourdon, and Brad Delson. The three attended Agoura High School in Agoura Hills, California, a suburb of Los Angeles."
    },
    { 
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Members",
        description: "Chester Bennington - lead vocalist, Mike Shinoda - vocalist/piano, Joe Hahn - turntable, Rob Bourdon - Acoustic Drum Kit, Brad Delson - Lead Guitar, Dave Farrell - Bass Guitar. "
    },
    { 
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Charity",
        description: "The band was awarded the UN Global Leadership Award for their humanitarian philanthropy via their Music for Relief non-profit, and fundraising $500,000 USD to the Save the Children."
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Specialness = ({ setSelectedPage }: Props) => {

    return (
        <section id="specialness" className="bg-gray-20 mx-auto min-h-full pt-1 pb-20">
            <motion.div
                className="w-5/6 mx-auto"
                onViewportEnter={() => setSelectedPage(SelectedPage.Specialness)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:my-5 md:w-3/5">
                    <HText>More Than Just Band</HText>
                    <p className="my-5 text-sm">
                        On January 19, 2010, Linkin Park released a new song titled "Not Alone" as part of a compilation from Music for Relief called Download to Donate for Haiti in support of the Haiti Earthquake crisis.
                        Shinoda designed two T-shirts, in which the proceeds would go to Music for Relief to help the victims of the 2011 Tōhoku earthquake and tsunami disasters.
                        In the wake of Typhoon Haiyan in 2013, Linkin Park played at Club Nokia during the "Music for Relief: Concert for the Philippines" in Los Angeles, and raised donations for victims.
                    </p>
                </div>
                <div className="md:flex md:mt-24 items-center justify-between gap-8">
                    {specialnesses.map((specialness: SpecialnessType) => (
                        <SpecialnessItem 
                            key={specialness.title}
                            icon={specialness.icon}
                            title={specialness.title}
                            description={specialness.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Specialness