const controller = require ("../controllers/");
const path = require ('path');
const fs = require ('fs');


async function route (request) {
	let response = {};

	switch (request .path) {
		case "root":
			response .status = 200;
			response .type = "text/html";
			response .data = "Okay";
			response = arrange_handler (request);
			break;
		case "icon":
			response .status = 200;
			response .type = "image/x-icon";
			let icon_path = path .join ("./", 'public', 'favicon.ico');

			fs .readFile (icon_path, (err, data) => {
      			if (err) {
					response .status = 404;
				} else {
					response .data = data;
				}
			});
			break;
		default:
			response .status = 501;
			response .type = "text/html";
			response .data = "Page Not Found";
			break;
	}

	return response;
}

async function arrange_handler (request) {
	if (
		request .valid_path
		&& request .valid_param
	) {
		return controller .handle_request (request);
	}
}


module .exports = { route };