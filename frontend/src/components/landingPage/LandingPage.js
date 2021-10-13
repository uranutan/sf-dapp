import React from "react";

const logo = require("./sf_icon.png");
// const bgHeader = require("/header-bg.jpg");

export function LandingPage() {
	var sectionStyle = {
		backgroundImage: `url(header-bg.jpg)`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
		height: "100vh",
	};
	return (
		<div>
			<div
				className='container-fluid max-width: 100%'
				style={sectionStyle}>
				<div
					className='text-center'
					style={{
						color: "#ffffff",
						marginTop: "50%",
					}}>
					<p>Reinventing the path to discovery</p>
					<h1
						style={{
							textTransform: "uppercase",
						}}>
						Science Fund
					</h1>
				</div>
			</div>
			<div style={{ height: "100vh" }}></div>
		</div>
	);
}
