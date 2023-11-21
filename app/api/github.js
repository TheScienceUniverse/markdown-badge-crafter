const https = require ('node:https');
const controllers = require ("../controllers");
const helper = require ("../helpers");

function fetch (request_inputs) {
	let query_assets = create_query_assets (request_inputs);
	const options = {
		"hostname" : query_assets ["host"]
		, "path" : query_assets ["path"]
		, "method": 'GET'
		, "headers" : {
			"User-Agent" : query_assets ["agent"]
			, "Content-Type" : "application/json"
		} //'Mozilla/5.0'
	};

	const promise = new Promise ((accept, reject) => {
		https .get (options, (response) => {
			// console .log ('Status Code:', response .statusCode);
			// console .log ('Headers:', response .headers);

			if (response .statusCode == 200) {
				helper .clear_data_buffer ();
			}

			response .on ("data", (chunk) => {
				raw_data += chunk .toString();
			});

			response .on ("end", () => {
				accept ();
			});
		}) .on ("error", (error) => {
			reject ("... Error");
		}) .end (raw_data);
	});

	return promise;
}

function create_query_assets (request_inputs) {
	return {
		"host": "api.github.com"
		, "path": "/repos/" + request_inputs ["path"] + "/" + request_inputs ["repo"] + "/commits"
		, "agent":  request_inputs ["user"]
	};
}

module .exports = { fetch };