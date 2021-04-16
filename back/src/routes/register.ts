import {Express, Response} from "express";
import {Child} from "../entity/users/Child";
import {getRepository, Repository} from "typeorm";
import {processErr} from "./Tools";
import {Parent} from "../entity/users/Parent";
import Tutor from "../entity/users/Tutor";

//TODO: Move to separate file
const users = [Child, Parent, Tutor];

//TODO: Move to Tools
async function entityNotExist(repo: Repository<any>, id: number, res: Response) {
  const entity = await repo.findOne(id);

  if (entity) {
    res.status(409).send(`Entity with ${id} already exist`);
    return false;
  }

  return true;
}

export default function (app: Express) {
  app.get("/register/:id", async (req, res) => {
    const {id} = req.params;

    for (const entity of users) {
      const record = await entity.findOne(+id)
      if (record) {
        res.send({type: entity.name, user: record})
        return;
      }
    }

    res.sendStatus(404);
  })

  app.post("/register/child", async (req, res) => {
    const childInput: Child = req.body;

    if (await entityNotExist(getRepository(Child), childInput.id, res)) {
      try {
        const child = await Child.create(childInput).save();
        res.status(201).send(child);
      } catch (err) {
        processErr(err, res);
      }
    }
  })
}