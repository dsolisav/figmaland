// import logo from './logo.svg';
import "./App.css";
import FeatureRow from "./components/FeatureRow";
import HeaderSection from "./components/HeaderSection";
import ContactCard from "./components/ContactCard";
import ContactRow from "./components/ContactRow";
import twitterImage from "../src/assets/images/twitterImage.png";
import facebookImage from "../src/assets/images/facebookImage.png";
import linkedinImage from "../src/assets/images/linkedinImage.png";
import IconRow from "./components/IconRow";
import FooterWords from "./components/FooterWords";
import locationImageWhite from "../src/assets/images/locationImageWhite.png";
import phoneImageWhite from "../src/assets/images/phoneImageWhite.png";
import twitterImageWhite from "../src/assets/images/twitterImageWhite.png";
import facebookImageWhite from "../src/assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../src/assets/images/linkedinImageWhite.png";
import useWindowMediaQuery from "./utils/handleWindow";
import videoDesktop from "../src/assets/videos/videoDesktop.mp4"
import videoMobile from "../src/assets/videos/videoMobile.mp4"

function App() {
  const {isMobile} = useWindowMediaQuery();
  return (
    <div className="App">
      <div id="app-container">
        <HeaderSection />
        <div className="mt-20">
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
        
        <div className="flex justify-center ssm:hidden">
          <div id="videoContainer" className="flex justify-center rounded-full w-[100%] drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] p-5">
            <video className="w-full rounded-3xl" controls>
              <source src={videoMobile} type="video/mp4" />
              
            </video>
          </div>
        </div>
        
        <FeatureRow />
        
        <div id="videoImage" className="hidden ssm:flex ssm:justify-center">
          <div id="videoContainer" className="flex justify-center rounded-full w-[70%] drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
            <video src={videoDesktop} className="w-full rounded-3xl" controls>
              
            </video>
          </div>
        </div>
        

        <div
          id="contactUs"
          className="flex justify-center flex-col gap-5 mt-28 mb-3"
        >
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
          
          <div className="mt-12 ssm:hidden">
            <IconRow
              firstImg={twitterImage}
              secondImg={facebookImage}
              thirdImg={linkedinImage}
            />
          </div>
          
        </div>

        
        <div className="px-6 mt-14 ssm:hidden">
          <ContactRow />
        </div>
        

        <div className="flex flex-row gap-12 justify-center p-[0.1rem] mt-8 ssm:mt-0 ssm:p-4 mb-16">
          <ContactCard />
          
          <div className="hidden ssm:flex flex-col justify-center gap-12">
            <ContactRow />

            <div className="flex justify-center">
              {/* <img src={mapImage} className="w-[26rem]" alt="appImage"/> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.459721115193!2d-122.41640056687972!3d37.77926471706947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e5211a1ef%3A0x2572614e49e2c2af!2sOrpheum%20Theatre!5e0!3m2!1ses-419!2sco!4v1720333481739!5m2!1ses-419!2sco" className="w-full aspect-video"></iframe>
            </div>
            <IconRow
              firstImg={twitterImage}
              secondImg={facebookImage}
              thirdImg={linkedinImage}
            />
          </div>
          
        </div>
        <div className="flex flex-row h-[20%] bg-[#252B42] py-20 px-16 justify-center gap-20 ssm:gap-40 flex-wrap">
          <FooterWords />
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="flex flex-row gap-2 justify-center items-center">
              <img src={locationImageWhite} className="w-6" alt="appImage"/>
              <a href="https://maps.app.goo.gl/t9bXgzsbfE3XXghTA" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                7480 Mockingbird Hill undefined
              </a>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <img src={phoneImageWhite} className="w-4" alt="appImage"/>
              <p className="text-white text-[0.67rem] font-light text-left">
                (239) 555-0108
              </p>
            </div>
            <div className="w-full">
              <div className="mt-5">
                <IconRow
                  firstImg={twitterImageWhite}
                  secondImg={facebookImageWhite}
                  thirdImg={linkedinImageWhite}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
