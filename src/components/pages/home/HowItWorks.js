import React from 'react'

export default function HowItWorks() {
	return (
		<section className="py-20 lg:py-120 bg-pblue-500">
			<div className="max-w-xl w-full mx-auto mb-10 text-center">
				<h2 className="text-4xl xl:text-5xl xl:leading-snug font-bold text-white flex flex-col gap-4">
					<mark
						className="text-white"
						style={{
							background: `url('/assets/images/shape/line-lw.svg') no-repeat
                            bottom`,
						}}
					>
						How does it work?
					</mark>
					<p className="text-white text-xl font-normal mb-2">
						We provide large amounts of crypto currency to payment companies,
						assisting their capacity to deliver settlements to their customers
						and on time.
					</p>
				</h2>
			</div>
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
					<EachHow
						img={`/img/user.png`}
						heading={`Sign Up`}
						body={`Create an account and verify your identity`}
					/>
					<EachHow
						img={`/img/usd.png`}
						heading={`Fund Your Account`}
						body={`Deposit funds into your account to begin trading`}
					/>
					<EachHow
						img={`/img/chart.png`}
						heading={`Start Trading`}
						body={`Browse the available cryptocurrencies and place your trades in the app.`}
					/>
				</div>
			</div>
		</section>
	)
}

const EachHow = ({ heading, body, img }) => {
	return (
		<div className="group">
			<a
				href="#"
				className="h-full text-center group-hover:border-transparent transition-all space-x-3 p-10 rounded-xl border border-dashed border-[#3A3E4E] items-center justify-center flex flex-col gap-5"
			>
				<img src={img} alt="icon" width={100} />
				<div className='flex flex-col gap-2'>
					<h4 className="text-white text-[24px]">{heading}</h4>
					<p className="text-white transition-all text-[16px] font-normal">
						{body}
					</p>
				</div>
			</a>
		</div>
	)
}
