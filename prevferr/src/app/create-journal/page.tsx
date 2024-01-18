// "use client";

// import { useRouter } from "next/router";
// import React, { useState } from "react";

// const page = () => {
// 	const navigation = useRouter();
// 	const initialFormValue = {
// 		abstract: "",
// 		title: "",
// 		description: "",
// 	};

// 	const [form, setForm] = useState({ ...initialFormValue });
// 	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setForm({
// 			...form,
// 			[event.target.id]: event.target.value,
// 		});
// 	};

// 	const input_style = "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

// 	return (
// 		<>
// 			<div>Create Journals</div>
// 			<form>
// 				{/* {error && <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>} */}
// 				<div className="mb-6">
// 					<input required type="text" name="abstract" placeholder="Journal Abstract" className={`${input_style}`} />
// 				</div>
// 				<div className="mb-6">
// 					<input required type="text" name="title" placeholder="Journal Title" className={`${input_style}`} />
// 				</div>
// 				<div className="mb-6">
// 					<input required type="text" name="description" placeholder="Journal Description" className={`${input_style}`} />
// 				</div>
// 				<button type="submit" style={{ backgroundColor: `"#3446eb"` }} className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
// 					Upload
// 				</button>
// 			</form>
// 		</>
// 	);
// };

// export default page;
