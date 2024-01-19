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
import ArticleCard from "./components/ArticleCard";

export default function Home() {
	return (
		<section className="w-full flex justify-between gap-2 paddingYShorter3 px-4 bg-[#eef4ed] min-h-screen">
			<div className="w-[75%] p-4 flex flex-col">
				<Navbar />
				{/* <video autoPlay style={{ width: "500px", height: "500px" }}>
					<source src={video} />
				</video> */}
				<div className="relative flex flex-col justify-center overflow-hidden">
					<img
						src="https://images.openai.com/blob/47e8bf4c-ffd5-4b80-b481-568ed1329f97/stangel-2022-1598.jpg?trim=0,0,0,0&width=3200"
						className="rounded-xl"
					/>
					<div className="absolute top-0  bottom-0 h-full w-full bg-[#252525] cursor-pointer opacity-75 rounded-xl"></div>
					<div className="absolute flex flex-col gap-4 bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base text-white">
						<h3 className="w-full text-4xl">
							Working towards the development of Safe AGI, prioritizing the
							well-being of humanity.
						</h3>
						<button className="mr-auto border border-[#fff] py-1 px-2 rounded-lg hover:bg-[#fff] hover:text-[#252525]">
							Learn about Pintar Scholar
						</button>
					</div>
				</div>
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
						<div className="absolute top-0 left-0 h-full w-full bg-[#1dbf73]  to-transparent hover:bg-opacity-0 hover:bg-transparent cursor-pointer opacity-25 rounded-xl"></div>

						{/* <div className="absolute top-0 left-0 h-full w-full bg-black hover:bg-transparent cursor-pointer opacity-25 rounded-xl"></div> */}
						{/* <p className="absolute bottom-4 left-2 text-base text-white rounded-full px-2 py-1 ">
							testetetet
						</p> */}
					</div>
					{/* </Swiper> */}
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</div>
			</div>
		</section>
	);
}
