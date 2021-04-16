import {createConnection} from "typeorm";
import "reflect-metadata";
import typeOrmConfig from "./typeOrm.config";
import express from "express"
import config from "./config";
import cors from "cors";
import https from "https";
import fs from "fs";
import * as http from "http";
import routes from "./routes/routes";

async function main() {
  const sslOptions = {
    key: fs.readFileSync("key.pem", "utf-8"),
    cert: fs.readFileSync("cert.pem", "utf-8"),
    passphrase: "pizza",
  }

  const conn = await createConnection(typeOrmConfig);

  const app = express();
  app.use(cors());
  app.use(express.static("../front/build"));
  app.use(express.json());


  routes(app);

  https.createServer(sslOptions, app).listen(config.HTTPS_PORT);
  http.createServer(app).listen(config.PORT)

  console.log("Server up and running on https://localhost:" + config.HTTPS_PORT);
  console.log("And http://localhost:" + config.PORT);
  console.log("App available on: https://vk.com/app7814938_201119641");
}

main()