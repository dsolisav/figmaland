// import logo from './logo.svg';
import "./App.css";
import FeatureRow from "./components/FeatureRow";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import videoImage from '../src/assets/images/videoImage.png'
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="App">
      <div id="app-container" >
        <HeaderSection />
        <div className="mt-20">
          <p className="text-3xl font-normal text-[#252B42] mb-5">
            Features
          </p>
          <p className="text-lg font-normal text-[#374754] mb-2 leading-6">
            Most calendars are designed for teams. <br></br>
            Slate is designed for freelancers
          </p>
        </div>
        <FeatureRow />
        <div id="videoImage" className="flex justify-center">
          <div className="flex justify-center w-[80%]">
            <img src={videoImage} />
          </div>
        </div>
        <div id="contactUs" className="flex justify-center flex-col gap-5 mt-28 mb-12">
          <p className="font-normal text-[#252B42] text-4xl">
            Contact Us
          </p>
          <p className="text-[#374754] text-xl">
            Most calendars are designed for teams. <br />
            Slate is designed for freelancers
          </p>
        </div>
        <div className="flex justify-center">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default App;
