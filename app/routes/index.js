const controller = require ("../controllers/");

function get (url_obj) {
	let response = {};

	switch (url_obj .pathname) {
		case "/":
			response = controller .handle_request (url_obj .searchParams);
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