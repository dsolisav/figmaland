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
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Marvin McKinney
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Marvin McKinney
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Jennie Cooper
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Julie Henry
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Johnny Murphy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
                        Gregory Mccoy
                    </a>
                    <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-center ssm:text-left hover:underline">
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
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Home
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Product
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Pricing
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    About
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Contact
                </a>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Tomothy
                </p>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Eleanor Edwards
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Ted Robertson
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Annette Russell
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Jennie McKinney
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Gloria Richards
                </a>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Jane Black
                </p>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Philip Jones
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Product
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Colleen Russell
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Marvin Hawkins
                </a>
                <a href="https://ingenieria.bogota.unal.edu.co/es/" target="_blank" className="text-white text-[0.67rem] font-light text-left hover:underline">
                    Bruce Simmons
                </a>
            </div>
        </div>
    );
}

export default FooterWords;