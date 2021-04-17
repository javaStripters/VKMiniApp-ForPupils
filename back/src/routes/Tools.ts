import {Express, Response} from "express"
import {FindOneOptions, Repository} from "typeorm";

export function processErr(err: Error & { errno: number }, res: Response) {
  switch (err.errno) {
    case 19:
      res.status(500).send("Bad json!");
      break;
    default:
      console.error(err);
      res.status(500).send();
  }
}

//TODO: normal type
export function generateGetOne(entity: any, app: Express, options?: object) {
  app.get(`/${entity.name.toLowerCase()}/:id`, async (req, res) => {
    const {id} = req.params;

    const record = await entity.findOne(+id, options);
    if (!record) {
      res.status(404).send(`${entity.name} with id ${id} not exist`);
      return;
    }

    sendCyclic(record, res);
  })
}

export function generateGetAll(entity: any, app: Express) {
  app.get(`/${entity.name.toLowerCase()}s`, async (req, res) => {
    res.send(await entity.find({}));
  })
}

export async function entityNotExist(repo: Repository<any>, id: number, res: Response) {
  const entity = await repo.findOne(id);

  if (entity) {
    res.status(409).send(`Entity with ${id} already exist`);
    return false;
  }

  return true;
}

export async function entityExist<T>(repo: Repository<T>, id: number, res: Response, options?: FindOneOptions<T>) {
  const entity = await repo.findOne(id);

  if (entity) {
    return entity;
  }

  res.status(404).send(`Entity with ${id} not exist`);

  return undefined;
}

export function sendCyclic(obj: any, res: Response) {
  const seen: any[] = [];
  const body = JSON.stringify(obj, (key, val) => {
    if (val != null && typeof val == "object") {
      if (seen.includes(val)) {
        return;
      }
      seen.push(val);
    }
    return val;
  })
  res.contentType("json").send(body);
}