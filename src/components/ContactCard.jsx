function ContactCard() {
    return ( 
        <div className="py-3 w-[90%] ssm:w-[23rem]">
            <div className="border-[1.4px] border-[#ebe6e6] rounded-xl px-6 py-10 flex flex-col justify-center gap-8 shadow-[9px_18px_17px_-6px_rgba(0,0,0,0.04)]">
                <p className="font-bold text-[#252B42]">
                    Contact Us
                </p>
                <div>
                    <input className="w-[85%] h-10 bg-[#F5F5F5] focus:outline-none border-[1px] border-[#E8E8E8] rounded-3xl py-2 px-4 text-xs placeholder-[#18171D]" placeholder="Your Name" />
                </div>
                <div>
                    <input className="w-[85%] h-10 bg-[#F5F5F5] focus:outline-none border-[1px] border-[#E8E8E8] rounded-3xl py-2 px-4 text-xs placeholder-[#18171D]" placeholder="Your Email" />
                </div>
                <div>
                    <textarea id="message" rows="4" className="w-[85%] bg-[#F5F5F5] focus:outline-none border-[1px] border-[#E8E8E8] p-4 text-xs placeholder-[#18171D] h-40" placeholder="Your message"></textarea>
                </div>
                <div className="flex justify-start px-5">
                    <button className="bg-[#2091F9] hover:bg-[#196ebe] rounded-3xl text-white text-sm font-light py-[0.6rem] px-9" onClick={() => alert('Send')}>
                        Send
                    </button>
                </div>
            </div> 
        </div>
        
    );
}

export default ContactCard;