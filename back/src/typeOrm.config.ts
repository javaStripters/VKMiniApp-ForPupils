import {createConnection} from "typeorm";
import config from "./config";
import {Child} from "./entity/users/Child";
import {Parent} from "./entity/users/Parent";
import Tutor from "./entity/users/Tutor";
import {User} from "./entity/users/User";
import Review from "./entity/Review";
import {Section} from "./entity/Section";

export default {
  type: "sqlite",
  database: "stud_app",
  logging: !config.PROD,
  synchronize: !config.PROD,
  entities: [Child, Parent, Tutor, User, Review, Section],
} as Parameters<typeof createConnection>[0]

// export default {
//   type: "postgres",
//   database: "stud_app",
//   logging: !config.PROD,
//   synchronize: !config.PROD,
//   entities: [Child, Parent, Tutor, User, Review, Section],
// } as Parameters<typeof createConnection>[0]
