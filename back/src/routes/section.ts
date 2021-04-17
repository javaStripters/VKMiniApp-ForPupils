import {Express} from "express";
import {generateGetOne} from "./Tools";
import {Section} from "../entity/Section";

export default function (app: Express) {
  generateGetOne(Section, app);
}