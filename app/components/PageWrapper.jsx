/** @format */
import Logo from "./Logo";
import NavHamburger from "./NavHamburger";
export default function PageWrapper({ children, homePage = false }) {
	return (
		<div className="w-screen max-w-screen overflow-x-hidden min-h-screen  flex flex-col justify-between h-fit p-2">
			{!homePage && (
				<>
					<Logo />
					<NavHamburger homePage={false} />
				</>
			)}
			{children}
			<footer className="mt-20 md:mt-32 w-full text-center text-gray-500 text-sm">
				<a href="https://benjamincampbell.com">
					© {new Date().getFullYear()} Benjamin Campbell
				</a>
			</footer>
		</div>
	);
}
