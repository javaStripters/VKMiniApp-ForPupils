import {Express} from "express";
import {generateGetAll, generateGetOne} from "./Tools";
import {Parent} from "../entity/users/Parent";

export default function (app: Express) {
  generateGetOne(Parent, app);
  generateGetAll(Parent, app);
}