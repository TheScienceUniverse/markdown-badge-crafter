const helper = require ("../helpers/");
const github = require ("../api/github.js");
const version = require ("./version.js");
const badge = require ("../views/badge.js");

global .raw_data = "";

async function handle_request (request_inputs) {
	let response = {};

	if (request_inputs .size == 0) {
		response ["status"] = 200;
		response ["type"] = "text/html";
		response ["data"] = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?type=version&user={Your GitHub Username}&path={User or Organization Name}&repo={Repository Name}&branch={Branch Name}</h3>
		</body>`;
		return response;
	}

	request_inputs = helper .re_format_request_inputs (request_inputs);

	if (!helper .validate_request_inputs (request_inputs)) {
		response ["status"] = 400;
		response ["type"] = "text/html";
		response ["data"] = "Invalid Request";

		return response;
	}

	response ["status"] = 200;
	response ["type"] = "text/html";
	response ["data"] = "OK";

	// Need to send the following block to process_request function
	helper .clear_data_buffer ();	// USELESS for quick-refresh
	await github .fetch (request_inputs);
	response ["data"] = badge .create (
		request_inputs
		, version .get_latest_version (raw_data)
	);

	return response;
}

/*
async process_request (request_inputs) {}
*/

module .exports = { handle_request };