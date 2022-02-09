const router = require("express-promise-router")();

const {
  selectionC,
  selectionV,
  selectionLC,
  selectionCm,
  selectionP,
} = require("../controllers/users");

router
  .route("/")
  .get(selectionC)
  .get(selectionV)
  .get(selectionP)
  .get(selectionCm)
  .get(selectionLC)
  .post();

module.exports = router;
