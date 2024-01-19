"use client";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";
import { Icon } from "@iconify/react";

// import video from "@/app/assets/test_bla.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Link from "next/link";
import DropDownList from "./components/DropDownLIst";
import ModalLogin from "./login/components/ModalLogin";
import { useState } from "react";

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
									<button className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-2 rounded-lg text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]">
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
			<div className="bg-[#E2E4DD] min-h-screen">
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
			<div className="bg-[#E2E4DD] min-h-screen">
				<div className="flex justify-center items-center">
					<h3>Ini journal</h3>
				</div>
			</div>
			{/* <div className="bg-[#242628] min-h-screen">x</div> */}
			<div className="bg-[#FF6100] paddingYShorter paddingX flex justify-around flex-col items-center gap-4">
				{/* <button className="relative bg-[#242628] text-[#fff] font-mono w-[60%] mx-auto text-6xl overflow-hidden rounded-full hover:rounded-none p-4">
					<span className="z-10 relative">Start to Join</span>
				</button>
				<p className="text-2xl font-mono">
					Try Mux with a risk free trial and $20 in credit.
				</p> */}
				
			</div>
		</section>
	);
}

// <section className="w-full flex justify-between gap-2 paddingYShorter3 px-4 bg-[#000] min-h-screen">
// 	<div className="w-[75%] p-4 flex flex-col">
// 		<Navbar />
// 		{/* <div className="border-b my-2"></div> */}

// 		{/* <video autoPlay style={{ width: "500px", height: "500px" }}>
// 			<source src={video} />
// 		</video> */}
//
// 	</div>

// 	{/* this is the right side */}
// 	<div className="w-[25%] bg-[#252525] p-4 rounded-3xl">
// 		<div className="w-full flex flex-col gap-4 pt-4">
// 			<input
// 				className="bg-[#fff] border px-4 py-2 rounded-xl placeholder:text-sm"
// 				placeholder="Article Name, Category, Projects.."
// 			/>
// 			<div className="px-4 flex justify-between gap-2">
// 				<p className="font-light text-base text-[#fff]">Project on Going</p>
// 				<Link href="/projects">
// 					<span className="flex items-center cursor-pointer hover:underline">
// 						<p className="font-light text-sm text-[#fff]">View All</p>
// 						<Icon icon="mingcute:right-line" color="#fff" />
// 					</span>
// 				</Link>
// 			</div>
// 			{/* <Swiper
// 				spaceBetween={30}
// 				pagination={{
// 					clickable: true,
// 				}}
// 				modules={[Pagination]}
// 				className="mySwiper"
// 			> */}
// 			<Link href={"/projects/project_name"}>
// 				<div className="relative flex flex-col justify-center overflow-hidden rounded-3xl ">
// 					{/* <SwiperSlide> */}
// 					<img
// 						src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75"
// 						className="w-96 h-56 rounded-3xl object-cover overflow-hidden"
// 					/>
// 					{/* </SwiperSlide> */}
// 					<div className="absolute top-0 left-0 h-full w-full bg-[#1dbf73]  to-transparent hover:bg-opacity-0 hover:bg-transparent cursor-pointer opacity-25 rounded-xl"></div>

// 					{/* <div className="absolute top-0 left-0 h-full w-full bg-black hover:bg-transparent cursor-pointer opacity-25 rounded-xl"></div> */}
// 					{/* <p className="absolute bottom-4 left-2 text-base text-white rounded-full px-2 py-1 ">
// 					testetetet
// 				</p> */}
// 				</div>
// 			</Link>

// 			<div className="px-4 flex justify-between gap-2">
// 				<p className="font-light text-base text-[#fff]">Top Journal</p>
// 				<Link href="/journals">
// 					<span className="flex items-center cursor-pointer hover:underline">
// 						<p className="font-light text-sm text-[#fff]">View All</p>
// 						<Icon icon="mingcute:right-line" color="#fff" />
// 					</span>
// 				</Link>
// 			</div>

// 			{/* </Swiper> */}
// 			<ArticleCard />
// 			<ArticleCard />
// 			<ArticleCard />
// 			<ArticleCard />
// 		</div>
// 	</div>
// </section>

{
	/* <div className="m-4 w-full flex justify-center items-center p-8">
					<div className="w-[50%] flex justify-center gap-4">
						<Icon icon="bi:journals" color="#000" width={50} />
						<span>
							<p className="text-base font-mono font-semibold">
								Explore our Liblaries
							</p>
							<p className="font-mono font-light text-sm">Sea More...</p>
						</span>
					</div>
					<div className="w-[50%] flex justify-center gap-4">
						<Icon icon="eos-icons:project-outlined" color="#000" width={50} />
						<span>
							<p className="text-base font-mono font-semibold">
								Explore our Liblaries
							</p>
							<p className="font-mono font-light text-sm">Sea More...</p>
						</span>
					</div>
				</div> */
}
