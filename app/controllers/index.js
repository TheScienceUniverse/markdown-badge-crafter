function handle_request (request_inputs) {
	let response = {};

	if (request_inputs .size > 0) {
		if (validate_request_inputs (request_inputs)) {
			response ["status"] = 200;
			response ["type"] = "text/html";
			response ["data"] = "Valid Request...Processing";
		} else {
			response ["status"] = 400;
			response ["type"] = "text/html";
			response ["data"] = "Invalid Request";
		}
	} else {
		response ["status"] = 400;
		response ["type"] = "text/html";
		response ["data"] = "No Input Given";
	}

	return response;
}

function validate_request_inputs (request_inputs) {
	let decision = false;

	switch (request_inputs .get ("type")) {
		case "version":
			decision = is_valid (request_inputs .get ("user"))
				&& is_valid (request_inputs .get ("path"))
				&& is_valid (request_inputs .get ("repo"))
				&& is_valid (request_inputs .get ("branch"));
			break;
		case undefined:
		default:
			break;
	}

	return decision;
}

function is_valid (variable) {
	return (variable != undefined && variable != null);
}

module .exports = { handle_request };