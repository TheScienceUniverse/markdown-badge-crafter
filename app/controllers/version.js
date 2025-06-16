const views = require ("../views");
const services = require ("../services");
const semver = require ("@sayan_shankhari/sem_ver");
const semver_req = require ("@sayan_shankhari/sem_ver/src/models/request");


async function handle_request (request) {
	let response = {};

	if (
		request .size == 0
	) {
		response ["status"] = 200;
		response ["type"] = "text/html";
		response ["data"] = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?type=version&user={Your GitHub Username}&acc={User or Organization Name}&repo={Repository Name}&branch={Branch Name}</h3>
		</body>`;
		return response;
	}

	response .status = 200;
	response .type = "text/html";


	let req_obj = semver_req .create_new_request (
		task = "generate"
		, username = request .user
		, account = request .acc
		, repository = request .repo
		, branch = request .branch
	);

	let semver_response = await semver .gen_sem_ver (req_obj);
	let model = services .prepare_model ("version", semver_response .data);
	let view = views .create_view (model);

	response .data = view ?? 'OK';

	return response;
}


module .exports = { handle_request };