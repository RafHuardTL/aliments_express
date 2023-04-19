const express = require("express");
const alimentController = require("./src/controllers/alimentController");

const app = express();
const port = 3000;

app.use(alimentController);

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
