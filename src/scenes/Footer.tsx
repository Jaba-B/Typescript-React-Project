import HText from "@/shared/HText"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16" >
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex" >
                <div className="mt-16 basis-1/2 md:mt-0">
                    <HText>Linkin Park Association</HText>
                    <p className="my-5">
                        METEORA 20TH ANNIVERSARY LIMITED EDITION SUPER DELUXE BOX SET AVAILABLE APRIL 7TH INCLUDING UNRELEASED SONGS, DEMOS, B-SIDES, LIVE SHOWS AND NEVER BEFORE SEEN BEHIND THE SCENES FOOTAGE.
                    </p>
                    <p>© 2023 LINKIN PARK. ALL RIGHTS RESERVED</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4>Links</h4>
                    <p className="my-5">SUBSCRIBE TO LP NEWSLETTER</p>
                    <p className="my-5">LPU SHOP</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4>Contact Us</h4>
                    <p className="my-5">linkin@park.com</p>
                    <p className="my-5">TERMS & CONDITIONS // PRIVACY POLICY</p>
                    <p>AD CHOICES // COOKIES POLICY // COOKIES SETTINGS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer