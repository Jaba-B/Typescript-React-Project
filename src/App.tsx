import { useEffect, useState } from 'react'
import Navbar from "../src/scenes/navbar/index"
import Home from "../src/scenes/navbar/Home"
import { SelectedPage } from './shared/types';
import Specialness from './scenes/specialness/Specialness';
import Albums from './scenes/albums/Albums';
import ContactUs from "./scenes/contactUs/ContactUs"
import Footer from "./scenes/Footer"

function App() {
  const [ selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if( window.scrollY === 0 ) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if( window.scrollY !== 0 ) setIsTopOfPage(false)
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage={setSelectedPage}  />
      <Specialness setSelectedPage={setSelectedPage}  />
      <Albums setSelectedPage={setSelectedPage}  />
      <ContactUs setSelectedPage={setSelectedPage}  />
      <Footer  />
    </div>
  )
}

export default App
