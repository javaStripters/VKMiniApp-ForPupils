import {Response} from "express"

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
