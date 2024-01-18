// "use client";

// import { ChangeEvent, useState } from "react";

// // Components
// import CustomInput from "../components/CustomInput";

// // Next ui
// import { button } from "@nextui-org/react";

// // Api
// import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
// const queryClient = new QueryClient();
// // import { useMutation } from "@tanstack/react-query";
// import { PostResearcher } from "../../../api/routes/researchers";

// // import { PostUser } from "../../../api/routes/researchers";

// // Miscellaneous
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// const initialValues = {
//   firstname: "",
//   lastname: "",
//   password: "",
//   education: "",
//   scope: "",
//   institution: "",
//   profileImage: "",
//   email: "",
//   background: "",
//   gender: "",
//   role: "",
//   location: "",
// };

// export default function SignUpPage() {
//   const router = useRouter();
//   const [data, setData] = useState(initialValues);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     if (name === "zip") {
//       setData({ ...data, [name.toString()]: Number(value) });
//     } else {
//       setData({ ...data, [name]: value });
//     }
//   };

//   const newUserMutation = useMutation({
//     mutationFn: PostResearcher,
//     onSuccess: () => {
//       toast.success("Successfully registered");
//       setData(initialValues);
//       router.push("/sign-in");
//     },
//     onError: (err) => {
//       // Anda bisa melakukan lebih banyak hal di sini, seperti menampilkan toast error
//       console.error("Error during registration:", err);
//     },
//   });

//   // const newUserMutation = useMutation(PostResearcher, {
//   //   onSuccess: () => {
//   //     toast.success("Successfully registered");
//   //     setData(initialValues);
//   //     router.push("/sign-in");
//   //   },
//   //   onError: (err) => console.log(err),
//   // });

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitting data:", data);
//     newUserMutation.mutate(data);
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//     <article className="min-h-screen p-24">
//       <h1 className="font-bold text-center text-3xl">Sign Up</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-2 mt-10 w-[60%] mx-auto gap-x-5 gap-y-5"
//       >
//         <CustomInput
//           placeholder="First Name"
//           type="text"
//           name="firstname"
//           value={data?.firstname}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Last Name"
//           type="text"
//           name="lastname"
//           value={data?.lastname}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Password"
//           type="password"
//           name="password"
//           value={data?.password}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Education"
//           type="text"
//           name="education"
//           value={data?.education}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Scope"
//           type="text"
//           name="scope"
//           value={data?.scope}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Profile Image"
//           type="text"
//           name="profileImage"
//           value={data?.profileImage}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Email"
//           type="email"
//           name="email"
//           value={data?.email}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Background"
//           type="text"
//           name="background"
//           value={data?.background}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Gender"
//           type="text"
//           name="gender"
//           value={data?.gender}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Role"
//           type="text"
//           name="role"
//           value={data?.role}
//           onChange={(e) => handleChange(e)}
//         />
//         <CustomInput
//           placeholder="Location"
//           type="text"
//           name="location"
//           value={data?.location}
//           onChange={(e) => handleChange(e)}
//         />
//         <button color="primary" className="text-lg font-semibold" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </article>
//     </QueryClientProvider>
//   );
// }

import Link from "next/link";

// import { redirect } from "next/navigation";
// import ClientFlashComponent from "../../../components/ClientFlashComponent";
import { handleFormAction } from "./action";

const RegisterPage = () => {
	return (
		<section className="flex h-screen w-full flex-col items-center justify-center gap-4">
			{/* Di sini kita akan menyelipkan ClientFlashComponent yang akan menampilkan error */}
			{/* error yang ada pada URLSearchParams akan diterima oleh component ini dan ditampilkan error messagenya */}
			{/* <ClientFlashComponent /> */}
			<form action={handleFormAction} className="flex min-w-[25vw] flex-col gap-2">
				<h1 className="text-center text-3xl font-semibold text-slate-700">Sign Up Researcher</h1>
				<input className="rounded px-4 py-2" type="text" id="firstname" name="firstname" placeholder="Firstname" />
				<input className="rounded px-4 py-2" type="text" id="lastname" name="lastname" placeholder="Lastname" />
				<input className="rounded px-4 py-2" type="email" id="email" name="email" placeholder="Email" />
				<input className="rounded px-4 py-2" type="password" id="password" name="password" placeholder="Password" />
				<input className="rounded px-4 py-2" type="text" id="education" name="education" placeholder="Education" />
				<input className="rounded px-4 py-2" type="text" id="institution" name="institution" placeholder="Institution" />
				<input className="rounded px-4 py-2" type="text" id="profileImage" name="profileImage" placeholder="Profile Image" />
				<input className="rounded px-4 py-2" type="text" id="background" name="background" placeholder="Background" />
				<input className="rounded px-4 py-2" type="text" id="role" name="role" placeholder="Role" />
				<input className="rounded px-4 py-2" type="text" id="location" name="location" placeholder="Location" />
				<input className="rounded px-4 py-2" type="text" id="gender" name="gender" placeholder="Gender" />
				{/* Gender Radio Buttons */}
				{/* <div className="flex gap-2">
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male" className="px-2">
              Male
            </label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female" className="px-2">
              Female
            </label>
          </div>
        </div> */}
				<button type="submit" className="rounded bg-emerald-300 px-4 py-2 transition-colors duration-300 hover:bg-emerald-500 hover:text-white/90">
					Register
				</button>
			</form>
			<Link href="/sign-in" className="text-blue-400 underline underline-offset-4 transition-colors duration-300 hover:text-blue-600">
				or do you want to login ... ?
			</Link>
		</section>
	);
};

export default RegisterPage;

// import Link from "next/link";

// import { redirect } from "next/navigation";
// import ClientFlashComponent from "../../../components/ClientFlashComponent";

// const RegisterPage = () => {
//   // Kita akan membuat suatu "server actions" untuk menghandle register.
//   // "server actions" ini akan melakukan fetch ke backend, dan melakukan redirect ke "/login" apabila berhasil melakukan register. Apabila gagal pada saat fetch ke backend dan diberikan kembalian berupa error, maka kita akan redirect ke halaman register dengan URLSearchParams yang berisi error-nya.
//   const handleFormAction = async (formData: FormData) => {
//     "use server";
//     console.log(formData);

//     // Sebenarnya ini sudah dipakai di beberapa tempat
//     // sehingga ada baiknya ini dibuat menjadi satu definition tersendiri...
//     type MyResponse<T> = {
//       statusCode: number;
//       message?: string;
//       data?: T;
//       error?: string;
//     };

//     const response = await fetch("http://localhost:3000/api/users", {
//       method: "POST",
//       // Karena backendnya menerima tipe data "json" (lihat function POST pada /src/routes/users/route.ts), maka kita harus menerima bodynya dalam bentuk json juga.
//       body: JSON.stringify({
//         name: formData.get("name"),
//         username: formData.get("username"),
//         email: formData.get("email"),
//         password: formData.get("password"),
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const responseJson: MyResponse<unknown> = await response.json();

//     // !! WARNING: Bila menggunakan redirect, tidak boleh menggunakan try-catch block. Hal ini dikarenakan di dalam NextJS, redirect akan meng-throw error bernama "NEXT_REDIRECT"
//     if (!response.ok) {
//       let message = responseJson.error ?? "Something went wrong!";

//       // Harapannya di sini adalah ketika ada error, maka kita akan redirect ke halaman register dengan URLSearchParams dengan key "error" yang berisi pesan errornya, dengan asumsi bahwa error SELALU string
//       return redirect(`/register?error=${message}`);
//     }

//     // Setelah berhasil melakukan register, maka kita redirect ke halaman login
//     return redirect("/login");
//   };

//   return (
//     <section className="flex h-screen w-full flex-col items-center justify-center gap-4">
//       {/* Di sini kita akan menyelipkan ClientFlashComponent yang akan menampilkan error */}
//       {/* error yang ada pada URLSearchParams akan diterima oleh component ini dan ditampilkan error messagenya */}
//       <ClientFlashComponent />
//       <form
//         action={handleFormAction}
//         className="flex min-w-[25vw] flex-col gap-2"
//       >
//         <h1 className="text-center text-3xl font-semibold text-slate-700">
//           Register Page
//         </h1>
//         <input
//           className="rounded px-4 py-2"
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Name"
//         />
//         <input
//           className="rounded px-4 py-2"
//           type="text"
//           id="username"
//           name="username"
//           placeholder="Username"
//         />
//         <input
//           className="rounded px-4 py-2"
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email"
//         />
//         <input
//           className="rounded px-4 py-2"
//           type="password"
//           id="password"
//           name="password"
//           placeholder="Password"
//         />
//         <button
//           type="submit"
//           className="rounded bg-emerald-300 px-4 py-2 transition-colors duration-300 hover:bg-emerald-500 hover:text-white/90"
//         >
//           Register
//         </button>
//       </form>
//       <Link
//         href="/login"
//         className="text-blue-400 underline underline-offset-4 transition-colors duration-300 hover:text-blue-600"
//       >
//         or do you want to login ... ?
//       </Link>
//     </section>
//   );
// };

// export default RegisterPage;
