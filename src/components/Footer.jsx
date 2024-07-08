import FooterWords from "./FooterWords";
import IconRow from "./IconRow";
import locationImageWhite from "../assets/images/locationImageWhite.png";
import phoneImageWhite from "../assets/images/phoneImageWhite.png";
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";

// Footer for the page
function Footer() {
  return (
    // Main container for the footer
    <div className="flex flex-row h-[20%] bg-[#252B42] py-20 px-16 justify-center gap-20 ssm:gap-40 flex-wrap">
      {/* Footer information encapsulated in a separate component  */}
      <FooterWords />
      {/* Container for location, phone and social media block  */}
      <div className="flex flex-col gap-5 justify-start items-start">
        <div className="flex flex-row gap-2 justify-center items-center">
          <img src={locationImageWhite} className="w-6" alt="appImage" />
          <a
            href="https://maps.app.goo.gl/t9bXgzsbfE3XXghTA"
            target="_blank"
            className="text-white text-[0.67rem] font-light text-left hover:underline"
          >
            7480 Mockingbird Hill undefined
          </a>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <img src={phoneImageWhite} className="w-4" alt="appImage" />
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
  );
}

export default Footer;
