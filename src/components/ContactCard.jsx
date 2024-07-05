function ContactCard() {
    return ( 
        <div className="py-3 w-[90%] ssm:w-[23rem]">
            <div className="border-[1.5px] border-[#e0dcdc] rounded-xl px-6 py-10 flex flex-col justify-center gap-8">
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
                    <textarea id="message" rows="4" class="w-[85%] bg-[#F5F5F5] focus:outline-none border-[1px] border-[#E8E8E8] p-4 text-xs placeholder-[#18171D] h-40" placeholder="Your message"></textarea>
                </div>
            </div> 
        </div>
        
    );
}

export default ContactCard;