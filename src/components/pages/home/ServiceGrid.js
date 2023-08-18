import React from 'react'

export default function ServiceGrid() {
	return (
		<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="flex">
				<div></div>
				<div></div>
			</div>
			<div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-7">
				<Each
					heading={'Wide Range of Cryptocurrencies'}
					body={`From the established giants like Bitcoin and Ethereum to the emerging altcoins, our platform offers a comprehensive selection of cryptocurrencies for users to trade, invest, and track`}
					img={`/img/left_phone.png`}
				/>
				<Each2
					heading={'Real-Time Market Data'}
					body={`Our platform provides real-time market data, ensuring that users have access to the most up-to-date and accurate information for informed decision-making`}
					img={'/img/bottom_phone.png'}
				/>
				<Each2
					heading={'Advanced Security Measures'}
					body={`With state-of-the-art encryption protocols, multi-factor authentication, and secure storage systems, we ensure that your sensitive data and funds remain protected from unauthorized access`}
					img={'/img/bottom_phone.png'}
				/>
			</div>
		</div>
	)
}

const Each = ({ heading, body, img }) => {
	return (
		<div
			className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden lg:row-span-2 bg-pblue-500 p-10 flex flex-col gap-5"
			// style={{
			// 	background: `url('/assets/images/portfolio/ms-1.jpg') no-repeat
			//       center center/cover`,
			// }}
		>
			<h4 className="text-[24px] font-semibold text-white">{heading}</h4>
			<p className="text-white">{body}</p>
			<img
				src={img}
				alt="phone"
				className="absolute bottom-0 right-0 hidden lg:block"
			/>
		</div>
	)
}

const Each2 = ({ heading, body, img }) => {
	return (
		<div
			className="relative group min-h-[370px] rounded-lg cursor-pointer overflow-hidden lg:col-span-2 bg-pblue-500 p-5 lg:p-20 lg:pb-0"
			// style={{
			// 	background: `url('/assets/images/portfolio/ms-2.jpg') no-repeat
			//   center center/cover`,
			// }}
		>
			<div className="flex flex-col gap-5 xl:gap-10 lg:flex-row justify-between">
				<div className="xl:w-5/12 flex flex-col gap-5">
					<h2 className="text-4xl leading-normal xl:text-[24px] xl:leading-tight font-bold text-white">
						{heading}
					</h2>
					<p className="text-xl xl:text-[16px] text-white mb-8">{body}</p>
				</div>
				<div className="xl:w-5/12 hidden lg:block">
					<div className="max-w-lg">
						<img src={img} alt="phone" className="bottom-0 absolute" />
					</div>
				</div>
			</div>
		</div>
	)
}
