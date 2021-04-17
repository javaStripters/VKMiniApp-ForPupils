import {Express} from "express";
import {generateGetAll, generateGetOne} from "./Tools";
import {Child} from "../entity/users/Child";

export default function (app: Express) {
  generateGetOne(Child, app, {relations: ["parents"]});
  generateGetAll(Child, app);
}
