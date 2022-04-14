const router = require("express").Router();
const mailCtrl = require("../controller/mail");
const inputsCtrl = require("../middleware/inputsValidation");
router.post("/", inputsCtrl.email, inputsCtrl.name, mailCtrl.sendEmail);
module.exports = router;
