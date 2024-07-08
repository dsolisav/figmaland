//Main App.jsx file
//Developed by David Steven Solis Aviles

import "./App.css";
import FeatureRow from "./components/FeatureRow";
import HeaderSection from "./components/HeaderSection";
import ContactCard from "./components/ContactCard";
import ContactRow from "./components/ContactRow";
import twitterImage from "../src/assets/images/twitterImage.png";
import facebookImage from "../src/assets/images/facebookImage.png";
import linkedinImage from "../src/assets/images/linkedinImage.png";
import IconRow from "./components/IconRow";
import useWindowMediaQuery from "./utils/handleWindow";
import videoDesktop from "../src/assets/videos/videoDesktop.mp4"
import videoMobile from "../src/assets/videos/videoMobile.mp4"
import Footer from "./components/Footer";

function App() {
  // Import Media Query from separate hook in utils directory to watch window dimensions
  const {isMobile} = useWindowMediaQuery();
  return (
    //Main div
    <div className="App">
      {/* Additional app container */}
      <div id="app-container">
        {/* Encapsulated Header section in a saparate component */}
        <HeaderSection />
        <div className="mt-20">
          {/* Conditioned content of Header depending on mobile or desktop screen dimensions */}
          <p className="text-3xl font-normal text-[#252B42] mb-5">Features</p>
          {isMobile ? (
            <p className="text-lg font-normal text-[#374754] mb-2 leading-6">
              Most calendars are <br />
              designed for teams.
            </p>
          ) : (
            <p className="text-lg font-normal text-[#374754] mb-2 leading-6">
              Most calendars are designed for teams. <br></br>
              Slate is designed for freelancers
            </p>
          )}
        </div>
        
        {/* Mobile Video container. Video will show with mobile dimensions, and hide with desktop dimensions */}
        <div className="flex justify-center ssm:hidden">
          <div id="videoContainer" className="flex justify-center rounded-full w-[100%] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] p-5">
            <video className="w-full rounded-3xl" controls>
              <source src={videoMobile} type="video/mp4" />
            </video>
          </div>
        </div>
        
        {/* Encapsulated Features information in a separated component  */}
        <FeatureRow />
        
        {/* Desktop Video container. Video will show with desktop dimensions, and hide with mobile dimensions */}
        <div id="videoImage" className="hidden ssm:flex ssm:justify-center">
          <div id="videoContainer" className="flex justify-center rounded-full w-[70%] drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
            <video src={videoDesktop} className="w-full rounded-3xl" controls>
            </video>
          </div>
        </div>
        
        {/* Contact Us paragrahp */}
        <div id="contactUs" className="flex justify-center flex-col gap-5 mt-28 mb-3">
          {/* Conditioned content depending on mobile or desktop dimensions  */}
          <p className="font-normal text-[#252B42] text-4xl">Contact Us</p>
          {isMobile ? (
            <p className="text-[#374754] text-xl">
              Most calendars are <br />
              designed for teams.
            </p>
          ) : (
            <p className="text-[#374754] text-xl">
              Most calendars are designed for teams. <br />
              Slate is designed for freelancers
            </p>
          )}
          
          {/* Container for social media icons, will show if dimensions are mobile and hide if dimensions are desktop  */}
          <div className="mt-12 ssm:hidden">
            {/* Encapsulated Social Media icons row in a separated component  */}
            <IconRow
              firstImg={twitterImage}
              secondImg={facebookImage}
              thirdImg={linkedinImage}
            />
          </div>
          
        </div>

        {/* Container for contact info rows, will show if dimensions are mobile and hide if dimensions are desktop  */}
        <div className="px-6 mt-14 ssm:hidden">
          {/* Separated contact info row in a separated component  */}
          <ContactRow />
        </div>
        
        {/* Container for Contact form card, contact row, map and social media icons  */}
        <div className="flex flex-row gap-12 justify-center p-[0.1rem] mt-8 ssm:mt-0 ssm:p-4 mb-16">
          {/* Encapsulated Contact form card in a separate component  */}
          <ContactCard />

          {/* Container for contact row, map and social media icons row. Will show if dimensions are desktop and hide if dimensions are mobile  */}
          <div className="hidden ssm:flex flex-col justify-center gap-12">
            <ContactRow />
            <div className="flex justify-center px-9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3750.103084360677!2d-122.42076508746143!3d37.77953383494227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580997aeae663%3A0xb2706dff83574f4a!2sAyuntamiento%20de%20San%20Francisco!5e0!3m2!1ses-419!2sco!4v1720402504961!5m2!1ses-419!2sco" className="w-full aspect-video"></iframe>
            </div>
            <IconRow
              firstImg={twitterImage}
              secondImg={facebookImage}
              thirdImg={linkedinImage}
            />
          </div>
        </div>
        {/* Encapsulated footer in a separate component  */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
