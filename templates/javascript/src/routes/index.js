const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello from JS Nodes (create-exnode-app)");
});

module.exports = router;
