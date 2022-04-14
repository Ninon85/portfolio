require("dotenv").config();
const nodemailer = require("nodemailer");
exports.sendEmail = (req, res) => {
	const transporter = nodemailer.createTransport({
		// host:'',
		// port:,

		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAILPSW,
		},
	});

	const mailOptions = {
		from: req.body.eMail,
		to: "ninon.bill@gmail.com",
		subject: `new mail of ${req.body.eMail} from web site`,
		text: `Message de : ${req.body.lastName} : ${req.body.messageContent}. Répondre à l'expéditeur : ${req.body.eMail}`,
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.status(500).json({ error });
		} else {
			console.log("Email sent: " + info.response);
			res.status(200).json({ message: "Email sent" });
		}
	});
};
