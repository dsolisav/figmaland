import figmalandLogo from '../assets/images/figmalandLogo.png'
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";
import navButton from '../assets/images/navButton.png'
import useWindowMediaQuery from '../utils/handleWindow';
import BurgerMenu from './BurguerMenu';

// Component for navbar 
function Navbar({click, setClick}) {
    // Using Media Query from utils to handle screen size change 
    const {isMobile} = useWindowMediaQuery();
    
    return (
        // Return a fragment to fit React syntax 
        <>
        {/* Content of the navbar is different depending on whether screen size is mobile or desktop  */}
        {isMobile ?
            <>
                {/* If screen is mobile, render this: Figmaland logo to the left and burguer button to the right, which gives access to burguer menu  */}
                <div className="absolute inset-x-0 top-0 flex flex-row justify-between py-4 px-4 items-center">
                    {/* Figmaland logo  */}
                    <div>
                        <img src={figmalandLogo} className='w-48' alt="appImage"/>
                    </div>
                    {
                        // Button that alters click state to make the burguer menu work and be rendered conditionally
                        !click && 
                        <div>
                            <button className='w-8' onClick={() => setClick(!click)}>
                                <img src={navButton} className='w-full' alt="appImage"/>
                            </button>
                        </div>
                    }
                </div>
                <div className='absolute inset-x-0 top-0'>
                {
                    // Burguer menu will be rendered when click state is true
                    click && <BurgerMenu click={click} setClick = {setClick} />
                }
                </div>
            </>
            :
                // If screen is desktop, render this: nav links and Figmaland logo to the left and social media link icons to the right 
                <div className="absolute inset-x-0 top-0 flex flex-row justify-center py-6 w-full sm:gap-16 md:gap-28 lg:gap-44">
                {/* Navigation links and Figmaland logo  */}
                <div className="text-white text-xs flex flex-row gap-8 items-center xl:text-base">
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline'>
                        Home
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline'>
                        Product
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline'>
                        Pricing
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline'>
                        About
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className='hover:underline'>
                        Contact
                    </a>
                    <div>
                        <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                            <img src={figmalandLogo} className='min-w-24 w-32 xl:w-36' alt="appImage"/>
                        </a>
                        
                    </div>
                </div>
                {/* Div for social media icons  */}
                <div className='flex items-center'>
                    <div className="flex flex-row gap-6 justify-center ssm:justify-start h-4 lg:h-5 xl:h-6">
                        <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                            <img src={twitterImageWhite} className="h-full" alt="appImage"/>
                        </a>
                        <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                            <img src={facebookImageWhite} className="h-full" alt="appImage"/>
                        </a>
                        <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank">
                            <img src={linkedinImageWhite} className="h-full" alt="appImage"/>
                        </a>
                    </div>
                </div>
                
            </div>
        }
            
        </>
        
    );
}

export default Navbar;