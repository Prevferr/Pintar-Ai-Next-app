// import Image from "next/image";
import Navbar from "./components/Navbar";
import Trusted from "./components/Trusted";

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
		</section>
	);
}
