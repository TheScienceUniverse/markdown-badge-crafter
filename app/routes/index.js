const controller = require ("../controllers/");
const path = require ('path');
const fs = require ('fs');


async function route (request) {
	let response = {
		status : 200
		, type : "text/plain"
		, data : "N/A"
		, length : 3
	};

	switch (request .path) {
		case "root":
		case "main":
			response .type = "text/html";
			let ctlr_data = await arrange_handler (request, response);
			response .data = ctlr_data ?? "Okay";
			response .length = response .data .length;
			break;
		case "icon":
			response .type = "image/x-icon";
			var icon_path = path .join ("./", 'public', 'favicon.ico');

			fs .readFile (icon_path, (err, data) => {
      			if (err) {
					response .status = 404;
					response .data = "Favicon Error";
					response .length = 0;
				} else {
					response .data = data;
					response .length = response .data .length;
				}
			});
			break;
		case "font":
			response .type = "font/ttf";
			var font_path = path .join ("./", 'font', 'Droid_Sans_Mono/DroidSansMono.ttf');

			fs .readFile (icon_path, (err, data) => {
      			if (err) {
					response .status = 404;
					response .data = "Font Error";
					response .length = 0;
				} else {
					response .data = data;
					response .length = response .data .length;
				}
			});
			break;
		case "other":
		default:
			response .status = 501;
			response .type = "text/html";
			response .data = "Request Not Implemented";
			response .length = response .data .length;
			break;
	}

	// console .log (request, response);

	return response;
}

async function arrange_handler (request, response) {
	if (
		request .valid_path
		&& request .valid_param
	) {
		return controller .handle_request (request, response);
	}
}


module .exports = { route };