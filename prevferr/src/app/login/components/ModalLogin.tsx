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
				className="border border-[#fff] px-3 py-1 rounded-lg hover:text-[#fff] hover:bg-[#1dbf73]"
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
				style={{ borderRadius: "100px" }}
				width={900}
			>
				<section className="w-full flex justify-center gap-4">
					<img
						src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="w-[50%] h-96"
					/>
					<div className="w-[50%] flex flex-col gap-4">
						<p>Create a new account</p>
						<p>Already have an Account?</p>
						<div className="border p-2 rounded-lg flex justify-start gap-4 items-center">
							<Icon icon="ant-design:idcard-twotone" width={40} />
							<p>I'm Project Owner</p>
						</div>
						<div className="border p-2 rounded-lg flex justify-start gap-4 items-center">
							<Icon icon="ant-design:idcard-twotone" width={40} />
							<p>I'm Researcher</p>
						</div>
					</div>
				</section>
			</Modal>
		</>
	);
};

export default ModalLogin;
