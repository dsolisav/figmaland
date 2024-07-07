// import headerImage from '../images/headerImage.png';
import headerImage from '../assets/images/headerImage.png'
import headerImageMobile from '../assets/images/headerMobile.png'
import '../index.css';
import useWindowMediaQuery from '../utils/handleWindow';
import Navbar from './Navbar';
import { useState } from 'react';

function HeaderSection() {
    const {isMobile} = useWindowMediaQuery();
    const [clickBurguer, setClickBurguer] = useState(false);
    return ( 
        <div className='relative'>
            <img src={isMobile ? headerImageMobile : headerImage} alt="headerImage" className="w-full h-full object-cover" />
            <Navbar click={clickBurguer} setClick={setClickBurguer} />
            {
                isMobile ? 
                <div className='absolute top-52 text-white w-full flex justify-center flex-col gap-10 p-2'>
                    <p className='text-5xl leading-[3.7rem]'>
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
                <div className='absolute top-6 ssm:top-[4.7rem] md:top-20 mg:top-28 lg:top-44 flex flex-col justify-center items-center text-white w-full gap-3'>
                    <p className='sm:text-4xl ssm:text-3xl md:text-6xl font-bold'>
                        The best products <br/>
                        start with Figma
                    </p>
                    <p className='sm:text-lg ssm:text-sm lg:text-xl font-normal'>
                        Most calendars are designed for teams, Slate is designed<br/>
                        for freelancers
                    </p>
                    <div>
                        <button className="bg-[#2091F9] hover:bg-[#196ebe] rounded-3xl text-white text-base md:text-lg font-light sm:py-[0.45rem] ssm:py-[0.3rem] lg:py-[0.5rem] px-8 md:px-14 ssm:mt-0 lg:mt-10" onClick={() => alert('Try for free')}>
                                Try for free
                        </button>
                    </div>
                </div>
            }
        </div>
        
    );
}

export default HeaderSection;