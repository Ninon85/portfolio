const { body, validationResult } = require("express-validator");

exports.email = [
	body("eMail")
		.notEmpty()
		.isEmail()
		.normalizeEmail({ lowercase: true })
		.withMessage("Format email invalide !"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json(errors.mapped());
		}
		next();
	},
];
exports.name = [
	body("lastName")
		.notEmpty()
		.isLength({ min: 2 })
		.withMessage("Votre prénom doit contenir minimum 2 caractères !")
		.blacklist("{}$<>=")
		.isAlpha("fr-FR", { ignore: " -" })
		.withMessage(
			"Votre nom de doit pas contenir de chiffres ni caractères spéciaux, 3 caractères minimum"
		),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json(errors.mapped());
		}
		next();
	},
];
