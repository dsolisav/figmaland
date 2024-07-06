import figmalandLogo from '../assets/images/figmalandLogo.png'
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";
import IconRow from './IconRow';

function Navbar() {
    return (  
        <div className="absolute top-0 left-0 flex flex-row justify-center py-6 w-full gap-44">
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
                    <img src={figmalandLogo} className='min-w-4 w-32' />
                </div>
            </div>
            <div className='flex items-center'>
                <IconRow
                    firstImg={twitterImageWhite}
                    secondImg={facebookImageWhite}
                    thirdImg={linkedinImageWhite}
                />
            </div>
        </div>
    );
}

export default Navbar;