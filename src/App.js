// import logo from './logo.svg';
import "./App.css";
import FeatureRow from "./components/FeatureRow";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import videoImage from "../src/assets/images/videoImage.png";
import ContactCard from "./components/ContactCard";
import ContactRow from "./components/ContactRow";
import mapImage from "../src/assets/images/mapImage.png";
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
import videoImageMobile from "../src/assets/images/videoImageMobile.png";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
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
        {isMobile ? (
          <div>
            <img src={videoImageMobile} className="flex justify-center mt-10" />
          </div>
        ) : (
          <div></div>
        )}
        <FeatureRow />
        {isMobile ? (
          <></>
        ) : (
          <div id="videoImage" className="flex justify-center">
            <div className="flex justify-center w-[80%]">
              <img src={videoImage} />
            </div>
          </div>
        )}

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
          {isMobile ? (
            <div className="mt-12">
              <IconRow
                firstImg={twitterImage}
                secondImg={facebookImage}
                thirdImg={linkedinImage}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        {isMobile ? (
          <div className="px-6 mt-14">
            <ContactRow />
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-row gap-12 justify-center p-[0.1rem] mt-8 ssm:mt-0 ssm:p-2 mb-16">
          <ContactCard />
          {isMobile ? (
            <></>
          ) : (
            <div className="flex flex-col justify-center gap-12">
              <ContactRow />

              <div className="flex justify-center">
                <img src={mapImage} className="w-[26rem]" />
              </div>
              <IconRow
                firstImg={twitterImage}
                secondImg={facebookImage}
                thirdImg={linkedinImage}
              />
            </div>
          )}
        </div>
        <div className="flex flex-row h-[20%] bg-[#252B42] py-20 px-16 justify-center gap-20 ssm:gap-40 flex-wrap">
          <FooterWords />
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="flex flex-row gap-2 justify-center items-center">
              <img src={locationImageWhite} className="w-6" />
              <p className="text-white text-[0.67rem] font-light text-left">
                7480 Mockingbird Hill undefined
              </p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <img src={phoneImageWhite} className="w-4" />
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
