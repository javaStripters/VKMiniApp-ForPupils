import {Express, Response} from "express";
import {Child} from "../entity/users/Child";
import {getRepository, Repository} from "typeorm";
import {processErr} from "./Tools";
import {Parent} from "../entity/users/Parent";
import Tutor from "../entity/users/Tutor";
import multer from "multer";
import {Section} from "../entity/Section";
import AbstractEntity from "../entity/AbstractEntity";

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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}.${file.mimetype.split('/')[1]}`);
  }
})

const upload = multer({storage})

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

  for (const entity of users) {
    app.post("/register/" + entity.name.toLowerCase(), async (req, res) => {
      const input: AbstractEntity = req.body;

      if (await entityNotExist(getRepository(entity), input.id, res)) {
        try {
          const record = await entity.create(input).save();
          res.status(201).send(record);
        } catch (err) {
          processErr(err, res);
        }
      }
    })
  }

  // app.post("/register/child", async (req, res) => {
  //   const childInput: Child = req.body;
  //
  //   if (await entityNotExist(getRepository(Child), childInput.id, res)) {
  //     try {
  //       const child = await Child.create(childInput).save();
  //       res.status(201).send(child);
  //     } catch (err) {
  //       processErr(err, res);
  //     }
  //   }
  // })


  // app.post("/register/parent", async (req, res) => {
  //   const parentInput: Parent = req.body;
  //
  //   const parent = await Parent.findOne(parentInput.id);
  //   if (parent !== undefined) {
  //     res.status(409).send(`User with id ${parent.id} already exist!`)
  //   }
  //
  //   try {
  //     const parent = await Parent.create({...parentInput, children: []}).save();
  //     res.status(201).send(parent);
  //   } catch (err) {
  //     processErr(err, res);
  //   }
  // })


  // app.post("/register/tutor", async (req, res) => {
  //   const tutorInput: Tutor = req.body;
  //
  //   if (await entityNotExist(getRepository(Tutor), tutorInput.id, res)) {
  //     try {
  //       const tutor = await Tutor.create(tutorInput).save();
  //       res.status(201).send(tutor);
  //     } catch (err) {
  //       processErr(err, res);
  //     }
  //   }
  // });


  app.post("/register/section", upload.fields([{name: "payment", maxCount: 1}, {name: "cover", maxCount: 1}]),
    async (req, res) => {
      console.log(req.files);
      const sectionInput = req.body;
      const {payment, cover} = req.files as { [p: string]: Express.Multer.File[] };

      if (payment)
        sectionInput.paymentDetails = payment[0].filename;
      if (cover)
        sectionInput.cover = cover[0].filename;
      // Cтроки под этим комментарием надо убрать, если категории и время приходят правильно, как массив
      sectionInput.categories = sectionInput.categories.split(',');
      sectionInput.links = sectionInput.links.split(',');


      try {
        const section = await Section.create(sectionInput as Section).save();
        res.status(201).send(section);
      } catch (err) {
        processErr(err, res);
      }
    })
}