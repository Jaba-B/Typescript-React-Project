import HText from "@/shared/HText"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16" >
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex" >
                <div className="mt-16 basis-1/2 md:mt-0">
                    <HText>Linkin Park Association</HText>
                    <p className="my-5">
                    Meteora 20th anniversary limited edition super deluxe box set available april 7th including unreleased songs, demos, b-sides, live shows and never before seen behind the scenes footage.
                    </p>
                    <p>© 2023 Linkin Park. All rights reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4>Links</h4>
                    <p className="my-5">Subscripe To Linkin Park Newsletter</p>
                    <p className="my-5">LPU Shop</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4>Contact Us</h4>
                    <p className="my-5">linkin@park.com</p>
                    <p className="my-5">Terms and Conditions Privacy Policy</p>
                    <p>Ad Choices // Cookis Policy // Cookies Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer