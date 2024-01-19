const { body } = require('express-validator');

const jobValidationRules = () => {
  return [
    body('fullName').notEmpty().withMessage('Full Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    // Add validation rules for other fields as needed
  ];
};

module.exports = {
  jobValidationRules,
};
