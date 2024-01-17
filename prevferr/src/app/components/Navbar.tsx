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
		<div className="absolute top-10 w-full">
			<nav className="paddingX paddingYShorter4 bg-transparent flex justify-between text-[#ffffff]">
				<h3>Prevferr.</h3>
				<div className="flex justify-between items-center gap-10">
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
