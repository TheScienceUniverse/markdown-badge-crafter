const model = require ("../models");

function prepare_model (property, value) {
	return model .create_model (property, value);
}

module .exports = { prepare_model };