import {Express} from "express";
import register from "./register";

// TODO: Move to corresponding file
export default function (app: Express) {
  //TODO: Pass filename as param
  app.get("/upload/", async (req, res) => {
    const {filename} = req.body;

    res.sendFile(process.cwd() + "/uploads/" + filename);
  })


  register(app);
  // children(app);
}