"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutPage = () => {
	return (
		<section className="bg-[#0000ff] paddingX paddingYShorter">
			<Link href="/">
				<div className="m-4 flex justify-end gap-2 items-center cursor-pointer">
					<Icon icon="ep:back" width={30} color="#fff" />
					<p className="text-xl font-mono text-[#fff] hover:underline">
						Back to Home Page
					</p>
				</div>
			</Link>
<<<<<<< HEAD
			<div className="paddingX paddingY bg-[#fff] min-h-screen border">
				<div className="w-[60%] mx-auto flex flex-col gap-4">
					<p className="font-mono text-[#565e67]">NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)</p>
=======
			<div className="paddingX paddingY flex flex-col">
				{/* <div className="w-[60%] mx-auto flex flex-col gap-4">
					<p className="font-mono text-[#565e67]">
						NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
					</p>
>>>>>>> 84dec7ee0c088cfeb989994361650d7238f4b1be
					<h1 className="text-5xl">How to add a background video in Next.js</h1>
					<div className="flex justify-start items-center gap-4">
						<img src="https://cdn.sanity.io/images/2ejqxsnu/production/d6d798e8581a361efb9d9ef2923794da065d0e6e-450x445.jpg?w=128&q=75&fit=clip&auto=format" className="h-14 w-14 rounded-full object-cover" />
						<p className="text-base font-mono">
							<span className="font-mono text-[#565e67] text-sm">BY</span> Adam Turnere
						</p>
						<span className="text-[#565e67]">•</span>
						<p className="font-mono text-[#565e67] text-sm">4 Mount Ago</p>
						<span className="text-[#565e67]">•</span>
						<p className="text-base font-mono">ENGGINERING</p>
					</div>
				</div>
<<<<<<< HEAD
				<div className="border-b my-8 w-[70%] mx-auto"></div>
				<div>Pintar-Scholar memiliki dedikasi untuk menjadi pusat keunggulan dalam penelitian dan inovasi. Pintar-Scholar memiliki komitmen untuk memberikan dorongan untuk setiap pengetahuan, mendukung para peneliti, dan memberikan kontribusi penting bagi masyarakat melalui penelitian yang berdampak.</div>
				<h1>VISI MISI</h1>
				<p>Pintar-Scholar memiliki visi dan misi untuk menciptakan sebuah ekosistem di mana peneliti, akademisi, dan pemikir dapat berkumpul, berkolaborasi, dan berbagi pengetahuan. Dengan latar belakang yang beragam dalam sains, teknologi, humaniora, dan seni, pintar-scholar bertujuan untuk membangun jembatan antara disiplin ilmu dan mendorong pendekatan interdisipliner dalam penelitian.</p>
				<h1>TIM KAMI</h1>
				<p>Di balik layar Pintar-Scholar, terdapat tim peneliti, ilmuwan, dan praktisi yang berdedikasi. Kami menghargai keragaman pemikiran dan latar belakang, percaya bahwa inovasi sering kali muncul dari pertemuan ide - ide baru.</p>
=======
				<div className="border-b my-8 w-[70%] mx-auto"></div> */}
				<div className="w-full flex justify-center gap-4">
					<h1 className="text-[#fff] text-3xl font-mono">
						Transforming researchs and creativity with AI
					</h1>
					<p className="text-[#fff] font-mono">
						Our API platform offers our latest models and guides for safety best
						practices.
					</p>
				</div>
>>>>>>> 84dec7ee0c088cfeb989994361650d7238f4b1be
			</div>
			<img
				src="https://images.openai.com/blob/557a9f70-0bf6-4d72-91c6-5bc5423ad462/stangel-2022-0602.jpg?trim=90,0,630,0&width=3200"
				className="rounded-xl"
			/>
		</section>
	);
};

export default AboutPage;
