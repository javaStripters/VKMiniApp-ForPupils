import {createConnection} from "typeorm";
import config from "./config";
import {Child} from "./entity/users/Child";
import {Parent} from "./entity/users/Parent";
import Tutor from "./entity/users/Tutor";
import {User} from "./entity/users/User";

export default {
  type: "sqlite",
  database: "stud_app",
  logging: !config.PROD,
  synchronize: !config.PROD,
  entities: [Child, Parent, Tutor, User],
} as Parameters<typeof createConnection>[0]