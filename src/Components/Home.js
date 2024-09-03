import Carousel from "./Carousel";
import Services from "./Services";
import Work from "./Work";
import Footer from "./Footer";
import Clients from "./Clients";
import CEOmessage from "./CEOmessage";
import OurMission from "./OurMission";
import Whatmakesusdifferent from "./Whatmakesusdifferent";
import ProejectsHome from "./ProejectsHome";
import ScrollOnTopButton from "./ScrollOnTopButton";





export default function Home() {
  return (

      <>
      <Carousel/>
      <Services/>
      <ProejectsHome/>
      <CEOmessage/>
      <OurMission/>
      <Clients/>
      <Work/>
      <Whatmakesusdifferent/>
      <ScrollOnTopButton/>
      <Footer/>
      
      
      
      
      </>
  
  )
}
