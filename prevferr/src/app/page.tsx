"use client";
import { Icon } from "@iconify/react";

// import required modules
import Link from "next/link";
import DropDownList from "./components/DropDownLIst";
import ModalLogin from "./login/components/ModalLogin";
import { useState } from "react";
import LoadToTop from "../../helpers/utils/LoadToTop";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<section className="">
			{/* layer 1  */}
			<div className="bg-[#242628]">
				<div className="flex justify-between py-6 border border-[#000] paddingX">
					<span className="flex gap-2 items-center h-full">
						<Icon icon="el:livejournal" color="#fff" width={30} />
						<h3 className="text-[#fff] text-4xl font-mono cursor-pointer">
							Pintar
						</h3>
					</span>
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
				</div>
				<div className="paddingX">
					<div className="w-full flex justify-center border-x border-b border-[#000]">
						<div className="w-[50%] flex justify-center items-center">
							<div className="p-4 flex flex-col gap-4">
								<div className="flex flex-col gap-4 text-base text-white">
									<h3 className="text-4xl font-mono">
										Working for the development of research for the common good,
										prioritizing the well-being of humanity and the environment.
									</h3>
								</div>
								<p className="text-[#fff] font-mono text-sm">
									Everything needed to build a beautiful web player for Mux
									Video — designed for any page and app, all from one platform.
								</p>
								<Link href="/about-us">
									<button
										className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-2 rounded-lg text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
										onClick={LoadToTop}
									>
										<p className="text-sm">Learn about Pintar Scholar</p>
										<Icon icon="tabler:arrow-up-right" width={20} />
									</button>
								</Link>
							</div>
						</div>
						<div className="w-[50%]">
							<div className="relative flex flex-col justify-center">
								<img src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=3200" />
								<div className="absolute top-0  bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-50"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* layer 2  */}
			<div className="bg-[#E2E4DD]">
				<div className="w-full flex paddingX paddingYShorter  border border-[#000] border-x paddingX">
					<div className="w-[30%]">
						<h3 className="font-mono text-5xl">Video for developers</h3>
					</div>
					<div className="w-[70%]">
						<p>
							Ship faster with more visibility. We're continuously solving the
							hardest problems in video streaming and wrapping it all up in
							thoughtfully designed developer tools and dashboards.
						</p>
					</div>
				</div>
				<div className="w-full flex paddingX border-b border-[#000] border-x paddingX">
					<div className="w-full flex justify-center border-x border-[#000]">
						<div className="w-[35%] flex flex-col">
							{/* <img
								src="https://www.mux.com/_next/static/media/player-default.f8e6da8b.svg"
								className="bg-[#000]"
							/> */}
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center bg-[#0072e3] gap-4 px-4">
								<Icon icon="material-symbols-light:upload" width={50} />
								<p className="text-xl font-mono font-thin">Upload Journal</p>
							</div>
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center gap-4 px-4">
								<Icon icon="ph:projector-screen-chart-thin" width={50} />
								<p className="text-xl font-mono font-thin">
									Contribute Project
								</p>
							</div>
							<div className="border-b border-[#000] h-[5rem] flex justify-start items-center gap-4 px-4">
								<Icon icon="arcticons:samsung-finder" width={50} />
								<p className="text-xl font-mono font-thin">Find Journals</p>
							</div>
						</div>
						<div className="w-[65%]">
							<div className="relative flex flex-col justify-center">
								<img
									src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=3200"
									className="h-[40rem] object-cover"
								/>
								<div className="absolute top-0  bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-50"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* layer 3 */}
			<div className="bg-[#E2E4DD] paddingX paddingYShorter">
				<div className="mx-auto border border-[#000] w-[80%] rounded-3xl flex flex-col">
					<div className="bg-[#FFB200] rounded-t-3xl py-3 border-b border-[#000]">
						<p className="text-[#000] text-center font-mono">Journals</p>
					</div>

					<div className="flex justify-center items-center py-14">
						<div className="w-[60%] mx-auto flex flex-col gap-4">
							<p className="font-mono text-[#565e67]">
								NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
							</p>
							<h1 className="text-5xl">
								How to add a background video in Next.js
							</h1>
							<div className="flex justify-start items-center gap-4">
								<img
									src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format"
									className="h-14 w-14 rounded-full object-cover"
								/>
								<p className="text-base font-mono">
									<span className="font-mono text-[#565e67] text-sm">BY</span>{" "}
									Adam Turnere
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="font-mono text-[#565e67] text-sm">4 Mount Ago</p>
								<span className="text-[#565e67]">•</span>
								<p className="text-base font-mono">ENGGINERING</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="bg-[#242628] min-h-screen">x</div> */}
			<div className="bg-[#FF6100] paddingYShorter paddingX flex justify-around flex-col items-center gap-4">
				<button className="relative bg-[#242628] text-[#fff] font-mono w-[60%] mx-auto text-6xl overflow-hidden rounded-full hover:rounded-lg p-4">
					<span className="z-10 relative">Start to Join</span>
				</button>
				<img
					src="https://www.mux.com/_next/static/media/player-default.f8e6da8b.svg"
					className="bg-[#000]"
				/>
				<p className="text-2xl font-mono">
					Try Mux with a risk free trial and $20 in credit.
				</p>
			</div>
		</section>
	);
}
