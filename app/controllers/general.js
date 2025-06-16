const views = require ("../views");
const services = require ("../services");

function handle_request (request) {
	let response = {};

	if (
		request .size == 0
	) {
		response ["status"] = 200;
		response ["type"] = "text/html";
		response ["data"] = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?type=general&prop={Property Name}&val={Property Value}</h3>
		</body>`;
		return response;
	}

	response .status = 200;
	response .type = "text/html";

	let model = services .prepare_model (request .prop, request .val);
	let view = views .create_view (model);

	response .data = view ?? 'OK';

	return response;
}


module .exports = { handle_request };