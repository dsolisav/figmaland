import useWindowMediaQuery from "../utils/handleWindow";

// Component for footer information block 
function FooterWords() {
    // Using Media Query from utils to handle screen size change 
    const {isMobile} = useWindowMediaQuery();
    return (
        // Conditioning content of the information container. Content is different in mobile dimensions than desktop dimensions. Hrefs are set to the website of the UNAL Faculty of Engineering as placeholder.

        isMobile ?
            // If screen is mobile, render this:
            <div className="flex flex-col ssm:flex-row gap-14 ssm:gap-20">
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Marvin McKinney
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Marvin McKinney
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline" rel="noopener noreferrer">
                        Marvin McKinney
                    </a>
                </div>
            </div>
        :
        // if screen is desktop, render this: 
        <div className="flex flex-col ssm:flex-row gap-14 ssm:gap-20">
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Pages
                </p>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Home
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Product
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Pricing
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    About
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Contact
                </a>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Tomothy
                </p>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Eleanor Edwards
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Ted Robertson
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Annette Russell
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Jennie McKinney
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Gloria Richards
                </a>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Jane Black
                </p>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Philip Jones
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Product
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Colleen Russell
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Marvin Hawkins
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline" rel="noopener noreferrer">
                    Bruce Simmons
                </a>
            </div>
        </div>
    );
}

export default FooterWords;