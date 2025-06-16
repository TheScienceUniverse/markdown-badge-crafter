class Model {
	constructor (property = "property", value = "value") {
		this .text_1 = property;
		this .text_2 = value;
		this .length_1 = this .text_1 .length;
		this .length_2 = this .text_2 .length;
		this .font_face = "../font/Droid_Sans_Mono/DroidSansMono.ttf"; // "https://fonts.googleapis.com/css2?family=Droid+Sans+Mono&display=swap";
		this .font_format = "truetype"; // "woff2"
		this .font_size = 11;
		this .font_height = this .font_size - 1;
		this .font_width = (this .font_height * 3) / 5;
		this .box_height = 2 * this .font_height;
		this .box_1_width = (this .length_1 + 2) * this .font_width;
		this .box_2_width = (this .length_2 + 2) * this .font_width;
		this .box_width = this .box_1_width + this .box_2_width;
		this .box_1_posX = 0;
		this .box_2_posX = this .box_1_width;
		this .text_1_mid_posX = this .box_1_posX + (this .box_1_width / 2);
		this .text_2_mid_posX = this .box_2_posX + (this .box_2_width / 2);
		this .color_1 = "#555555";
		this .color_2 = "magenta";
	}
}

function create_model (property, value) {
	return new Model (property, value);
}


module .exports = { create_model };