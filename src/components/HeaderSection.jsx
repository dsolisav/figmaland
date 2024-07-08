// import headerImage from '../images/headerImage.png';
import headerImage from '../assets/images/headerImage.png'
import headerImageMobile from '../assets/images/headerMobile.png'
import '../index.css';
import useWindowMediaQuery from '../utils/handleWindow';
import Navbar from './Navbar';
import { useState } from 'react';

function HeaderSection() {
    // Using Media Query from utils to handle screen size change 
    const {isMobile} = useWindowMediaQuery();
    // Defining state with useState to handle Burguer button events 
    const [clickBurguer, setClickBurguer] = useState(false);
    return (
        // Defining main Header container as relative because there are children whose positioning is absolute relative to its parent
        <div className='relative'>
            {/* Header image is different depending on whether screen is mobile or desktop, so this is handled with a ternary operator  */}
            <img src={isMobile ? headerImageMobile : headerImage} alt="headerImage" className="w-full h-full object-cover" />
            {/* Place navbar and pass click and setClick handlers as props to the component  */}
            <Navbar click={clickBurguer} setClick={setClickBurguer} />
            {
                // Content of the header and its style is different depending on whether the screen is mobile or desktop 
                isMobile ? 
                // If screen is mobile, render this:
                <div className='absolute top-36 xsm:top-52 text-white w-full flex justify-center flex-col gap-10 p-2'>
                    <p className='text-[2.6rem] leading-[3.5rem] xsm:text-5xl xsm:leading-[3.7rem]'>
                        The best<br/>
                        products start<br/>
                        with Figma
                    </p>
                    <p className='text-2xl leading-9'>
                        Most calendars are<br/>
                        designed for teams.
                    </p>
                    <div>
                        <button className="bg-[#2091F9] hover:bg-[#196ebe] rounded-3xl text-white text-lg font-light py-[0.5rem] px-14 mt-10" onClick={() => alert('Try for free')}>
                                Try for free
                        </button>
                    </div>
                </div>
                :
                // If screen is desktop, render this: 
                <div className='absolute top-6 ssm:top-[4.7rem] md:top-20 mg:top-28 lg:top-44 xl:top-48 2xl:top-[15.2rem] flex flex-col justify-center items-center text-white w-full gap-3'>
                    <p className='sm:text-4xl ssm:text-3xl md:text-6xl xl:text-7xl font-bold'>
                        The best products <br/>
                        start with Figma
                    </p>
                    <p className='sm:text-lg ssm:text-sm lg:text-xl xl:text-2xl font-normal'>
                        Most calendars are designed for teams, Slate is designed<br/>
                        for freelancers
                    </p>
                    <div>
                        <button className="bg-[#2091F9] hover:bg-[#196ebe] rounded-3xl text-white text-base md:text-lg xl:text-xl font-light sm:py-[0.45rem] ssm:py-[0.3rem] lg:py-[0.5rem] px-8 md:px-14 ssm:mt-0 lg:mt-10 xl:mt-12" onClick={() => alert('Try for free')}>
                                Try for free
                        </button>
                    </div>
                </div>
            }
        </div>
        
    );
}

export default HeaderSection;