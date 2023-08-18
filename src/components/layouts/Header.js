import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use';

export default function Header() {
	const [fixed, setFixed] = useState(false);
	const {  y } = useWindowScroll();

	function handleButtonClick(theElement) {
		const element = document.getElementById(theElement)
		if(element) {
			const offset = element.offsetTop

			window.scrollTo({
				top: offset,
				behavior: 'smooth',
			})
		}
	}

	return (
		<header className="main-header z-50">
			<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex justify-between py-3">
					<div className="grow">
						<div className="flex space-x-0 md:space-x-14">
							<div className="flex items-center space-x-2">
								<i className="fa-solid fa-envelope text-pblue-500"></i>
								<a
									href="mailto:info@flip.co.ke"
									className="text-interface-200 text-base"
								>
									info@flip.co.ke
								</a>
							</div>

							<div className="space-x-2 hidden md:flex items-center">
								<i className="fa-solid fa-phone text-pblue-500"></i>
								<a
									href="tel:+0168833300"
									className="text-interface-200 text-base"
								>
									{`+254 [0] 114569838`}
								</a>
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-6">
						<a
							href="http://"
							className="group transition-all text-interface-200 hover:text-pblue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a
							href="http://"
							className="group transition-all text-interface-200 hover:text-pblue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-twitter"></i>
						</a>
						<a
							href="http://"
							className="group transition-all text-interface-200 hover:text-pblue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-youtube"></i>
						</a>
						<a
							href="http://"
							className="group transition-all text-interface-200 hover:text-pblue-500"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>

			<div className={`main-menu sticky-header ${y > 200 && 'affix'}`}>
				<div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<nav className={`nav ${y > 200 && 'shadow-lg'}`}>
						<div className="nav__data">
							<Link href="/" className="nav__logo">
								<img src="/img/brand.png" width={150} alt="" />
							</Link>
							<div className="nav__toggle" id="nav-toggle">
								<i className="fa-solid fa-bars nav__toggle-menu"></i>
								<i className="fa-solid fa-xmark nav__toggle-close"></i>
							</div>
						</div>
						<div className="nav__menu " id="nav-menu">
							<ul className="nav__list" style={{ zIndex: 80 }}>
								<li
									className="dropdown__item"
									onClick={() => handleButtonClick('top')}
								>
									<a href="#top" className="nav__link dropdown__button">
										Home
									</a>
								</li>

								<li
									className="dropdown__item"
									onClick={() => handleButtonClick('how')}
								>
									<div className="nav__link dropdown__button">How It Works</div>
								</li>

								<li
									className="dropdown__item"
									onClick={() => handleButtonClick('about')}
								>
									<div className="nav__link dropdown__button">About Us</div>
								</li>

								{/* <li className="dropdown__item">
									<div className="nav__link dropdown__button">
										About
										
									</div>
									
								</li> */}
							</ul>
						</div>
						<div className="hidden xl:block">
							<a
								href="mailto:info@flip.co.ke"
								className="bg-pblue-500 hover:bg-pblue-600 group text-white px-6 py-4 font-medium rounded-lg inline-flex justify-center items-center transition"
							>
								<span>Let's Talk</span>
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
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}
