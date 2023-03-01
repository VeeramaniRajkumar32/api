const { mail } = require("../controllers/mail");

const router = require("express").Router();

router.post('/mail', mail)


module.exports = router;