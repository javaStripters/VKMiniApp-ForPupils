import {Express} from "express";
import {entityExist, generateGetAll, generateGetOne, sendCyclic} from "./Tools";
import Review from "../entity/Review";
import {Section} from "../entity/Section";
import {getRepository} from "typeorm";
import {Parent} from "../entity/users/Parent";

export default function (app: Express) {
  generateGetOne(Review, app);
  generateGetAll(Review, app);

  app.post("/review/new/section/:sid/parent/:pid", async (req, res) => {
    const {sid, pid} = req.params;
    const review = Review.create(req.body as Review);

    const sec = await entityExist(getRepository(Section), +sid, res);
    if (!sec) return;

    review.section = sec;

    const parent = await entityExist(getRepository(Parent), +pid, res);
    if (!parent) return;

    review.reviewer = parent;
    res.status(201).send(await review.save());
  })

  app.get("/review/section/:id/:from/:to", async (req, res, next) => {
    const {id, from, to} = req.params;

    const reviews = await Review.createQueryBuilder("review")
      .where("review.section = :section", {section: id})
      .skip(+from)
      .take((+to) - (+from))
      .getMany()

    sendCyclic(reviews, res);
  })
}