import {Express} from "express";
import {entityExist, generateGetAll, generateGetOne} from "./Tools";
import {Parent} from "../entity/users/Parent";
import {getRepository} from "typeorm";
import {Child} from "../entity/users/Child";

export default function (app: Express) {
  generateGetOne(Parent, app, {relations: ["children"]});
  generateGetAll(Parent, app);

  app.put("/parent/:pid/child/:cid", async (req, res, next) => {
    const {cid, pid} = req.params;

    const parent = await entityExist(getRepository(Parent), +pid, res, {relations: ["children"]});
    if (!parent) return;

    const child = await entityExist(getRepository(Child), +cid, res, {relations: ["parents"]});
    if (!child) return;

    if (!parent.children) parent.children = [];
    if (!child.parents) child.parents = [];

    if (parent.children.map(p => p.id).includes(child.id)) {
      res.status(409).send(`Parent ${pid} already has child ${cid}`);
      return;
    }
    if (child.parents.map(c => c.id).includes(parent.id)) {
      res.status(409).send(`Child ${cid} already has parent ${pid}`);
      return;
    }

    child.parents.push(parent);
    await child.save();

    parent.children.push(child);
    await parent.save();

    res.sendStatus(201);
  })
}