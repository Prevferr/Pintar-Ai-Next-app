"use client";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";
import { Icon } from "@iconify/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { NavItem } from "./constants";
import CardPopular from "./components/CardPopular";
import Footer from "./components/Footer";
import VisionMission from "./components/VisionMission";
import CardProject from "./components/CardProject";

export default function Home() {
	return (
		<section className="w-full flex justify-between gap-2 paddingYShorter3 px-4 bg-[#dbe3f3] min-h-screen">
			<div className="w-[75%] p-4">
				<Navbar />
			</div>
			<div className="w-[25%] bg-[#ffff] p-4 rounded-3xl">
				<div className="w-full flex flex-col gap-4 pt-4">
					<input
						className="border px-4 py-2 rounded-xl placeholder:text-sm"
						placeholder="Article Name, Category, Projects.."
					/>
					<div className="px-4 flex justify-between gap-2">
						<p className="font-light text-lg">Project on Going</p>
						<span className="flex items-center">
							<p className="font-light text-sm">View All</p>
							<Icon icon="mingcute:right-line" />
						</span>
					</div>
					<div>
						<img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
					</div>
					{/* <CardProject /> */}
					<div className="p-4 flex justify-start gap-4">
						<div className="flex flex-col">
							<span className="flex items-center justify-start gap-4">
								<p className="text-[#0096FF] text-sm font-semibold">Science</p>
								<p className="text-[#74767e] text-xs font-semibold">
									4 hour ago
								</p>
							</span>
							<p className="text-sm font-semibold cursor-pointer hover:underline">
								Peta Tingkat Bahaya Erosi DAS Batang Kuranji - Kota Padang
							</p>
						</div>
						<img
							src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="h-16 w-16 object-cover rounded-xl"
						/>
					</div>
					<div className="border-b"></div>
					<div className="p-4 flex justify-start gap-4">
						<div className="flex flex-col">
							<span className="flex items-center justify-start gap-4">
								<p className="text-[#0096FF] text-sm font-semibold">Science</p>
								<p className="text-[#74767e] text-xs font-semibold">
									4 hour ago
								</p>
							</span>
							<p className="text-sm font-semibold cursor-pointer hover:underline">
								Peta Tingkat Bahaya Erosi DAS Batang Kuranji - Kota Padang
							</p>
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
