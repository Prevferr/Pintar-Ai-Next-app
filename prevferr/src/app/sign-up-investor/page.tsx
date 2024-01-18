"use client";

import { ChangeEvent, useState } from "react";

// Halaman register untuk investor
// Components
import CustomInput from "../components/CustomInput";

// Next ui
import { button } from "@nextui-org/react";

// Api
import { useMutation } from "@tanstack/react-query";
import { PostUser } from "../../../api/routes/researchers";

// import { PostUser } from "../../../api/routes/researchers";

// Miscellaneous
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const initialValues = {
<<<<<<< HEAD:prevferr/src/app/sign-up/page.tsx
	fistname: "",
	lastname: "",
	password: "",
	education: "",
	scope: "",
	institution: "",
	profileImage: "",
	email: "",
	background: "",
	gender: "",
	role: "",
	location: "",
=======
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  budget: 0,
  profileImage: "",
  institution: "",
  range_member: "",
  industry: "",
  industry_type: "",
  isPremium: false
>>>>>>> e6186bbc0208328e13e8641aa73b1c3973207753:prevferr/src/app/sign-up-investor/page.tsx
};

export default function SignUpPage() {
	const router = useRouter();
	const [data, setData] = useState(initialValues);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		if (name === "zip") {
			setData({ ...data, [name.toString()]: Number(value) });
		} else {
			setData({ ...data, [name]: value });
		}
	};

	const newUserMutation = useMutation(PostUser, {
		onSuccess: () => {
			toast.success("Successfully registered");
			setData(initialValues);
			router.push("/sign-in");
		},
		onError: (err) => console.log(err),
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("data >>", data);
		newUserMutation.mutate(data);
	};

	return (
		<article className="min-h-screen p-24">
			<h1 className="font-bold text-center text-3xl">Sign Up</h1>
			<form onSubmit={handleSubmit} className="grid grid-cols-2 mt-10 w-[60%] mx-auto gap-x-5 gap-y-5">
				<CustomInput placeholder="First Name" type="text" name="fistname" value={data?.fistname} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Last Name" type="text" name="lastname" value={data?.fistname} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Password" type="password" name="password" value={data?.password} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Education" type="text" name="education" value={data?.education} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Scope" type="text" name="scope" value={data?.scope} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Profile Image" type="text" name="profileImage" value={data?.profileImage} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Email" type="email" name="email" value={data?.email} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Background" type="text" name="background" value={data?.background} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Gender" type="text" name="gender" value={data?.gender} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Role" type="text" name="background" value={data?.role} onChange={(e) => handleChange(e)} />
				<CustomInput placeholder="Location" type="text" name="location" value={data?.location} onChange={(e) => handleChange(e)} />
				<button color="primary" className="text-lg font-semibold" type="submit">
					Sign Up
				</button>
			</form>
		</article>
	);
}
