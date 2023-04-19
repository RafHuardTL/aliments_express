const express = require("express");
const alimentService = require("../services/alimentService");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Bonjour de la part du contrôleur Aliment!");
});

router.get("/aliments", (req, res) => {
	alimentService.getAliments().then((data) => {
		res.send(data);
	});
});

module.exports = router;
