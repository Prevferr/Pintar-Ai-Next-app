"use client";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";
import { Icon } from "@iconify/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function Home() {
	return (
		<section className="w-full flex justify-between gap-2 paddingYShorter3 px-4 bg-[#eef4ed] min-h-screen">
			<div className="w-[75%] p-4">
				<Navbar />
			</div>

			{/* this is the right side */}
			<div className="w-[25%] bg-[#ffff] p-4 rounded-3xl">
				<div className="w-full flex flex-col gap-4 pt-4">
					<input
						className="bg-[#fff] border px-4 py-2 rounded-xl placeholder:text-sm"
						placeholder="Article Name, Category, Projects.."
					/>
					<div className="px-4 flex justify-between gap-2">
						<p className="font-light text-base">Project on Going</p>
						<Link href="/projects">
							<span className="flex items-center cursor-pointer hover:underline">
								<p className="font-light text-sm">View All</p>
								<Icon icon="mingcute:right-line" />
							</span>
						</Link>
					</div>
					{/* <Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
					> */}
					<div className="relative flex flex-col justify-center overflow-hidden rounded-3xl ">
						{/* <SwiperSlide> */}
						<img
							src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75"
							className="w-96 h-56 rounded-3xl object-cover overflow-hidden"
						/>
						{/* </SwiperSlide> */}
						<div className="absolute top-0 left-0 h-full w-full bg-black hover:bg-transparent cursor-pointer opacity-25 rounded-xl"></div>
						{/* <p className="absolute bottom-4 left-2 text-base text-white rounded-full px-2 py-1 ">
							testetetet
						</p> */}
					</div>
					{/* </Swiper> */}

					{/* <CardProject /> */}
					<div className="px-2 flex justify-start gap-4 items-center">
						<div className="flex flex-col">
							<div className="flex items-center justify-start gap-4">
								<p className="text-[#0096FF] text-sm font-semibold">Science</p>
								<p className="text-[#74767e] text-xs font-light">4 hour ago</p>
							</div>
							<p className="text-sm font-semibold cursor-pointer hover:underline">
								Peta Tingkat Bahaya Erosi DAS Batang Kuranji - Kota Padang
							</p>
							<div className="flex justify-start gap-2 items-center">
								<img
									src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/flat_minimalist.78e0303.svg"
									className="m-1 object-cover rounded-full border h-8 w-8"
								/>
								<p className="text-xs text-[#74767e]">Pt Sinarmar Indonesia</p>
								<Icon
									icon="material-symbols-light:verified-outline"
									color="#0096FF"
									width={15}
								/>
							</div>
						</div>
						<img
							src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="h-16 w-16 object-cover rounded-xl"
						/>
					</div>
					<div className="border-b"></div>
				</div>
			</div>
		</section>
	);
}

{
	/* <div className="relative">
				<img
					src="https://images.unsplash.com/flagged/photo-1550946107-8842ae9426db?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="prevferr home page"
					className="w-full h-[48rem] object-cover shadow-xl object-top"
				/>
			</div> */
}
{
	/* <Navbar /> */
}
{
	/* <Trusted /> */
}
{
	/* <VisionMission />
			<CardPopular />
			<Footer /> */
}
