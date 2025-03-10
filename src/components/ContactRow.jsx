import locationImage from '../assets/images/locationImage.png'
import phoneImage from '../assets/images/phoneImage.png'
import mailImage from '../assets/images/mailImage.png'

// Component for contact info row 
function ContactRow() {
    return (
        // Main container. Will change to a column if dimensions are mobile to fit Figma design. Overall layout is going to change slightly when dimensions switch from desktop to mobile and viceversa, to fit Figma layout.
        <div className="flex flex-col ssm:flex-row gap-9 justify-start ssm:justify-center flex-wrap items-start ssm:items-center">

            {/* Block of location image and information  */}
            <div className="flex flex-row ssm:flex-col gap-5 ssm:gap-2 justify-center text-left ssm:text-center items-center">
                <div className="flex justify-center">
                    <img src={locationImage} className='min-w-6 w-6' alt="appImage"/>
                </div>
                <p className='text-[#374754] text-sm ssm:text-xs font-light'>
                    683 Spring St undefined Anchorage,<br />
                    Georgia 12473 United States
                </p>
            </div>

            {/* Block of phone image and information  */}
            <div className="flex flex-row ssm:flex-col gap-5 ssm:gap-2 justify-center text-left ssm:text-center items-center">
                <div className="flex justify-center">
                    <img src={phoneImage} className='w-5' alt="appImage"/>
                </div>
                <p className='text-[#374754] text-sm ssm:text-xs font-light'>
                    (843) 555-0130
                </p>
            </div>

            {/* Block of mail image and information  */}
            <div className="flex flex-row ssm:flex-col gap-5 ssm:gap-2 justify-center text-left ssm:text-center items-center">
                <div className="flex justify-center">
                    <img src={mailImage} className='w-5' alt="appImage"/>
                </div>
                <p className='text-[#374754] text-sm ssm:text-xs font-light'>
                    willie.jennings@example.com
                </p>
            </div>
            


        </div>
    );
}

export default ContactRow;