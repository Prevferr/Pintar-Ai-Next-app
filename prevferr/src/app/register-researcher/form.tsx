"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { redirect } from "next/navigation";

import Link from "next/link";

import { SingleImageDropzone } from "../components/singe-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";

export const RegisterForm = () => {
	// Edge store state
	const [file, setFile] = useState<File>();
	const [progress, setProgress] = useState(0);

	// const [urls, setUrls] = useState<{
	// 	url: string;
	// 	thumbnailUrl: string | null;
	// }>();

	const [urls, setUrls] = useState<{
		url: string;
	}>();

	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		firstname: "",
		lastname: "",
		password: "",
		institution: "",
		profileImage: "",
		email: "",
		background: "",
		gender: "",
		role: "",
		location: "",
		phone_number: "",
		jabatan_akademik: "",
		investasi: "",
		education: "",
	});
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setFormValues({
			firstname: "",
			lastname: "",
			password: "",
			institution: "",
			profileImage: "",
			email: "",
			background: "",
			gender: "",
			role: "",
			location: "",
			phone_number: "",
			jabatan_akademik: "",
			investasi: "",
			education: "",
		});

		try {
			const res = await fetch("/api/register-researcher", {
				method: "POST",
				body: JSON.stringify(formValues),
				headers: {
					"Content-Type": "application/json",
				},
			});

			setLoading(false);
			if (!res.ok) {
				setError((await res.json()).message);
				return;
			}

			signIn(undefined, { callbackUrl: "/" });
		} catch (error: any) {
			setLoading(false);
			setError(error);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	// Edge store setup
	const { edgestore } = useEdgeStore();

	const input_style =
		"form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

	return (
		<form onSubmit={onSubmit}>
			<h1 className="m-5 text-3xl text-center">
				Welcome Researcher Everything you need is here..
			</h1>
			{error && (
				<p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
			)}
			<div className="mb-6">
				<input
					required
					type="text"
					name="firstname"
					value={formValues.firstname}
					onChange={handleChange}
					placeholder="Firstname"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="lastname"
					value={formValues.lastname}
					onChange={handleChange}
					placeholder="Lastname"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="password"
					name="password"
					value={formValues.password}
					onChange={handleChange}
					placeholder="Password"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="phone_number"
					value={formValues.phone_number}
					onChange={handleChange}
					placeholder="Phone Number"
					className={`${input_style}`}
				/>
			</div>

			<div className="mb-6">
				<input
					required
					type="text"
					name="education"
					value={formValues.education}
					onChange={handleChange}
					placeholder="education"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="jabatan_akademik"
					value={formValues.jabatan_akademik}
					onChange={handleChange}
					placeholder="Jabatan Akademik"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="institution"
					value={formValues.institution}
					onChange={handleChange}
					placeholder="Institution"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="profileImage"
					value={formValues.profileImage}
					onChange={handleChange}
					placeholder="Profile Image"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="email"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					placeholder="Email address"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="background"
					value={formValues.background}
					onChange={handleChange}
					placeholder="Background"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="gender"
					value={formValues.gender}
					onChange={handleChange}
					placeholder="Gender"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="investasi"
					value={formValues.investasi}
					onChange={handleChange}
					placeholder="Investasi"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="role"
					value={formValues.role}
					onChange={handleChange}
					placeholder="Role"
					className={`${input_style}`}
				/>
			</div>
			<div className="mb-6">
				<input
					required
					type="text"
					name="location"
					value={formValues.location}
					onChange={handleChange}
					placeholder="Location"
					className={`${input_style}`}
				/>
			</div>
			<div className="flex flex-col items-center m-6 gap-2">
				<SingleImageDropzone
					width={200}
					height={200}
					value={file}
					onChange={(file) => {
						setFile(file);
					}}
				/>
				<div className="h-[6px] w-44 border rounded overflow-hidden">
					<div
						className="h-full bg-black transition-all duration-150"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>
			<button
				onClick={async () => {
					if (file) {
						const res = await edgestore.publicFiles.upload({
							file,
							onProgressChange: (progress) => {
								setProgress(progress);
							},
						});
						setUrls({ url: res.url });
					}
				}}
				type="submit"
				style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
				className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
				disabled={loading}
			>
				{loading ? "loading..." : "Sign Up"}
			</button>
			<div className="my-4 flex justify-center gap-2">
				<p className="text-base font-light font-mono text-[#FF6100]">
					Already have an Account?
				</p>
				<Link href="/login-researcher">
					<p className="underline text-base font-mono text-[#242628] cursor-pointer">
						Sign in
					</p>
				</Link>
			</div>
		</form>
	);
};
