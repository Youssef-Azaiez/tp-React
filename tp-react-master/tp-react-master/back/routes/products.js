const router = require("express-promise-router")();

const { selectionAll } = require("../controllers/products");

router.route("/all").get(selectionAll).post();

module.exports = router;
