"use client";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import JournalCard from "../components/JournalCard";
import Link from "next/link";
import { JournalWithResearcher } from "../type-def";
import { useRouter } from "next/navigation";

import { NextRequest } from "next/server";
import { readPayload } from "../../../helpers/lib/jwt";

const WelcomePage = () => {
	const [journal, setJournal] = useState([]);
	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/api/projects");

			if (!response.ok) {
				throw new Error("Failed fetching data");
			}

			const responseJSON = await response.json();

			setJournal(responseJSON);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			} else {
				console.log(error);
			}
		}
	};

	const rupiah = (number: any) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<section className="flex w-full justify-center py-11 gap-6">
				{journal.map((el: any) => {
					return (
						<>
							<div key={el.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<a href="#">
									<img className="rounded-t-lg" src={el.project_image} alt="" />
								</a>
								<div className="p-5">
									<a href="#">
										<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.project_name}</h5>
									</a>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description_project}</p>
									<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Budget: {rupiah(el.project_budget)}</p>
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
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
