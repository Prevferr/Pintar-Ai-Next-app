"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import DropDown from "./DropDown";
import ModalLogin from "../loginn/components/ModalLogin";
import DropDownList from "./DropDownLIst";
import Link from "next/link";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
			<Link href="/">
				<span className="flex gap-2 items-center h-full">
					<Icon icon="mingcute:quill-pen-line" color="#fff" width={40} />
					<h3 className="text-[#fff] text-4xl font-mono cursor-pointer">
						Pintar Scholar
					</h3>
				</span>
			</Link>
			<div className="flex justify-between items-center gap-4">
				<ul className="flex justify-between gap-8 items-center">
					<DropDownList />
				</ul>
				<ModalLogin
					open={isModalOpen}
					onOk={closeModal}
					onCancel={closeModal}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
