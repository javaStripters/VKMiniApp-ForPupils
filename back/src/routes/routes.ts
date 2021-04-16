import {Express} from "express";
import {Parent} from "../entity/users/Parent";
import register from "./register";

// TODO: Move to corresponding file
export default function (app: Express) {
  register(app);
  // children(app);
}