const express = require("express");
const OdooAwait = require("odoo-await");

const MODEL = "xmlrpc_base.aliment";

const odoo = new OdooAwait({
	baseUrl: "http://10.0.0.250:8069",
	db: "test_rhuard_demo_full",
	username: "admin",
	password: "admin",
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Bonjour le monde!");
});

app.get("/aliments", (req, res) => {
	getAliments().then((data) => {
		res.send(data);
	});
});

async function getAliments() {
	try {
		await odoo.connect();
		return await odoo.execute_kw(MODEL, "get_aliments", [[null]]);
	} catch (e) {
		console.error("An error occured: " + e);
		return false;
	}
}

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
