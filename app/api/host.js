function filter_host_URL_prefix (url_obj) {
	if ("/.netlify/functions/" == url_obj .pathname .substring (0, 20)) {
		url_obj .pathname = url_obj .pathname .substring (20);
	}
}


module .exports = { filter_host_URL_prefix };