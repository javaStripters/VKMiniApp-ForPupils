import {Express, Response} from "express"

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
export function generateGetOne(entity: any, app: Express) {
  app.get(`/${entity.name.toLowerCase()}/:id`, async (req, res) => {
    const {id} = req.params;

    const record = await entity.findOne(+id);
    if (!record) {
      res.status(404).send(`${entity.name} with id ${id} not exist`);
      return;
    }
    res.send(record);
  })
}

export function generateGetAll(entity: any, app: Express) {
  app.get(`/${entity.name.toLowerCase()}s`, async (req, res) => {
    res.send(await entity.find({}));
  })
}
