import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import FeaturesSection from "../components/home/FeaturesSection"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"
const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
    </>
  )
}

export default Home