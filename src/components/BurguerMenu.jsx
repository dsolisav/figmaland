import closeIcon from '../assets/images/closeIcon.png'
import IconRow from './IconRow';
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";

// Burger menu for mobile layout 
function BurgerMenu({click, setClick}) {
    return (
        // Main Menu container, with fixed position and touch scroll deactivated for design purposes
        <div className="fixed inset-0 flex justify-end items-end z-30 touch-none">
            {/* Colored menu background, with color gradient for a more appealing look */}
            <div className="h-full w-full bg-gradient-to-bl from-[#000000f5] to-[#303030f5]">

                {/* Close button for the menu  */}
                <button className='fixed top-0 right-0 flex justify-end' onClick={() => setClick(!click)}>
                    <img src={closeIcon} className='w-6 mx-4 my-8' />
                </button>

                {/* Main menu content, with anchor tags for every option. Href is set to the website of the UNAL Faculty of Engineering as placeholder. */}
                <div className="h-full flex justify-center flex-col gap-5 items-center text-white font-light mb-10">
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline' rel="noopener noreferrer">
                        Home
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline' rel="noopener noreferrer">
                        Product
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline' rel="noopener noreferrer">
                        Pricing
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline' rel="noopener noreferrer">
                        About
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline' rel="noopener noreferrer">
                        Contact
                    </a>
                    <div className='mt-9'>
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

export default BurgerMenu;