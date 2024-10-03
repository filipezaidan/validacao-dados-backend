var express = require("express");
var router = express.Router();

router.post("/", function (req, res) {
  const {
    studentName,
    day,
    month,
    year,
    motherName,
    fatherName,
    phone,
    email,
    grade,
    shift,
    activities,
  } = req.body;

  let errors = [];

  if (
    !studentName ||
    !day ||
    !month ||
    !year ||
    !motherName ||
    !fatherName ||
    !phone ||
    !email ||
    !grade ||
    !shift
  ) {
    errors.push({ msg: "Por favor, preencha todos os campos obrigatórios." });
  }

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year > 1900 ||
    year <= new Date().getFullYear()
  ) {
    errors.push({ msg: "Data de nascimento inválida." });
  }

  if (!email.includes("@")) {
    errors.push({ msg: "E-mail inválido." });
  }

  const validDDDs = [11, 21, 31, 41, 51, 61, 71, 81, 91];
  let ddd = parseInt(phone.substring(0, 2));
  if (!validDDDs.includes(ddd)) {
    errors.push({ msg: "DDD inválido." });
  }

  if (activities && activities.length > 3) {
    errors.push({ msg: "No máximo 3 atividades extracurriculares." });
  }

  if (errors.length > 0) {
    console.log({ errors });
    res.status(400).render("errorPage", { errors });
    res.send("Formulário recebido com sucesso!");
  }
});

module.exports = router;
