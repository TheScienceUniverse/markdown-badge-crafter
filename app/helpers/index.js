function if_valid (variable) {
	return (variable != undefined && variable != null);
}

function re_format_request_inputs (request_inputs) {
	return {
		"type" : request_inputs .get ("type")
		, "user" : request_inputs .get ("user")
		, "path" : request_inputs .get ("path")
		, "repo" : request_inputs .get ("repo")
		, "branch" : request_inputs .get ("branch")
	}
}

function validate_request_inputs (request_inputs) {
	if (request_inputs .size > 0) {
		return false;
	}

	let decision = false;

	switch (request_inputs .type) {
		case "version":
			decision = if_valid (request_inputs .user)
				&& if_valid (request_inputs .path)
				&& if_valid (request_inputs .repo)
				&& if_valid (request_inputs .branch);
			break;
		case undefined:
		default:
			break;
	}

	return decision;
}

function clear_data_buffer () {
	raw_data = "";
}

module .exports = { if_valid, re_format_request_inputs, validate_request_inputs, clear_data_buffer};