// import headerImage from '../images/headerImage.png';
import headerImage from '../assets/images/headerImage.png'
import headerImageMobile from '../assets/images/headerMobile.png'
import '../index.css';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Navbar';

function HeaderSection() {
    // const backgroundImageStyle = {
    //     backgroundImage: 'url(' + require('../assets/images/headerImage.png') + ')',
    //     backgroundSize: 'contain',
    //     backgroundPosition: 'top',
    //     backgroundRepeat: 'no-repeat',
    //     width: '100vw',
    //     height: '100vh'
        
    //   };
    const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
    return ( 
        // <div className="ssm:relative h-[80rem] w-screen ssm:w-full ssm:max-w-full ssm:h-0 ssm:pb-[55%] bg-custom-mobile ssm:bg-custom">
            
        // </div>
        <div className='relative'>
            <img src={isMobile ? headerImageMobile : headerImage} alt="headerImage" className="w-full h-full object-cover" />
            <Navbar />
        </div>
        
    );
}

export default HeaderSection;