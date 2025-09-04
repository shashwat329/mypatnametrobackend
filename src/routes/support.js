const express = require("express");
const router = express.Router();
const { createSupport } = require("../controllers/supportController");
const validateSupport = require("../middleware/validateSupport");

router.post("/", validateSupport, createSupport);

module.exports = router;

