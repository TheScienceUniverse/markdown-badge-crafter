const helper = require ("../utils/index.js");
const semver = require ("@sayan_shankhari/sem_ver");
const general_handler = require ("./general.js");
const version_handler = require ("./version.js");


async function handle_request (request) {
	let response = {};

	switch (request .handler) {
		case "general":
			response = general_handler. handle_request (request .inputs);
			break;
		case "version":
			response = await version_handler. handle_request (request .inputs);
			break;
		default:
			response .status = 200;
			response .type = "text/html";
			response .data = `<body>
<h2>Please use the following paramerets after default URL</h2>
<h3>?type=version&user={Your GitHub Username}&acc={User or Organization Name}&repo={Repository Name}&branch={Branch Name}</h3>
</body>`;
			break;
	}

	return response;
}


module .exports = { handle_request };