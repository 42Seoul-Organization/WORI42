const COVID19_HOSPITAL = require("./data/relief_hospital");

var express = require("express");
var router = express.Router();
var cors = require("cors");

/**********************************************/
/* Hospital */
/**********************************************/

/* GET reliefHospital page. */
router.get("/hospital/reliefHospital", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19_HOSPITAL);
});

/* GET triageHospital page. */
router.get("/hospital/triageHospital", cors(), async function (req, res) {
    res.set("Content-Type", "text/json");
    res.status(200).json(COVID19_HOSPITAL);
  });

/**********************************************/
/* Prevention */
/**********************************************/

/* GET immunity page. */
router.get("/prevention/immunity", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19_HOSPITAL);
});

/**********************************************/
/* Quarantine Status */
/**********************************************/

/* GET quarantine_gd page. */
router.get("/quarantine_status/quarantine_gd", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19_HOSPITAL);
});

/**********************************************/
/* Infomation */
/**********************************************/

/* GET service page. */
router.get("/infomation/service", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19_HOSPITAL);
});
module.exports = router;
