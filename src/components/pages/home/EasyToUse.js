import React from 'react'

export default function EasyToUse() {
	return (
		<section className="pb-20 lg:pb-120" id='how'>
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24">
					<div className="lg:w-1/2">
						<h2 className="text-interface-100 font-bold text-4xl xl:text-[48px] text-pblue-500 xl:leading-snug mb-4">
							Easy-to-use crypto payment processing for any business
						</h2>
						<div>
							{/* <span className="uppercase text-2xl text-pblue-500 font-medium block mb-3">
								ABOUT ME
							</span> */}
							{/* <h2 className="text-interface-100 font-medium text-4xl xl:text-[28px] xl:leading-snug mb-4">
								Stack crypto rewards fast from everyday spending
							</h2> */}
							<p className="text-lg text-interface-200 mb-8">
								Fliprate uses peer-to-peer technology to operate with no central
								authority or banks; managing transactions and the issuing of
								bitcoins is carried out collectively by the network.
							</p>
						</div>

						<div className="mb-10 space-y-4">
							{/* <div className="relative">
								<span className="text-lg font-medium text-interface-100 block mb-3">
									Figma
								</span>
								<div className="bg-interface-100 bg-opacity-20 w-full h-2 rounded flex items-center">
									<div
										className="bg-pblue-500 h-2 rounded"
										style={{ width: '95%' }}
									></div>
									<span className="py-2 px-5 text-lg font-medium absolute right-3 rounded-custom bg-white border-2 border-pblue-500">
										95%
									</span>
								</div>
							</div>
							<div className="relative">
								<span className="text-lg font-medium text-interface-100 block mb-3">
									Microsoft Office
								</span>
								<div className="bg-interface-100 bg-opacity-20 w-full h-2 rounded flex items-center">
									<div
										className="bg-pblue-500 h-2 rounded"
										style={{ width: '85%' }}
									></div>
									<span className="py-2 px-5 font-medium text-lg rounded-custom bg-white border-2 border-pblue-500 absolute right-7">
										85%
									</span>
								</div>
							</div>
							<div className="relative">
								<span className="text-lg font-medium text-interface-100 block mb-3">
									Adobe Photoshop
								</span>
								<div className="bg-interface-100 bg-opacity-20 w-full h-2 flex items-center rounded">
									<div
										className="bg-pblue-500 h-2 rounded"
										style={{ width: '90%' }}
									></div>
									<span className="py-2 px-5 absolute text-lg font-medium right-5 rounded-custom bg-white border-2 border-pblue-500">
										90%
									</span>
								</div>
							</div> */}
						</div>
						<a
							href="about-designer.html"
							className="py-4 px-7 items-center bg-pblue-500 rounded-md font-medium text-white inline-flex hover:bg-pblue-600 transition-all"
						>
							JOIN FLIPRATE
						</a>
					</div>

					<div className="lg:w-1/2">
						{/* <h2 className="text-interface-100 font-bold text-4xl xl:text-[48px] text-pblue-500 xl:leading-snug mb-4">
							Find Perfect Designer Based on Project
						</h2> */}
						<div className="relative">
							<img src="/img/phone_3d.png" className="relative z-20" alt="" />
							{/* <ul className="hidden lg:block">
								<li className="absolute bottom-20 -left-20 z-30">
									<img src="/assets/images/about/abc-1.png" alt="" />
								</li>
								<li className="absolute top-8 -right-20 z-30">
									<img src="/assets/images/about/abc-2.png" alt="" />
								</li>
								<li className="absolute bottom-0 -right-20 z-30">
									<img src="/assets/images/about/abc-3.png" alt="" />
								</li>
								<li className="absolute -right-16 bottom-24">
									<img src="/assets/images/about/abc-4.png" alt="" />
								</li>
								<li className="absolute -left-8 -bottom-10">
									<img src="/assets/images/about/abc-5.png" alt="" />
								</li>
							</ul> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
