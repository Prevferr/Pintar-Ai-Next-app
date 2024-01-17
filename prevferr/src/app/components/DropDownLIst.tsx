import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { Icon } from "@iconify/react";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: (
			<div className="flex justify-start gap-4 items-center">
				<Icon icon="mingcute:down-line" />
				<p>Text</p>
			</div>
		),
	},
	{
		key: "2",
		label: (
			// <a
			// 	target="_blank"
			// 	rel="noopener noreferrer"
			// 	href="https://www.aliyun.com"
			// >
			// 	2nd menu item
			// </a>
			<div className="flex justify-start gap-4 items-center">
				<Icon icon="mingcute:down-line" />
				<p>Text</p>
			</div>
		),
	},
];

const DropDownList: React.FC = () => {
	return (
		<Dropdown
			menu={{ items }}
			placement="bottom"
			arrow={{ pointAtCenter: true }}
		>
			<div className="flex justify-start gap-2 px-3 py-1 rounded-lg items-center cursor-pointer">
				<li>Prevferr Pro</li>
				<Icon icon="mingcute:down-line" />
			</div>
		</Dropdown>
	);
};

export default DropDownList;
