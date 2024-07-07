import figmalandLogo from '../assets/images/figmalandLogo.png'
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";
import navButton from '../assets/images/navButton.png'
import { useMediaQuery } from "react-responsive";

function Navbar() {
    const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
    return (
        <>
        {isMobile ? 
            <div className="absolute inset-x-0 top-0 flex flex-row justify-between py-4 px-4 items-center">
                <div>
                    <img src={figmalandLogo} className='w-48' alt="appImage"/>
                </div>
                <div>
                    <img src={navButton} className='w-8' alt="appImage"/>
                </div>
            </div>
            :
                <div className="absolute inset-x-0 top-0 flex flex-row justify-center py-6 w-full sm:gap-16 md:gap-28 lg:gap-44">
                <div className="text-white text-xs flex flex-row gap-8 items-center">
                    <p>
                        Home
                    </p>
                    <p>
                        Product
                    </p>
                    <p>
                        Pricing
                    </p>
                    <p>
                        About
                    </p>
                    <p>
                        Contact
                    </p>
                    <div>
                        <img src={figmalandLogo} className='min-w-24 w-32' alt="appImage"/>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className="flex flex-row gap-6 justify-center ssm:justify-start h-4 lg:h-5">
                        <img src={twitterImageWhite} className="h-full" alt="appImage"/>
                        <img src={facebookImageWhite} className="h-full" alt="appImage"/>
                        <img src={linkedinImageWhite} className="h-full" alt="appImage"/>
                    </div>
                </div>
                
            </div>
        }
            
        </>
        
    );
}

export default Navbar;