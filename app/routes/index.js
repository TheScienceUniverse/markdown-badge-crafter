const controller = require ("../controllers/");

async function get (url_obj) {
	let response = {};

	switch (url_obj .pathname) {
		case "/":
			response = await controller .handle_request (url_obj .searchParams);
			break;
		default:
			response ["status"] = 501;
			response ["type"] = "text/html";
			response ["data"] = "Page Not Found";
			break;
	}

	return response;
}

module .exports = { get };