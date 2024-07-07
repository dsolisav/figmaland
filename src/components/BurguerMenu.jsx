import closeIcon from '../assets/images/closeIcon.png'
import IconRow from './IconRow';
import twitterImageWhite from "../assets/images/twitterImageWhite.png";
import facebookImageWhite from "../assets/images/facebookImageWhite.png";
import linkedinImageWhite from "../assets/images/linkedinImageWhite.png";
import React, { useEffect, useRef } from 'react';
import { setFullHeight } from '../utils/handleViewportHeight';

function BurgerMenu({click, setClick}) {
    const menuRef = useRef(null);

    useEffect(() => {
        const cleanUp = setFullHeight(menuRef.current);
        return cleanUp;
    }, []);

    return (
        <div className="fixed inset-0 flex justify-end items-end z-30 touch-none">
            <div className="h-full w-full bg-gradient-to-bl from-[#000000f5] to-[#303030f5]">
                <button className='fixed top-0 right-0 flex justify-end' onClick={() => setClick(!click)}>
                    <img src={closeIcon} className='w-6 mx-4 my-8' />
                </button>
                <div className="h-full flex justify-center flex-col gap-5 items-center text-white font-light mb-10">
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