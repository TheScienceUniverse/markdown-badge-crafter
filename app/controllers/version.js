function get_latest_version (raw_data) {
	const commit_list = JSON .parse (raw_data);
	let version = "";

	for (commit of commit_list) {
		version = commit ["commit"] ["message"] .split (" ") [0];	// version tag
		version = version .match (/[^a-zA-Z]*/gi) ;					// version number
		version = version .filter (arg => arg != '') [0];			// get numbers

		if (version != undefined) {
			break;
		}
	}

	if (
		version == ""
		|| version == null
		|| version ==  undefined
	) {
		version = "0.0.0";
	}

	return version;
}

module .exports = { get_latest_version };