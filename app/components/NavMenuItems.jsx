/** @format */

"use client";
import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "../lib/menuItems";
import { CiWavePulse1 } from "react-icons/ci";

const NavMenuItems = ({
	classStyle = "group",
	handleSetOpen,
	fixed = false,
}) => {
	const pathname = usePathname();
	const filteredMenuItems = fixed
		? menuItems.filter((item) => item.href !== "/")
		: menuItems;

	return (
		<Suspense fallback={<div>Loading...</div>}>
			{filteredMenuItems
				.filter((item) => pathname !== item.href)
				.map((item, i) => (
					<Link
						role="link"
						aria-label={item.title}
						key={i}
						// Logic to close menu if on homepage and link is an anchor
						onClick={() =>
							handleSetOpen && pathname == "/" && item.href.includes("#")
								? handleSetOpen(false)
								: null
						}
						className={classStyle}
						href={item.href}
					>
						<CiWavePulse1 className="inline-block mr-3 pb-1 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
						{item.title}
						<CiWavePulse1 className="inline-block ml-3 pb-1 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
					</Link>
				))}
		</Suspense>
	);
};

export default NavMenuItems;
