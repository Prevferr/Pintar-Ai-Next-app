import React from "react";
import Marquee from "react-fast-marquee";

const Trusted = () => {
	return (
		<Marquee
			direction="right"
			speed={50}
			gradientWidth={0}
			className="bg-gradient-to-t from-[#f9f9f9] via-[#D9D9D9] to-transparent"
		>
			<div className="mx-8 lg:mx-16">
				<img
					alt="Belinsky Studio"
					src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png"
					className="w-[8rem] lg:w-[10rem] custom-marq "
				/>
			</div>
		</Marquee>
	);
};

export default Trusted;
