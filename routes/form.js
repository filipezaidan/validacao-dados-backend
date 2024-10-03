var express = require("express");
var router = express.Router();
var { validateFormInput } = require("../utils/validation");

router.post("/", function (req, res) {
  const errors = validateFormInput(req.body);

  if (errors.length > 0) {
    console.log({ errors });
    return res.status(400).send({ errors });
  }

  return res.status(200).send("Formulário recebido com sucesso!");
});

module.exports = router;
