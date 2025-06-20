const views = require ("../views");
const services = require ("../services");
const semver = require ("@sayan_shankhari/sem_ver");


async function handle_request (request) {
	let data = "";

	if (
		0 == request .size
		|| null == request
		|| undefined == request
	) {
		data = `<body>
			<h2>Please use the following paramerets after default URL</h2>
			<h3>?type=version&user={Your GitHub Username}&acc={User or Organization Name}&repo={Repository Name}&branch={Branch Name}</h3>
		</body>`;
		return data;
	}

	let req_obj = semver .create_new_request (
		task = "generate"
		, username = request .user
		, account = request .acc
		, repository = request .repo
		, branch = request .branch
	);

	let version = await semver .gen_sem_ver (req_obj);
	let model = services .prepare_model ("version", version);
	let view = views .create_view (model);

	data = view ?? 'OK';

	return data;
}


module .exports = { handle_request };