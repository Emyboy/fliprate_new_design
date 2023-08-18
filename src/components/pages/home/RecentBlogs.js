import React from 'react'

export default function RecentBlogs() {
	return (
		<section className="py-120">
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-lg mx-auto text-center mb-10">
					<p className="text-[#FD8D1E] text-[16px]">Stay up to date with our</p>
					<h2 className="text-interface-100 font-bold text-5xl capitalize leading-snug">
						<span className="relative">
							<span className="relative z-20 text-pblue-500">Use Cases</span>
							<svg
								className="absolute -left-1 z-0 top-2"
								width="154"
								height="48"
								viewBox="0 0 154 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M23.1499 3.58264C52.2682 3.06408 114.859 6.41368 140.53 16.0079C168.178 26.3413 132.986 39.3609 95.1579 42.9452C56.0206 46.6537 13.0901 40.3705 5.35185 30.1016C-7.71187 12.7655 48.5117 2.11385 91.9796 3.26377"
									stroke="#DAED1A"
									stroke-width="6"
									stroke-linecap="round"
								></path>
							</svg>
						</span>
					</h2>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
					<EachBlog />
					<EachBlog />
					<EachBlog />
				</div>
			</div>
		</section>
	)
}

const EachBlog = () => {
	return (
		<article className="bg-white shadow-custom rounded p-5">
			<a href="blog-details.html" className="block mb-6 rounded">
				<img
					src="assets/images/blogs/th-1.jpg"
					className="w-full"
					alt="Human"
				/>
			</a>
			<div className="pl-1 pr-12">
				<div className="flex space-x-2 mb-3.5">
					<a
						href="#"
						className="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md"
					>
						Digital
					</a>
					<a
						href="#"
						className="px-2 py-1.5 text-sm text-interface-200 bg-borderl-500 rounded-md"
					>
						Marketing
					</a>
				</div>
				<h3 className="blog-title mb-2 text-interface-100 font-semibold text-2xl">
					<a href="blog-details.html">
						Organic Food Isn’t Much Better For Your Future Health.
					</a>
				</h3>
				<span className="text-sm text-interface-200">3 days read</span>
			</div>
		</article>
	)
}
