// import LoadToTop from "../../helpers/utils/LoadToTop";
import { EdgeStoreProvider } from "@/lib/edgestore";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<NextAuthProvider>
					<section>
						<Navbar />
						<EdgeStoreProvider>{children}</EdgeStoreProvider>
						<Footer />
					</section>
				</NextAuthProvider>
			</body>
		</html>
	);
}
