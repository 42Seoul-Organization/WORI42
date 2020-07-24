var express = require("express");
var router = express.Router();
var cors = require("cors");
const fs = require("fs");

const IMMUNITY = require("./data/immunity");
const QUARANTINE_STATUS_GD = require("./data/quarantine_status_gd");
const RELIEF_HOSPITAL = require("./data/relief_hospital");
const TRIAGE_HOSPITAL = require("./data/triage_hospital");
const SERVICE = require("./data/service");
const COVID19 = require("./data/covid-19");

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
router.get("/quarantine_status/quarantine_gd", cors(), async function (
  req,
  res
) {
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

/**********************************************/
/* Data */
/**********************************************/

/* GET service page. */
router.get("/data/covid19", cors(), async function (req, res) {
  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19);
});

/* POST service page. */
router.post("/data/user", cors(), async function (req, res) {
  let userData = [];
  let iterator = req.query.user_data.entries();

  for (let v of iterator) {
    userData.push(JSON.parse(v[1]));
  }
  const dataBuffer = fs.readFileSync(__dirname + '/data/userData.json', 'utf8');

  for (let v of JSON.parse(dataBuffer.toString())["userData"]) {
    userData.push(v)
  }

  let data = JSON.stringify({"userData": userData})
  fs.writeFileSync(__dirname + '/data/userData.json', data ,'utf8', function(error, data){
    if (error) {throw error};
  });

  res.set("Content-Type", "text/json");
  res.status(200).json(COVID19);
});

module.exports = router;
