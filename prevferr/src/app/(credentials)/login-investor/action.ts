"use server";

// import { getUserByEmail } from "@/db/models/user";
// import { compareTextWithHash } from "@/db/utils/hash";
import { compareTextWithHash } from "../../../../helpers/utils/hash";
import { createToken } from "../../../../helpers/lib/jwt";

import { redirect } from "next/navigation";

import { z } from "zod";

import { cookies } from "next/headers";

export const doLogin = async (formData: FormData) => {
  const loginInputSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  // Mengambil data dari form
  const email = formData.get("email");
  const password = formData.get("password");

  // Memvalidasi data input dengan zod
  const parsedData = loginInputSchema.safeParse({
    email,
    password,
  });

<<<<<<< HEAD
	if (!parsedData.success) {
		const errPath = parsedData.error.issues[0].path[0];
		const errMessage = parsedData.error.issues[0].message;
		const errFinalMessage = `${errPath} - ${errMessage}`;
=======
  if (!parsedData.success) {
    // !! Ingat, jangan di-throw kecuali ingin menghandle error di sisi client via error.tsx !
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;
>>>>>>> 93dbe06e53e6a24713742a85fe232a5d24935218

    // Mengembalikan error via redirect
    return redirect(`http://localhost:3000/login?error=${errFinalMessage}`);
  }

  // Memvalidasi data terhadap database
  const getUserByEmail = async (email: string) => {
    const user = await prisma.investor.findUnique({
      where: { email },
    });
    return user;
  };

  const user = await getUserByEmail(parsedData.data.email);

  if (!user || !compareTextWithHash(parsedData.data.password, user.password)) {
    return redirect(`http://localhost:3000/login?error=Invalid%20credentials`);
  }

<<<<<<< HEAD
	// Membuat Payload dan Token
	const payload = {
		id: user.id,
		email: user.email,
		firstname: user.firstname,
		lastname: user.lastname,
	};
	// console.log(payload, "INI PAYLOAD BOSSSSS");
=======
  // Membuat Payload dan Token
  const payload = {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  };
  console.log(payload, "INI PAYLOAD BOSSSSS");
>>>>>>> 93dbe06e53e6a24713742a85fe232a5d24935218

  const token = createToken(payload);

  // Menyimpan token dengan menggunakan cookies
  cookies().set("token", token, {
    // Meng-set cookie agar hanya bisa diakses melalui HTTP(S)
    httpOnly: true,
    // Meng-set cookie agar hanya bisa diakses melalui HTTPS, karena ini hanya untuk development, maka kita akan set false
    secure: false,
    // Meng-set expiration time dari cookies
    expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
    // Meng-set cookie agar hanya bisa diakses melalui domain yang sama
    sameSite: "strict",
  });

  // Melakukan redirect ke halaman "/dashboard/jokes"
  return redirect(`http://localhost:3000/welcome-investor`);

<<<<<<< HEAD
	cookies().set("token", token, {
		httpOnly: true,
		secure: false,
		expires: new Date(Date.now() + 5000 * 60 * 60), // 1 hour
		sameSite: "strict",
	});

	return redirect(`http://localhost:3000/welcome-investor`);
=======

>>>>>>> 93dbe06e53e6a24713742a85fe232a5d24935218
};
