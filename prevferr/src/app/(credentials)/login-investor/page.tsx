import Link from "next/link";
import ClientFlashComponent from "@/app/components/ClientFlashComponent";
import { doLogin } from "./action";

const LoginPage = () => {
	return (
		<>
			<section className="min-h-screen flex items-stretch text-white ">
				<div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
					<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
					<div className="w-full px-24 z-10">
						<h1 className="text-5xl font-bold text-left tracking-wide">Login as Investor</h1>
						<p className="text-3xl my-4">Create your own Project and makes your dream comes true. Build your own project with many Researchers</p>
					</div>
				</div>
				<div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
					<div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
						<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
					</div>
					<div className="w-full py-6 z-20">
						<form action={doLogin} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
							<ClientFlashComponent />
							<div className="pb-2 pt-4">
								<input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" required />
							</div>
							<div className="pb-2 pt-4">
								<input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" required />
							</div>
							<div className="text-right text-black">
								<Link href={"/register-investor"}>
									Don't have an investor account? <span className="hover:underline hover:text-blue-600">Register</span>
								</Link>
							</div>
							<div className="px-4 pb-2 pt-4">
								<button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-green-600 focus:outline-none">sign in</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
