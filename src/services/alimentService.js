const odoo = require("../services/odoo");
const elConstants = require("../config/constants");

class AlimentService {
	static async getAliments() {
		try {
			await odoo.connect();
			return await odoo.execute_kw(
				elConstants.ALIMENT_MODEL,
				"get_aliments",
				[[null]]
			);
		} catch (e) {
			console.error("Error while getting aliments: " + e);
			return false;
		}
	}
}

module.exports = AlimentService;
