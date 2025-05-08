// app/product/[id]/page.jsx
'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Rate } from 'antd'
import Image from 'next/image'

const ProductDetail = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		// Bu yerda API chaqiruv yoki lokal data bilan mahsulotni olish
		const fetchData = async () => {
			const res = await fetch(`https://dummyjson.com/products/${id}`)
			const data = await res.json()
			setProduct(data)
		}
		fetchData()
	}, [id])

	if (!product) return <p className="text-center">Yuklanmoqda...</p>

	return (
		<div className='max-w-4xl mx-auto px-4 py-8'>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='flex-1'>
					<Image src={product.thumbnail} width={400} height={400} alt={product.title} className='rounded-md' />
				</div>
				<div className='flex-1'>
					<h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
					<Rate allowHalf disabled defaultValue={product.rating} />
					<p className='text-[#46A358] text-xl font-bold mt-4'>${product.price}</p>
					<p className='mt-6 text-gray-600'>{product.description}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
