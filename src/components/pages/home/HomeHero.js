import React from 'react'

export default function HomeHero() {
	return (
		<section
			id='top'
			className="pt-44"
			style={{
				background: `url('assets/images/hero/hero-one/hero-bg-pm.png')
            no-repeat center center/cover`,
			}}
		>
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid lg:grid-cols-2 gap-10 place-items-center pb-20">
					<div className="lg:col-span-1 z-10">
						<h1 className="text-5xl leading-normal xl:text-[55px] xl:leading-snug mb-8  font-bold text-interface-100 text-pblue-500">
							Facilitating fast & safe currency flows
							{/* Hey, I am <br />
              Richard Lord <br /> */}
							<mark
								className="inline-block text-pblue-500"
								style={{
									background: `url('assets/images/hero/hero-one/wide-line.svg')
                      no-repeat left bottom`,
								}}
							>
								across borders
							</mark>
						</h1>
						<p className="text-xl lg:text-2xl text-interface-200 mb-4">
							Our mobile app is the ultimate tool for buying, selling, and
							managing your digital assets. With a user-friendly interface and
							advanced security measures, you can trust us to keep your
							transactions safe and efficient.
						</p>
						<div className="flex items-center gap-8 mt-10">
							<img src="/img/play_store.png" />
							{/* <a
								href="contact-us.html"
								className="bg-pblue-500 hover:bg-pblue-600 transition-all group text-white px-6 py-4 rounded-lg inline-flex justify-center items-center"
							>
								<span>Hire Me</span>
								<svg
									className="stroke-white transform translate transition-transform group-hover:translate-x-2"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</a> */}
							{/* <a
								href="https://www.youtube.com/watch?v=XNhiqQJ01hQ"
								className="flex video-popup items-center gap-5"
							>
								<span className="w-[60px] pulsing h-[60px] rounded-full grid place-items-center border border-[#B0CAF0]">
									<svg
										width="18"
										height="22"
										viewBox="0 0 18 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 18.4719V3.52806C0 1.14774 2.63921 -0.284513 4.63497 1.01273L16.1303 8.48467C17.9503 9.6677 17.9503 12.3323 16.1303 13.5153L4.63496 20.9873C2.63921 22.2845 0 20.8523 0 18.4719Z"
											fill="#2662FA"
										></path>
									</svg>
								</span>
								<span>
									<span className="text-interface-100 uppercase text-lg font-medium">
										WATCH
									</span>
									<br />
									<span className="text-base font-medium text-interface-200">
										Intro Video
									</span>
								</span>
							</a> */}
						</div>
					</div>

					<div className="lg:col-span-1 hidden lg:block">
						<img
							src={`/img/blue_box.png`}
							className="absolute -z-[0] top-[0px] right-[-260px] hidden xl:block"
						/>
						<div className="relative">
							<img src="/img/phone.png" className="w-[20rem] " alt="" />
							{/* <img src="/assets/images/hero/hero-one/model-pm.png" alt="" /> */}
							<div className="hidden md:block">
								{/* <img
                  src="/img/phone_bg.png"
                  className="absolute right-0 bottom-0 w-[600px]"
                  alt=""
                />
                <img
                  src="/assets/images/hero/hero-one/search.png"
                  className="absolute right-0 top-0 xl:-right-14 xl:top-24"
                  alt=""
                />
                <div className=" absolute bottom-40 left-20">
                  <img
                    src="/assets/images/hero/hero-one/circle-one.png"
                    alt=""
                  />
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				src="/assets/images/hero/hero-one/arrow-png.png"
				className="bottom-[30px] hidden xl:block -left-16 absolute"
				alt=""
			/>
		</section>
	)
}
