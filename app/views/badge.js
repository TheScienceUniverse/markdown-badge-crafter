function create (request_inputs = {}, version) {
	return provide_svg_data ({
		...request_inputs
		, "version" : version
		, "color" : get_branch_color (request_inputs .branch)
		, "dimensions" : calculate_dimensions ({"branch" : request_inputs .branch, "version" : version})
	});
}

module .exports = { create };

function calculate_dimensions (info = {}) {
	let shield_dimensions = {};

	return shield_dimensions;
}

function get_branch_color (branch = "master") {
	let color = "";

	switch (branch) {
		case "stable":
			color = "darkgreen";
			break;
		case "master":
		case "main":
			color = "blue";
			break;
		case "dev":
			color = "red";
			break;
		default:
			color = "gray";
			break;
	}

	return color;
}

function provide_svg_data (svg_info = {}) {
	return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		version="1.1"
		baseprofile="full"
		width="180" height="20"
		viewBox="0 0 450 50"
		style="border-radius:0px; border:1px solid black;"
	>
		<title>Badge</title>
		<g
			id="logo"
			width="50" height="50"
			viewBox="0 0 50 50"
			fill="none"
			style="border:1px solid black"
		>
			<polygon points="05,35 25,25 45,35 25,45" stroke="#f03c2e" fill="white" stroke-width="2.5"/>
			<polygon points="05,25 25,15 45,25 25,35" stroke="#f03c2e" fill="white" stroke-width="2.5"/>
			<polygon points="05,15 25,05 45,15 25,25" stroke="#f03c2e" fill="white" stroke-width="2.5"/>
		</g>
		<g
			id="text-fields"
			shape-rendering="crispEdges"
			font-family="Andale Mono, Courier New, Courier, FreeMono, OCR A Std, DejaVu Sans Mono, monospace"
			font-weight="bold"
			text-rendering="geometricPrecision"
			dominant-baseline="middle"
			text-anchor="middle"
			font-size="40"
		>
			<g id="Part_1">
				<rect x="50" width="200" height="50" fill="` + svg_info ["color"] + `"/>
				<text fill="white" x="150" y="55%">
					` + svg_info ["branch"] + `
				</text>
			</g>
			<g id="Part_2">
				<rect x="250" width="200" height="50" fill="#90e59a"/>
				<text fill="black" x="350" y="55%">
					v` + svg_info ["version"] + `
				</text>
			</g>
		</g>
	</svg>`;
}