import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
const Contacts = () => {
	return (
		<div className='bg-[#46A3581A] min-h-[88px] items-center justify-between px-[23px] flex flex-col md:flex-row gap-y-[16px] pt-[32px] pb-[48px] gap-x-[60px]'>
			<div className="logo">
				<img src="/logo.png" alt="" />
			</div>
			<p className='flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16px] leading-[22px]'><LocationOnOutlinedIcon className='text-[#46A358]'/>70 West Buckingham Ave. 
			Farmingdale, NY 11735</p>
			<p className='flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16x] leading-[22px]'><EmailTwoToneIcon className='text-[#46A358]'/>contact@greenshop.com</p>
			<p className='flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16px] leading-[22px]'><LocalPhoneOutlinedIcon className='text-[#46A358]'/> +88 01911 717 490</p>
			

		</div>
	)
}

export default Contacts