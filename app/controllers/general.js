const views = require ("../views");
const services = require ("../services");

function handle_request (request) {
	let data = "";

	if (
		request .size == 0
	) {
		data = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?type=general&prop={Property Name}&val={Property Value}</h3>
		</body>`;
		return data;
	}

	let model = services .prepare_model (request .prop, request .val);
	let view = views .create_view (model);

	data = view ?? 'OK';

	return data;
}


module .exports = { handle_request };