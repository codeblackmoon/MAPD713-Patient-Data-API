var express = require("express");
var patientRouter = require("./patient");

var app = express();

app.use("/patient/", patientRouter);

module.exports = app;