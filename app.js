const express = require("express");
const helmet = require("helmet");

//-----------------------
//router
//-----------------------
const mailRoutes = require("./routes/mail.route");

//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------//-----------------------

//create express application
const app = express();
//headers
app.use((req, res, next) => {
	//access to API from any origin "*"
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		//allow this headers for request send to the API
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		// allow request with this methods(CRUD)
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE"
	);
	next();
});
app.use(
	helmet({
		//allow frontend and backend to share resources (ports are different)
		crossOriginResourcePolicy: false,
	})
);

// //to recover body request for read json files (convert into js object)
app.use(express.json());
app.use(express.static("front"));

//-----------------------------------
//Roads API
//-----------------------------------
app.use("/api/mail", mailRoutes);
// export app, now we can use this app from the other files of the project
module.exports = app;
