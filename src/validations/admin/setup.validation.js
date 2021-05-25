const router = require("koa-joi-router");
const Joi = router.Joi;

const validateDoSetup = {
  type: "form",
  continueOnError: true,
  body: {
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
        )
      )
      .message(
        `Minimum 8 characters,
        Maximum 20 characters,
        At least one uppercase character,
        At least one lowercase character,
        At least one digit,
        At least one special character`
      )
      .required(),
    confirm_password: Joi.ref("password"),
  },
};

module.exports = { validateDoSetup };
