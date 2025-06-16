function if_valid (variable) {
	return (variable != undefined && variable != null);
}

function re_format_request_inputs (request_inputs) {
	return {
		"type" : request_inputs .get ("type")
		, "user" : request_inputs .get ("user")
		, "acc" : request_inputs .get ("acc")
		, "repo" : request_inputs .get ("repo")
		, "branch" : request_inputs .get ("branch")
	}
}

function validate_request_inputs (request_inputs) {
	if (request_inputs .size > 0) {
		return false;
	}

	let decision = false;

	switch (request_inputs .task) {
		case "version":
			decision = if_valid (request_inputs .user)
				&& if_valid (request_inputs .acc)
				&& if_valid (request_inputs .repo)
				&& if_valid (request_inputs .branch);
			break;
		case undefined:
		default:
			break;
	}

	return decision;
}

function clear_data_buffer () {
	raw_data = "";
}

function itemize_commit_list (raw_data) {
	return JSON .parse (raw_data);
}

function filter_message_list (commit_list) {
	var message_list = [];

	class Message {
		constructor (type = "", scope = "", gist = "") {
			this .type = type;
			this .scope = scope;
			this .gist = gist;
		}
	}

	for (var i = 0; i < commit_list.length; i++) {
		let msg = commit_list [i] .commit .message .split ('\n') [0];

		let message = new Message ();

		if (msg .includes (':')) {
			message .type = msg .split (':') [0] .split (' ') [0];
			message .scope = msg .split (':') [0] .split (' ') [1] ?.slice (1, -1);
			message .gist = msg .split (':') [1] .substring (1);
		} else {
			message .type = "any";
			message .scope = "N/A";
			message .gist = msg;
		}

		//console .log (message);
		message_list .push (message);
	}

	return message_list;
}


module .exports = { if_valid, re_format_request_inputs, validate_request_inputs, clear_data_buffer, itemize_commit_list, filter_message_list};