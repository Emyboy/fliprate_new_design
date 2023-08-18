import React from 'react'

export default function AboutUs() {
	return (
		<section
			id='about'
			className="py-120 lg:py-120 lg:pb-0- pb-120- bg-[#F7F7FD]"
			style={{
				background: `url('assets/images/about/about-pm-bg.png') no-repeat
            center center/cover`,
			}}
		>
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20">
					<div className="relative">
						<img src="/img/globe.png" className="w-full" alt="" />
						{/* <div className="inline-flex gap-x-3 bg-white rounded-xl px-4 py-2.5 absolute bottom-10 left-[50%] transform translate-x-[-50%]">
							<a
								href="http://"
								className="bg-pblue-500 bg-opacity-10 hover:bg-pblue-500 text-pblue-500 hover:text-white transition-all rounded-full text-lg w-10 h-10 rounded-ful inline-flex justify-center items-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a
								href="http://"
								className="bg-pblue-500 bg-opacity-10 hover:bg-pblue-500 text-pblue-500 hover:text-white transition-all rounded-full text-lg w-10 h-10 rounded-ful inline-flex justify-center items-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-dribbble"></i>
							</a>
							<a
								href="http://"
								className="bg-pblue-500 bg-opacity-10 hover:bg-pblue-500 text-pblue-500 hover:text-white transition-all rounded-full text-lg w-10 h-10 rounded-ful inline-flex justify-center items-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-skype"></i>
							</a>
							<a
								href="http://"
								className="bg-pblue-500 bg-opacity-10 hover:bg-pblue-500 text-pblue-500 hover:text-white transition-all rounded-full text-lg w-10 h-10 rounded-ful inline-flex justify-center items-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
						</div> */}
						{/* <div className="">
							<img
								src="assets/images/about/pm-shape-1.png"
								className="absolute left-0 xl:-left-44 bottom-20 hidden xl:block"
								alt=""
							/>
							<img
								src="assets/images/about/pm-shape-2.png"
								className="absolute right-0 bottom-96"
								alt=""
							/>
						</div> */}
					</div>

					<div>
						<h2 className="text-interface-500 font-bold text-4xl leading-normal xl:text-4xl capitalize xl:leading-snug mb-4 text-pblue-500">
							Bulk crypto & fiat trading, and custodial wallet{' '}
							<span className="relative">
								<span className="relative z-20">for Africa</span>
								<svg
									className="absolute -left-1 z-0 -top-2"
									width="211"
									height="69"
									viewBox="0 0 211 69"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M30.8353 5.20707C71.3242 4.06296 158.3 8.31774 193.87 22.426C232.179 37.6211 183.09 57.6423 130.454 63.5062C75.9959 69.573 16.3894 60.6604 5.75954 45.3131C-12.1857 19.4037 66.1136 2.68084 126.531 3.86657"
										stroke="#DAED1A"
										stroke-width="6"
										stroke-linecap="round"
									></path>
								</svg>
							</span>
						</h2>
						<p className="text-lg text-interface-200 mb-4">
							Fliprate is a full-stack crypto services platform that works
							worldwide with crypto-native businesses and institutional clients
							on trading, and custody solutions.
						</p>
						<div className="mt-8 mb-10 space-y-6">
							<div className="relative">
								<div className="flex justify-between">
									<a
										href="#"
										class="inline-flex justify-center gap-1 items-center px-6 py-4 rounded-lg bg-pblue-500 hover:bg-pblue-600 text-white transition-all"
									>
										<span>Get it now</span>
										<svg
											class="stroke-white"
											width="24"
											height="25"
											viewBox="0 0 24 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						{/* <div>
							<img src="assets/images/about/pm-signature.png" alt="" />
							<span className="text-xl text-interface-100 font-medium">
								CEO &amp; Founder of QuomodoSoft
							</span>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	)
}
