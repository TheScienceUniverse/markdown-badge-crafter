const util = require ("../utils");
const host = require ("../api/host.js");


function validate_URL (url_obj) {
	// console .log (url_obj .pathname);
	host .filter_host_URL_prefix (url_obj);
	let path_validation_data = validate_URL_paths (url_obj);
	let param_validation_data = validate_URL_params (url_obj);

	return {
		"valid_path" : path_validation_data .valid
		, "path" : path_validation_data .path
		, "valid_param" : param_validation_data .valid
		, "handler" : param_validation_data .handler
		, "inputs" : param_validation_data .inputs
	};
}

function validate_URL_paths (url_obj) {
	let validation_data = {
		"valid" : true
		, "path" : ""
	};

	switch (url_obj .pathname) {
		case "/":
			validation_data .path = "root";
			break;
		case "/app":
		case "/app/":
			validation_data .path = "main";
			break;
		case "/favicon.ico":
			validation_data .path = "icon";
			break;
		case "/font":
		case "/font/":
		case "/font/Droid_Sans_Mono/DroidSansMono.ttf":
			validation_data .path = "font";
			break;
		default:
			validation_data .path = "other";
			validation_data .valid = false;
			break;
	}

	return validation_data;
}

function validate_URL_params (url_obj) {
	let req_obj = Object .fromEntries (url_obj .searchParams);

	if (req_obj .type == undefined) {
		return { "valid" : false };
	}

	let validation_data = {
		"valid" : true
		, "handler" : ""
		, "inputs" : req_obj
	};

	switch (req_obj .type) {
		case "general":
			validation_data .handler = "general";
			validation_data .valid = util .if_valid (req_obj .prop)
				&& util .if_valid (req_obj .val);
			break;
		case "version":
			validation_data .handler = "version";
			validation_data .valid = util .if_valid (req_obj .user)
				&& util .if_valid (req_obj .acc)
				&& util .if_valid (req_obj .repo)
				&& util .if_valid (req_obj .branch);
			break;
		default:
			validation_data .valid = false;
			break;
	}

	return validation_data;
}


module .exports = { validate_URL };