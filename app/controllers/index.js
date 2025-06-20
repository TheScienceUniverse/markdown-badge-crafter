const helper = require ("../utils/index.js");
const semver = require ("@sayan_shankhari/sem_ver");
const general_handler = require ("./general.js");
const version_handler = require ("./version.js");


async function handle_request (request) {
	switch (request .handler) {
		case "general":
			data = general_handler. handle_request (request .inputs);
			break;
		case "version":
			data = await version_handler. handle_request (request .inputs);
			break;
		default:
			data = `<body>
<h2>Please use the following paramerets after default URL</h2>
<h3>?type=version&user={Your GitHub Username}&acc={User or Organization Name}&repo={Repository Name}&branch={Branch Name}</h3>
</body>`;
			break;
	}

	return data;
}


module .exports = { handle_request };