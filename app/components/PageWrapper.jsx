/** @format */
import Logo from "./Logo";
import NavHamburger from "./NavHamburger";
export default function PageWrapper({ children }) {
	return (
		<div className="w-screen min-h-screen flex flex-col h-fit p-2">
			<Logo />
            <NavHamburger homePage={false} />
			{children}
			<footer className="mt-32 text-center text-gray-500 text-sm">
				<a href="https://benjamincampbell.com">
					© {new Date().getFullYear()} Benjamin Campbell
				</a>
			</footer>
		</div>
	);
}
