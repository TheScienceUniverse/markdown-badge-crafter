import http from "node:http";
import https from "node:https";
import serverless from "serverless-http";
const config = require ("../../app/config");
const router = require ("../../app/routes");
const middleware = require ("../../app/middleware");


const app = http .createServer (async (req, res) => {
	const url_obj = new URL (req .url, `http://${req .headers .host}`);
	let validation_data = middleware .validate_URL (url_obj);

	let response = await router .route (validation_data);

	res .writeHead (response .status, {
		'Content-Type': response .type,
		'Content-Length': response .length,
		'Expires': new Date() .toUTCString()
	});

	res .end (response .data);
}) .listen (config .port, config .host, () => {
	console .log (`Server running at http://${config .host}:${config .port}/`);
});


module .exports .handler = serverless (app);