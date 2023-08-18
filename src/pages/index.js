import MainLayout from '@/components/layouts/MainLayout'
import AboutUs from '@/components/pages/home/AboutUs'
import EasilyCrypto from '@/components/pages/home/EasilyCrypto'
import EasyToUse from '@/components/pages/home/EasyToUse'
import HomeHero from '@/components/pages/home/HomeHero'
import HowItWorks from '@/components/pages/home/HowItWorks'
import RecentBlogs from '@/components/pages/home/RecentBlogs'
import ServiceGrid from '@/components/pages/home/ServiceGrid'
import VirtualPayment from '@/components/pages/home/VirtualPayment'
import React from 'react'

export default function index() {
	return (
		<>
			<MainLayout>
				<HomeHero />
				<AboutUs />
				<section className="py-20 lg:py-120">
					<EasilyCrypto />
					<ServiceGrid />
				</section>
				<br />
				<VirtualPayment />
				<EasyToUse />
				<HowItWorks />
				{/* <RecentBlogs /> */}
			</MainLayout>
		</>
	)
}
