"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import DropDown from "./DropDown";
import ModalLogin from "../login/components/ModalLogin";
import DropDownList from "./DropDownLIst";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="w-full">
			<nav className="paddingYShorter4 bg-transparent flex justify-between">
				<h3 className="text-[#1dbf73] text-xl bg-[#fff] px-4 py-1 rounded-xl">
					Prevferr.
				</h3>
				<div className="flex justify-between items-center gap-4">
					<ul className="flex justify-between gap-8 items-center">
						<DropDownList />
						<DropDown />
						{/* <div className="flex justify-start gap-1 px-3 py-1 rounded-lg items-center cursor-pointer">
							<Icon icon="bitcoin-icons:globe-outline" width={30} />
							<li>English</li>
						</div> */}
						{/* <li>Sign in</li> */}
					</ul>
					<ModalLogin
						open={isModalOpen}
						onOk={closeModal}
						onCancel={closeModal}
					/>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
