import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueItem } from "../constants";

const Trusted = () => {
	return (
		<Marquee
			direction="right"
			speed={50}
			gradientWidth={0}
			className="bg-gradient-to-t from-[#f2f2f2] via-[#f2f2f2] to-transparent"
		>
			<div className="flex justify-between gap-12">
				{MarqueItem.map((e) => (
					<img
						alt="prevferr image"
						src={e}
						className="w-[8rem] lg:w-[10rem] custom-marq "
					/>
				))}
			</div>
		</Marquee>
	);
};

export default Trusted;
