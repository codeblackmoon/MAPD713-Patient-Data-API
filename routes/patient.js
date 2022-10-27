var express = require("express");
const { checkSchema } = require("express-validator");
const PatientController = require("../controllers/PatientController");
const { validate } = require("../middlewares/validator");
const { createPatientSchema, updatePatientSchema } = require("../request-schemas/patient");

var router = express.Router();

router.get("/", PatientController.patientList);
router.get("/:id", PatientController.patientDetail);
router.post("/", validate(checkSchema(createPatientSchema)), PatientController.patientStore);
router.put("/:id", PatientController.patientUpdate);
router.delete("/:id", PatientController.patientDelete);

module.exports = router;