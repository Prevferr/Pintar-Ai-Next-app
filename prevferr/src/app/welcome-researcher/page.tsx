"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { JournalWithResearcher } from "../type-def";
import { NextRequest } from "next/server";
import { readPayload } from "../../../helpers/lib/jwt";

const WelcomePage = (request: NextRequest) => {
	const [journal, setJournal] = useState([] as JournalWithResearcher[]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/journals");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();
			console.log(responseJSON);

			setJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
		// console.log("MAAAFFFFFFFF", request.headers.get("x-user-id"));
		// console.log("xixixixixixixixiixxixixi");
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section className="bg-[#242628] w-full">
			<div className="paddingX">
				{/* <div className="w-full flex justify-center border-x  border-[#000]">
					<div className="flex justify-between items-center">
						<div className="p-4 flex flex-col justify-between gap-8">
							<div className="flex flex-col justify-around  gap-4 text-base text-white">
								<h3 className="text-3xl font-mono text-left font-semibold">
									Welcome Alvin JustKidding Everything you need is here..
								</h3>
							</div>
						</div>
					</div>
				</div> */}
			</div>
			<div className="flex justify-center paddingX border-[#000]  min-h-screen">
				<div className="w-[60%] border-l border-[#000] paddingXShorter3 paddingYShorter2">
					<div className="flex justify-between items-center">
						<div className="flex flex-col justify-between gap-8">
							<h3 className="text-5xl font-mono text-left font-semibold text-[#fff]">
								Everything you need is here..
							</h3>
							<p className="text-[#fff] font-mono text-sm">
								From startups to the World Cup, modern software teams use Mux
								products to stream billions of minutes of video every day.
							</p>
							<Link href="/upload-abstract">
								<button
									className="mr-auto border flex items-center gap-2 bg-[#fff] py-3 px-5 rounded-full text-[#000] cursor-pointer font-mono transition-transform duration-300 hover:transform translate-y-[-3px]"
									// onClick={LoadToTop}
								>
									<p className="text-sm">Create Journal</p>
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-[40%] border-x border-[#000] paddingYShorter3  bg-[#E2E4DD] flex flex-col gap-4">
					<div className="border-[#000] border-y h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
						<div className="flex flex-col gap-4">
							<p className="font-mono text-[#565e67] text-base">
								NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
							</p>
							<h1 className="text-xl">Petanian Skala Mikro di Indonesia</h1>
							<div className="flex justify-start items-center gap-4">
								<img
									src="https://plus.unsplash.com/premium_photo-1676998930667-cab56c8fa602?q=80&w=3383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="h-10 w-10 rounded-full object-cover"
									alt="researcher"
								/>
								<p className="text-base font-mono">
									<span className="text-[#565e67] text-sm">BY</span> Dzul
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="font-mono text-[#565e67] text-sm">
									NOVEMBER 27, 2023
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="text-base font-mono">Berak</p>
							</div>
						</div>
					</div>
					<div className="border-[#000] border-y h-48 flex justify-start gap-8 p-4 hover:bg-[#fff]">
						<div className="flex flex-col gap-4">
							<p className="font-mono text-[#565e67] text-base">
								NOVEMBER 27, 2023 (ABOUT 2 MONTHS AGO)
							</p>
							<h1 className="text-xl">Petanian Skala Mikro di Indonesia</h1>
							<div className="flex justify-start items-center gap-4">
								<img
									src="https://plus.unsplash.com/premium_photo-1676998930667-cab56c8fa602?q=80&w=3383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="h-10 w-10 rounded-full object-cover"
									alt="researcher"
								/>
								<p className="text-base font-mono">
									<span className="text-[#565e67] text-sm">BY</span> Dzul
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="font-mono text-[#565e67] text-sm">
									NOVEMBER 27, 2023
								</p>
								<span className="text-[#565e67]">•</span>
								<p className="text-base font-mono">Berak</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WelcomePage;

// import { getServerSession } from "next-auth";
// import { authOptions } from "../../../helpers/lib/auth";
// // import Header from "@/components/header.component";
// // import { authOptions } from "@/lib/auth";

// export default async function Profile() {
//   const session = await getServerSession(authOptions);
//   const user = session?.user;
//   console.log(user);

//   return (
//     <>
//       {/* <Header /> */}
//       <section className="bg-ct-blue-600  min-h-screen pt-20">
//         <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
//           <div>
//             <p className="mb-3 text-5xl text-center font-semibold">
//               Profile Page
//             </p>
//             {!user ? (
//               <p>Loading...</p>
//             ) : (
//               <div className="flex items-center gap-8">
//                 <div>
//                   <img
//                     src={user.image ? user.image : "/images/default.png"}
//                     className="max-h-36"
//                     alt={`profile photo of ${user.name}`}
//                   />
//                 </div>
//                 <div className="mt-8">
//                   <p className="mb-3">Name: {user.name}</p>
//                   <p className="mb-3">Email: {user.email}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
