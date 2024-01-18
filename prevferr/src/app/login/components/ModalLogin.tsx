import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Icon } from "@iconify/react";

interface ModalLoginProps {
	open: boolean;
	onOk: () => void;
	onCancel: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<button
				className="border border-[#1dbf73] text-[#1dbf73] px-5 py-1 rounded-xl  hover:rounded-md hover:bg-[#1dbf73] hover:text-[#fff]"
				onClick={showModal}
			>
				Join
			</button>
			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
				closable={false}
				// style={{ borderRadius: "100px" }}
				width={900}
			>
				<section className="w-full h-[35rem] flex justify-center gap-4">
					<img
						src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="w-[50%] object-cover rounded-l-lg"
					/>
					<div className="paddingYShorter2 w-[50%] flex flex-col justify-between gap-4">
						<span className="flex flex-col gap-4">
							<h3 className="text-[#252525] text-left text-xl">
								Join to enjoy the ease of participating in nation-building and
								access to other features!
							</h3>
							<span className="flex gap-2">
								<p className="text-base font-light text-[#74767e]">
									Already have an Account?
								</p>
								<p className="underline text-base text-[#74767e] cursor-pointer">
									Sign in
								</p>
							</span>
						</span>

						<span className="flex flex-col gap-4">
							<div className="border px-2 py-1 rounded-lg flex justify-start gap-4 items-center hover:border-[#084225] cursor-pointer">
								<Icon icon="ant-design:team-outlined" width={40} />
								<p>I'm Project Owner</p>
							</div>
							<div className="border px-2 py-1  rounded-lg flex justify-start gap-4 items-center hover:border-[#084225] cursor-pointer">
								<Icon icon="ant-design:idcard-twotone" width={40} />
								<p>I'm Researcher</p>
							</div>
						</span>

						<p className="text-[#74767e] font-light text-sm text-justify">
							By joining, you agree to the Prevferr Terms of Service and to
							occasionally receive emails from us. Please read our Privacy
							Policy to learn how we use your personal data.
						</p>
					</div>
				</section>
			</Modal>
		</>
	);
};

export default ModalLogin;
