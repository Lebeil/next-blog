const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Veuillez remplir le nom !'),
    check('email')
        .isEmail()
        .withMessage('Adresse mail incorrect !'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Mot de passe, minimum 6 caractères !!')
];

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Adresse mail incorrect !'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Mot de passe, minimum 6 caractères !!')
];
