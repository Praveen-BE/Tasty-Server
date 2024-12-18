import express from "express";
import { restaurantMenuObject } from "../minifiedFiles/minifiedRestaurantMenu.js";
const restuarantMenuRouter = express.Router();

restuarantMenuRouter.get("/restuarantMenu/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.json(restaurantMenuObject);
  } catch (error) {
    res.json({ data: { message: error.message } });
  }
});

export default restuarantMenuRouter;
