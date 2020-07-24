var express = require("express");
var router = express.Router();
var cors = require("cors");

const IMMUNITY = require("./data/immunity")
const QUARANTINE_STATUS_GD = require("./data/quarantine_status_gd")
const RELIEF_HOSPITAL = require("./data/relief_hospital")
const TRIAGE_HOSPITAL = require("./data/triage_hospital")
const SERVICE = require("./data/service")

/**********************************************/
/* Hospital */
/**********************************************/

/* GET reliefHospital page. */
router.get("/hospital/reliefHospital", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(RELIEF_HOSPITAL);
});

/* GET triageHospital page. */
router.get("/hospital/triageHospital", cors(), async function (req, res) {
    res.set("Content-Type", "text/json");
    res.status(200).json(TRIAGE_HOSPITAL);
  });

/**********************************************/
/* Prevention */
/**********************************************/

/* GET immunity page. */
router.get("/prevention/immunity", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(IMMUNITY);
});

/**********************************************/
/* Quarantine Status */
/**********************************************/

/* GET quarantine_gd page. */
router.get("/quarantine_status/quarantine_gd", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(QUARANTINE_STATUS_GD);
});

/**********************************************/
/* Infomation */
/**********************************************/

/* GET service page. */
router.get("/infomation/service", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(SERVICE[0]);
});
module.exports = router;
