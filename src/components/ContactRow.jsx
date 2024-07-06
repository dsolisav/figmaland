import locationImage from '../assets/images/locationImage.png'
import phoneImage from '../assets/images/phoneImage.png'
import mailImage from '../assets/images/mailImage.png'

function ContactRow() {
    return (
        <div className="flex flex-row gap-9 justify-start ssm:justify-center flex-wrap">

            
            <div className="flex flex-row ssm:flex-col gap-2 justify-center text-left ssm:text-center">
                <div className="flex justify-center">
                    <img src={locationImage} className='min-w-5 w-5' />
                </div>
                <p className='text-[#374754] text-xs font-light'>
                    683 Spring St undefined Anchorage,<br />
                    Georgia 12473 United States
                </p>
            </div>
            <div className="flex flex-row ssm:flex-col gap-2 justify-center text-left ssm:text-center">
                <div className="flex justify-center">
                    <img src={phoneImage} className='w-5' />
                </div>
                <p className='text-[#374754] text-xs font-light'>
                    (843) 555-0130
                </p>
            </div>
            <div className="flex flex-row ssm:flex-col gap-2 justify-center text-left ssm:text-center">
                <div className="flex justify-center">
                    <img src={mailImage} className='w-5' />
                </div>
                <p className='text-[#374754] text-xs font-light'>
                    willie.jennings@example.com
                </p>
            </div>
            


        </div>
    );
}

export default ContactRow;