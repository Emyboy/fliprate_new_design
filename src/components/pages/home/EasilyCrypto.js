import React from 'react'

export default function EasilyCrypto() {
  return (
		<>
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-5 xl:gap-10 lg:gap-16 xl:place-items-center mb-14">
					<div className="xl:col-span-2">
						<h2 className="text-interface-100 font-bold text-4xl leading-normal xl:text-5xl capitalize xl:leading-snug text-pblue-500">
							Easily manage wide range of{' '}
							<span className="relative">
								<span className="relative z-20">cryptos</span>
								<svg
									className="absolute -left-6 md:-left-1 z-0 -top-2"
									width="206"
									height="75"
									viewBox="0 0 206 75"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.1282 14.4113C66.5337 9.03391 151.827 4.45371 187.897 15.4254C226.745 27.2424 180.759 53.1141 129.951 64.6499C77.3856 76.585 18.356 73.496 6.50757 58.6571C-13.495 33.6061 61.3156 8.13765 120.395 3.11796"
										stroke="#DAED1A"
										stroke-width="6"
										stroke-linecap="round"
									></path>
								</svg>
							</span>
						</h2>
					</div>
					<div className="xl:col-span-3">
						<p className="text-interface-200 text-xl">
							Our platform offers a wide range of popular cryptocurrencies,
							including Bitcoin, Ethereum, and Litecoin, as well as a variety of
							other altcoins. Our real-time market data and analysis tools help
							you stay informed and make informed trading decisions.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
