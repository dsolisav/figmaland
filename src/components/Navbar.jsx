import figmalandLogo from '../assets/images/figmalandLogo.png'
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";
import navButton from '../assets/images/navButton.png'
import useWindowMediaQuery from '../hooks/handleWindow';
import BurgerMenu from './BurguerMenu';


function Navbar({click, setClick}) {
    const {isMobile} = useWindowMediaQuery();
    
    return (
        <>
        {isMobile ?
            <>
                <div className="absolute inset-x-0 top-0 flex flex-row justify-between py-4 px-4 items-center">
                    <div>
                        <img src={figmalandLogo} className='w-48' alt="appImage"/>
                    </div>
                    {
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
                    click && <BurgerMenu click={click} setClick = {setClick} />
                }
                </div>
            </>
            
            
            
            :
                <div className="absolute inset-x-0 top-0 flex flex-row justify-center py-6 w-full sm:gap-16 md:gap-28 lg:gap-44">
                <div className="text-white text-xs flex flex-row gap-8 items-center">
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
                            <img src={figmalandLogo} className='min-w-24 w-32' alt="appImage"/>
                        </a>
                        
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className="flex flex-row gap-6 justify-center ssm:justify-start h-4 lg:h-5">
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