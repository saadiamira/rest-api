const { validationResult } = require("express-validator");

const { check } = require("express-validator");

exports.signUpRules = () => [
  check("fullName", "this filed is require").notEmpty(),
  check("email", "this should be a valid email").isEmail(),
  check("email", "this filed is require").notEmpty(),
  check("password", "passwod should be more than 5 digets").isLength({
    min: 4,
  }),
];

exports.validator = (req, res, next) => {
    let errors=validationResult(req)
    return errors.isEmpty()?next():res.status(400).json({errors:errors.array()})
    }