const http = require ('node:http');
const https = require ('node:https');
const config = require ("./config/");
const router = require ("./routes/");

http .createServer (async (req, res) => {
	const url_obj = new URL (req .url, `http://${req .headers .host}`);
	let response = await router .get (url_obj);

	res .writeHead (response .status, {
		'Content-Type': response .type,
		'Content-Length': response .data .toString() .length,
		'Expires': new Date() .toUTCString()
	});

	res .end (response .data);
}) .listen (config .port, config .host, () => {
	console .log (`Server running at http://${config .host}:${config .port}/`);
});