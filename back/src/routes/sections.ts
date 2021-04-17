import {Express} from "express";
import {generateGetAll, generateGetOne} from "./Tools";
import {Section} from "../entity/Section";

export default function (app: Express) {
  generateGetOne(Section, app, {relations: ["reviews"]});
  generateGetAll(Section, app);
}