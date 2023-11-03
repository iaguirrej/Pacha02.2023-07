const express = require("express");
const {getUser, insertUser, updateUser, deleteUser} =  require("../controllers/userController")
const {getUnitMeasurement, insertUnitMeasurement, updateUnitMeasurement, deleteUnitMeasurement} =  require("../controllers/unit_measurementController")
const router  = express.Router();

router.get("/user", getUser)
router.post("/user/insert", insertUser)
router.put("/user/update", updateUser)
router.delete("/user/delete", deleteUser)

router.get("/unitMeasurement", getUnitMeasurement)
router.post("/unitMeasurement/insert", insertUnitMeasurement)
router.put("/unitMeasurement/update", updateUnitMeasurement)
router.delete("/unitMeasurement/delete", deleteUnitMeasurement)

router.get("/user", getUser)
router.post("/user/insert", insertUser)
router.put("/user/update", updateUser)
router.delete("/user/delete", deleteUser)

module.exports = router;