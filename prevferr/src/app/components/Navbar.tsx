"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
// import DropDown from "./DropDown";
import ModalLogin from "../loginn/components/ModalLogin";
import DropDownList from "./DropDownLIst";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// const [token, setToken] = useState("");

	///handle logout

	const router = useRouter();

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
			<Link href="/">
				<span className="flex gap-2 items-center h-full">
					<Icon icon="mingcute:quill-pen-line" color="#fff" width={40} />
					<h3 className="text-[#fff] text-4xl font-mono cursor-pointer">
						Pintar Ai.
					</h3>
				</span>
			</Link>
			<div className="flex justify-between items-center gap-4">
<<<<<<< HEAD
				<ul className="flex justify-between gap-4 items-center">
=======
				<ul className="flex justify-between gap-8 items-center">
					{/* <li onClick={() => router.push("/addProject")} className="text-[#fff] hover:underline font-mono ">
						Create Project
					</li> */}
>>>>>>> 7659818663357cd2be02913f69106e909cbb4ca7
					<DropDownList />
					<ModalLogin open={isModalOpen} onOk={closeModal} onCancel={closeModal} />
				</ul>
<<<<<<< HEAD
=======
				<ModalLogin
					open={isModalOpen}
					onOk={closeModal}
					onCancel={closeModal}
				/>
>>>>>>> 7659818663357cd2be02913f69106e909cbb4ca7
			</div>
		</nav>

		// 		{
		// 		token ? (

		// <nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
		// 			<Link href="/">
		// 				<span className="flex gap-2 items-center h-full">
		// 					<Icon icon="mingcute:quill-pen-line" color="#fff" width={40} />
		// 					<h3 className="text-[#fff] text-4xl font-mono cursor-pointer">
		// 						Pintar Ai.
		// 					</h3>
		// 				</span>
		// 			</Link>
		// 			<div className="flex justify-between items-center gap-4">
		// 				<ul className="flex justify-between gap-8 items-center">
		// 					{/* <li onClick={() => router.push("/addProject")} className="text-[#fff] hover:underline font-mono ">
		// 						Create Project
		// 					</li> */}
		// 					<DropDownList />
		// 				</ul>
		// 				<button className="border border-[#fff] text-[#fff] px-5 py-1 rounded-xl  hover:rounded-md hover:bg-[#fff] hover:text-[#252525]">
		// 					<span className="flex gap-2 items-center font-mono">
		// 						Logout
		// 						<Icon icon="heroicons-solid:logout" width={20} />
		// 					</span>
		// 				</button>
		// 			</div>
		// 		</nav>
		// 		) : (
		// 				<nav className="flex justify-between py-6 border border-[#000] paddingX bg-[#242628]">
		// 			<Link href="/">
		// 				<span className="flex gap-2 items-center h-full">
		// 					<Icon icon="mingcute:quill-pen-line" color="#fff" width={40} />
		// 					<h3 className="text-[#fff] text-4xl font-mono cursor-pointer">
		// 						Pintar Ai.
		// 					</h3>
		// 				</span>
		// 			</Link>
		// 			<div className="flex justify-between items-center gap-4">
		// 				<ul className="flex justify-between gap-8 items-center">
		// 					{/* <li onClick={() => router.push("/addProject")} className="text-[#fff] hover:underline font-mono ">
		// 						Create Project
		// 					</li> */}
		// 					<DropDownList />
		// 				</ul>
		// 				<ModalLogin
		// 					open={isModalOpen}
		// 					onOk={closeModal}
		// 					onCancel={closeModal}
		// 				/>
		// 			</div>
		// 		</nav>
		// 		)}
	);
};

export default Navbar;
