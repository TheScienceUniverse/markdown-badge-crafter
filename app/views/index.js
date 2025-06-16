function create_view (model) {
	return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<svg
	xmlns="http://www.w3.org/2000/svg"
	version="1.1"
	baseprofile="full"
	width="` + model .box_width + `" height="` + model .box_height + `"
	viewBox="0 0 ` + model .box_width + ` ` + model .box_height + `"
	style="border-radius:0px; border-radius: 5px"
>
	<defs>
		<style type="text/css">
			@font-face {
				font-family: "Mono_Font";
				src: url("` + model .font_face + `") format("` + model .font_format + `");
			}
		</style>
	</defs>
	<title>Shield</title>
	<g
		id="text-fields"
		shape-rendering="crispEdges"
		font-family="Mono_Font, monospace"
		font-weight="bold"
		text-rendering="geometricPrecision"
		dominant-baseline="middle"
		text-anchor="middle"
		font-size="` + model .font_size + `px"
	>
		<g id="Box_1">
			<rect x="` + model .box_1_posX + `" width="` + model .box_1_width + `" height="20" fill="` + model .color_1 + `"/>
			<text x="` + model .text_1_mid_posX + `" y="52.5%" fill="white">` + model .text_1 + `</text>
		</g>
		<g id="Box_2">
			<rect x="` + model .box_2_posX + `" width="` + model .box_2_width + `" height="20" fill="` + model .color_2 + `"/>
			<text x="` + model .text_2_mid_posX + `" y="52.5%" fill="black">` + model .text_2 + `</text>
		</g>
	</g>
</svg>`;
}


module .exports = { create_view };