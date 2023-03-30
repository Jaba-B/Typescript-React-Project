import { SelectedPage } from "@/shared/types"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import { HText } from "../../shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Specialness = ({ setSelectedPage }: Props) => {

    return (
        <section id="specialness" className="bg-gray-20 mx-auto min-h-full py-20">
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
            </motion.div>
        </section>
    )
}

export default Specialness