import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
(async () => {
  const app = express();
  app.use(cookieParser());
  app.use("/", require("./routes/index"));
  app.listen(PORT, () => {
    console.log(`Started Server at ${PORT} `);
    console.log(`Open http://localhost:5000 to view it in the browser. `);
  });
})();
