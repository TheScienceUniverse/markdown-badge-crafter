const http = require ('node:http');
const https = require ('node:https');
const config = require ("./config");
const router = require ("./routes");
const middleware = require ("./middleware");


http .createServer (async (req, res) => {
	const url_obj = new URL (req .url, `http://${req .headers .host}`);
	let validation_data = middleware .validate_URL (url_obj);

	let response = {
		status : 200
		, type : "text/plain"
		, data : "N/A"
	};

	response = await router .route (validation_data);

	response .length = (
		response .data != undefined
		|| response .data != null
	) ? response .data .toString() .length : 0;

	res .writeHead (response .status, {
		'Content-Type': response .type,
		'Content-Length': response .length,
		'Expires': new Date() .toUTCString()
	});

	res .end (response .data);
}) .listen (config .port, config .host, () => {
	console .log (`Server running at http://${config .host}:${config .port}/`);
});