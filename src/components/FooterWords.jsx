import { useMediaQuery } from 'react-responsive';

function FooterWords() {
    const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
    return (
        isMobile ?
            <div className="flex flex-col ssm:flex-row gap-14 ssm:gap-20">
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Jennie Cooper
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Julie Henry
                    </p>
                    <p className="text-white text-xs font-light text-center ssm:text-left">
                        Johnny Murphy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Gregory Mccoy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Marvin McKinney
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Jennie Cooper
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Julie Henry
                    </p>
                    <p className="text-white text-xs font-light text-center ssm:text-left">
                        Johnny Murphy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Gregory Mccoy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Marvin McKinney
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                    <p className="text-white text-sm font-semibold text-center ssm:text-left">
                        Annette Stewart
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Jennie Cooper
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Julie Henry
                    </p>
                    <p className="text-white text-xs font-light text-center ssm:text-left">
                        Johnny Murphy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Gregory Mccoy
                    </p>
                    <p className="text-white text-[0.67rem] font-light text-center ssm:text-left">
                        Marvin McKinney
                    </p>
                </div>
            </div>
        :
        <div className="flex flex-col ssm:flex-row gap-14 ssm:gap-20">
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Pages
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Home
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Product
                </p>
                <p className="text-white text-xs font-light text-left">
                    Pricing
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    About
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Contact
                </p>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Tomothy
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Eleanor Edwards
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Ted Robertson
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Annette Russell
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Jennie McKinney
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Gloria Richards
                </p>
            </div>
            <div className="flex flex-col gap-4 justify-between">
                <p className="text-white text-sm font-semibold text-left">
                    Jane Black
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Philip Jones
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Product
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Colleen Russell
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Marvin Hawkins
                </p>
                <p className="text-white text-[0.67rem] font-light text-left">
                    Bruce Simmons
                </p>
            </div>
        </div>
    );
}

export default FooterWords;