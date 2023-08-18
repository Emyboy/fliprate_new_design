import React from 'react'

export default function VirtualPayment() {
	return (
		<section className="pb-20 lg:pb-120">
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 xl:gap-24">
					<div className="lg:w-1/2">
						<h2 className="text-interface-100 font-bold text-4xl xl:text-[48px] text-pblue-500 xl:leading-snug mb-4">
							Find Perfect Designer Based on Project
						</h2>
						<div className="relative">
							<img
								src="/img/virtual_payment.png"
								className="relative z-20"
								alt=""
							/>
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

					<div className="lg:w-1/2">
						<div>
							{/* <span className="uppercase text-2xl text-pblue-500 font-medium block mb-3">
								ABOUT ME
							</span> */}
							<h2 className="text-interface-100 font-medium text-4xl xl:text-[28px] xl:leading-snug mb-4">
								Stack crypto rewards fast from everyday spending
							</h2>
							<p className="text-lg text-interface-200 mb-8">
								Energistically iterate effective data whereas is to highly
								efficient e-business. Conveniently and productivate leang edge
								models visa visaa wireless ideas.
							</p>
						</div>

						<div className="mb-10 space-y-8">
							<EachSlid
								heading={'Spend cash or crypto³'}
								body={`Use your card anywhere Visa® debit cards are accepted,
at 40M+ merchants worldwide.`}
							/>
							<EachSlid
								heading={`No hidden fees`}
								body={`Enjoy zero spending⁴ fees and no annual fees⁵.`}
							/>
							<EachSlid
								heading={`Earn crypto without buying crypto`}
								body={`Get unlimited⁶ crypto rewards on every purchase.`}
							/>
							<EachSlid
								heading={`Pay with peace of mind`}
								body={`Industry-leading security features include: 2 factor
authentication, card freezing, pin change, and more.`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

const EachSlid = ({ heading, body }) => {
	return (
		<div className="relative flex flex-col">
			<span className="text-lg font-semibold text-interface-100 block text-pblue-500">
				{heading}
			</span>
			<div className=" w-full rounded flex items-center">
				<span className="text-lg font-normal ">{body}</span>
			</div>
		</div>
	)
}
