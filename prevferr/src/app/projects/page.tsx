import React from "react";
import ReseacrcherCard from "../components/ReseacrcherCard";
import CategoryInput from "../components/CategoryInput";
import ProjectCard from "../components/ProjectCard";

// const ProjectsPage = () => {
// 	const [projects, setProjects] = useState([]);

// 	useEffect(() => {
// 	  const fetchProjects = async () => {
// 		const response = await fetch('/api/projects'); // Assuming you have an API route set up to handle this request
// 		const data = await response.json();
// 		setProjects(data);
// 	  };

// 	  fetchProjects();
// 	}, []);

const ProjectPage = () => {
	return (
		<section className="min-h-screen bg-[#E2E4DD]">
			<div className="paddingX border-x border-[#000] bg-[#ffb200]">
				<div className="w-full flex justify-center border-x border-[#000] h-80">
					<div className="flex flex-col justify-center items-center gap-2">
						<h1 className="font-mono font-light">List of Project</h1>
						<p className="w-[70%] text-center font-mono text-base">
							The Mux team has created some of the most respected products and
							communities in video today.
						</p>
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-t border-[#000]">
				<div className="w-full flex justify-center items-center border-x border-[#000] h-32 px-4">
					<div className="w-[60%] flex justify-end items-center">
						<button className="bg-[#242628] px-8 py-3.5 rounded-l-full font-mono text-[#fff]">
							FILTER BY CATEGORY :
						</button>
						<input
							className="rounded-r-full w-[60%] border h-14 px-4 transition-colors duration-300 focus:border-[#FFB200] placeholder:font-mono placeholder:text-sm"
							placeholder="Find journals here..."
						/>
						{/* <CategoryInput /> */}
					</div>
				</div>
			</div>
			<div className="paddingX border-x  border-t border-[#000]">
				<div className="w-full border-x border-[#000] p-8">
					<div className="grid grid-cols-3 gap-2">
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;
