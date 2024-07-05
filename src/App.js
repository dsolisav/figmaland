// import logo from './logo.svg';
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";

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
      </div>
    </div>
  );
}

export default App;
