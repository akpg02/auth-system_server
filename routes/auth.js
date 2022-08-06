const express = require("express");

// controllers
const { currentUser, privateRoute } = require("../controllers/auth");

// middlewares
const { findOrCreateUser } = require("../middlewares");

const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser);
router.get("/private-route", findOrCreateUser, privateRoute);

module.exports = router;
