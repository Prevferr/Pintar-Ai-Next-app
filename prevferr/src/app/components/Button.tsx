import React from "react";

const Button = ({ btnClass, title }: ButtonInterface) => {
	return (
		<>
			<button className={`btn ${btnClass}`}>{title}</button>
		</>
	);
};

export default Button;
