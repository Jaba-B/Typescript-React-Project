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
import  community from "../../assets/community.jpg"

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
                <div className="mt-20 flex flex-col items-center md:flex-row md:justify-between lg:justify-evenly">
                    <img src={community} alt="linkin park community logo" className="w-[400px] md:mr-8 lg:mr-0" />
                    <div className="mt-10 md:mt-0 md:max-w-[700px]">
                        <HText><p className="text-center">Foundation of Linkin Park Association</p></HText>
                        <p className="mt-5">Derek - Founder: When I opened the up The Linkin Park Association as a cheesy Angelfire fan page, I didn't expect much from myself, the visitors, and certaintly of the site. You see, I had a tendency on quiting on the last 5 sites I had made, and well I didn't think this was going to last any longer than the rest; </p>
                        <p className="mt-5">As I had just become an active member of the LPMB [Linkin Park Message Board] I incidently recieved my first Private Message from a user known as LinkiedTheory, requesting to help me on my crude experimental site. So, unknown to the dangers of instant recruiting I signed him up with me thinking I've associated myself with some average fan with little or no experience of creating websites, and that I was still on my own.</p>
                        <p></p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Specialness