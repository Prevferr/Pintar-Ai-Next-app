"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from "@iconify/react";

const CardProject = () => {
	return (
		<div className="my-4 w-full flex justify-between gap-6">
			<div className="shadow rounded-xl w-[25%] flex flex-col pb-5">
				<img
					src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75"
					className="rounded-t-xl"
				/>
				<div className="p-2 flex flex-col gap-2">
					<span className="flex justify-start gap-2 items-center">
						<p className="text-xs text-[#74767e]">Pt Sinarmar Indonesia</p>
						<Icon
							icon="material-symbols-light:verified-outline"
							color="#0096FF"
							width={15}
						/>
					</span>
					<p className="text-[#252525] font-semibold text-sm">
						Pengembangan pakan ayam dengan pesticida
					</p>
					<span className="flex justify-start gap-2 items-center">
						<p className="text-xs font-light text-[#252525]">Budget</p>
						<p className="text-[#0096FF] text-sm font-bold">Rp 7.500.000,00</p>
					</span>
					<ProgressBar
						completed={18}
						bgColor="#0096FF"
						height="13px"
						labelSize="10px"
					/>
				</div>
			</div>
		</div>
	);
};

export default CardProject;