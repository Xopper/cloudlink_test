const Joi = require("joi");
const express = require("express");

const users = Joi.object().keys({
  name: Joi.required(),
  Email: Joi.required(),
});

const requestSchemaEdit = Joi.object({
  name: Joi.required(),
  Company_name: Joi.required(),
  Users: Joi.array().items(users),
});

const router = express.Router();

router.post("/api", async (req, res) => {
  try {
    //Check errors
    const result = await requestSchemaEdit.validateAsync(req.body, {
      abortEarly: false,
    });
    console.log(result);
  } catch (errors) {
    return res.status(400).json({ errors: errors });
  }
});

module.exports = router;
