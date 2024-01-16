// import Image from "next/image";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";

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

export default function Home() {
	return (
		<section>
			<div className="relative">
				<img
					src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,w_1160,dpr_2.0/v1/attachments/generic_asset/asset/6862a05b67984196bdde7879eecd4e78-1690384433870/jenny-2x.jpg"
					alt="gambar villa"
					className="w-full h-[48rem] object-cover shadow-xl object-top"
				/>
				<Navbar />
			</div>
			<Trusted />
			<CardPopular />
			<Footer />
		</section>
	);
}

/*
"use client";
// import Image from "next/image";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { NavItem } from "./constants";

export default function Home() {
	return (
		<section>
			<div className="relative">
				<Swiper
					cssMode={true}
					navigation={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					className="mySwiper"
				>
					{NavItem?.map((el: string, i: number) => (
						<SwiperSlide key={i}>
							<img
								src={el}
								alt={`gambar villa ${i}`} // Provide a unique alt for each image
								className="w-full h-[48rem] object-cover shadow-xl object-top"
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<Navbar />
			</div>

			<Trusted />
		</section>
	);
}

*/
