import {Express} from "express";
import register from "./register";
import parent from "./parent";
import section from "./section";

export default function (app: Express) {
  //TODO: Move to corresponding file?
  app.get("/upload/:filename", async (req, res) => {
    const {filename} = req.params;

    res.sendFile(process.cwd() + "/uploads/" + filename);
  })

  register(app);
  parent(app);
  // children(app);
  section(app)
}