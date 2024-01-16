import { z } from "zod";



const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  education: z.string(),
  scope: z.string(),
  institution: z.string(),
  profileImage: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
  background: z.string(),
  gender: z.string(),
  role: z.string(),
  location: z.string(),
});

export default schema;
