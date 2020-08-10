const express = require("express");
const router = express.Router();
import { Request, Response } from "express";
router.get("/", (_req: Request, res: Response) => {
  res.send("Hello from TS Nodes (create-exnode-app)");
});

module.exports = router;
