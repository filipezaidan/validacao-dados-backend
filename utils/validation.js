function validateRequiredFields(data) {
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
  } = data;
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
  return errors;
}

function validateDate(day, month, year) {
  let errors = [];
  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > new Date().getFullYear()
  ) {
    errors.push({ msg: "Data de nascimento inválida." });
  }
  return errors;
}

function validateEmail(email) {
  let errors = [];
  if (!email.includes("@")) {
    errors.push({ msg: "E-mail inválido." });
  }
  return errors;
}

function validatePhone(ddd, phone, extension) {
  const validDDDs = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];
  let errors = [];
  let dddInt = parseInt(ddd);
  let phoneInt = parseInt(phone);
  let extensionInt = parseInt(extension);

  if (!validDDDs.includes(dddInt)) {
    errors.push({ msg: "DDD inválido." });
  }

  if (!(phone.length === 8 || phone.length === 9)) {
    errors.push({ msg: "Número de telefone deve ter 8 ou 9 dígitos." });
  }

  if (
    extension &&
    extension.length > 0 &&
    (extensionInt < 100 || extensionInt > 9999)
  ) {
    errors.push({ msg: "Ramal deve ter entre 3 e 4 dígitos." });
  }

  return errors;
}

function validateActivities(activities) {
  let errors = [];
  if (activities && activities.length > 3) {
    errors.push({ msg: "No máximo 3 atividades extracurriculares." });
  }
  return errors;
}

function validateFormInput(data) {
  let errors = [];

  errors = errors.concat(
    validateRequiredFields(data),
    validateDate(data.day, data.month, data.year),
    validateEmail(data.email),
    validatePhone(data.ddd, data.phone, data.extension),
    validateActivities(data.activities)
  );
  return errors;
}

module.exports = { validateFormInput };
