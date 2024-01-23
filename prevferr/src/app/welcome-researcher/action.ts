"use server"
// Import cookies dari next/headers
import { cookies } from "next/headers";
// Import redirect dari next/navigation
import { redirect } from "next/navigation";

const handleLogout = () => {
  // Menghapus cookie token jika ada
  cookies().get("token") && cookies().delete("token");

  // Redirect ke halaman login
  redirect("/");
};

export default handleLogout;
