var express = require("express");
var router = express.Router();
var { validateFormInput } = require("../utils/validation");

router.post("/", function (req, res) {
  const errors = validateFormInput(req.body);

  if (errors.length > 0) {
    const errorDetails = {
      message: "Erro de validação",
      status: 400,
      fields: errors.map((err) => err.msg),
    };
    return res.status(400).render("error", { error: errorDetails });
  }

  return res.status(200).render("success");
});

module.exports = router;
