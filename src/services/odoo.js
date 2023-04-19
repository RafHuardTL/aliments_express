const OdooAwait = require("odoo-await");
const elConstants = require("../config/constants");

const odoo = new OdooAwait({
	baseUrl:
		elConstants.PROTOCOL + "://" + elConstants.URL + ":" + elConstants.PORT,
	db: elConstants.DB_NAME,
	username: elConstants.USERNAME,
	password: elConstants.PASSWORD,
});

module.exports = odoo;
