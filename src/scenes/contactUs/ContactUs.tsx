import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import contactUs from "@/assets/contactUs.jpg";
// import ContactUsPageGraphic from "@/assets"


type Props = {
    setSelectedPage: ( value: SelectedPage ) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault()
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs) }
                className="md:w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText><span className="text-primary-500" >Keep In Touch</span>  If You Liked My Project</HText>
                <p className="my-5 md:w-3/5">You can email me directly from this form. But before making decision, don't forget to check my other projects according to CV.</p>
                <div className="mt-10 justify-between gap-8 md:flex" >
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/77b9c9cce621c883456576974f1c44e0"
                            method="POST"
                        >
                            <input className={inputStyles} 
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: true,
                                    maxLength: 30,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required." }
                                    {errors.name.type === "maxLength" && "Max length is 30 character." }
                                </p>
                            )}
                            <input className={inputStyles} 
                                type="text"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required." }
                                    {errors.email.type === "pattern" && "Invalid Email address." }
                                </p>
                            )}
                            <textarea className={inputStyles} 
                                rows={4}
                                cols={50}
                                placeholder="Message"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required." }
                                    {errors.message.type === "maxLength" && "Max length is 2000 character." }
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]" >
                            <img className="w-full md:mt-[20px]" alt="contact us page img" src={contactUs}/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs