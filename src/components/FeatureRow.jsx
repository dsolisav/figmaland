import iconOpenType from '../assets/images/iconOpentype.png'
import iconDesign from '../assets/images/iconDesign.png'
import iconFastest from '../assets/images/iconFastest.png'

function FeatureRow() {
    return (
        <div className="my-20 flex flex-col ssm:flex-row justify-center gap-16 flex-wrap">
            <div className="flex flex-col gap-3">
                <div className='flex justify-center'>
                    <img src = {iconOpenType} className='w-8' />
                </div>
                <p className='font-bold leading-[1.35rem] text-[#252B42]'>
                    OpenType features<br/>
                    variable fonts
                </p>
                <p className='text-[#374754] font-light leading-[1.35rem] text-base'>
                    Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>finantial goal
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <div className='flex justify-center'>
                    <img src = {iconDesign} className='w-8' />
                </div>
                <p className='font-bold leading-[1.35rem] text-[#252B42]'>
                    Design with real data
                </p>
                <p className='text-[#374754] font-light leading-[1.35rem] text-base'>
                    Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>finantial goal
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <div className='flex justify-center'>
                    <img src = {iconFastest} className='w-8' />
                </div>
                <p className='font-bold leading-[1.35rem] text-[#252B42]'>
                    Fastest way to<br/>
                    take action
                </p>
                <p className='text-[#374754] font-light leading-[1.35rem] text-base'>
                    Slate helps you see how<br/>many more days you need<br/>to work to reach your<br/>finantial goal
                </p>
            </div>
            
        </div>
    );
}

export default FeatureRow;