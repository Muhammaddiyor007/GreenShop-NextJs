import React from 'react'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Social = () => {
	return (
		<div className="">
			<div className="flex flex-col gap-[33px]">
				<div className="">
					<h2 className="text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]">
						Social Media
					</h2>
					<div className="text-[#46a35999] flex gap-[10px]">
						<FacebookIcon/>
						<InstagramIcon/>
						<TwitterIcon/>
						<LinkedInIcon/>
						<YouTubeIcon/>
					</div>
				</div>

				<div className="">
					<h2 className="text-[#3D3D3D] font-bold text-[18px] leading-[18px] mb-[8px]">
						We accept
					</h2>
					<div className="text-[#46a35999] flex gap-[10px]">
						<Image src="/PayPal.png" alt="Paypal" width={40} height={26} />
						<Image src="/Mastercard.png" alt="Mastercard" width={40} height={26} />
						<Image src="/Visa.jpg" alt="Visa" width={40} height={26} />
						<Image src="/Americanexpres.png" alt="Amex" width={40} height={26} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Social;
