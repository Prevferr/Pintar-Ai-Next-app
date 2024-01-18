import api from "../api";

export const getAllUsers = async () => {
	const res = await api.get(`/researchers`);
	return res.data;
};

<<<<<<< HEAD
export const PostUser = async (body: any) => {
	const res = await api.post(`/researchers`, body);
	return res.data;
};
=======
export const PostResearcher = async (body: any) => {
  const res = await api.post(`/researchers`, body);
  return res.data;
};
>>>>>>> e6186bbc0208328e13e8641aa73b1c3973207753
