const mongoose = require("../include/DB");
const CateSchema = require("../model/categoryModel");
const catRouter = require("express").Router();
const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

catRouter
  //   .get("/all", (req, res) => {
  //     CateSchema.find((err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(data);
  //       }
  //     });
  //   })
  .get("/all", getCategory)
  .get("/all/:id", (req, res) => {
    CateSchema.findById(req.params.id, (err, data) => {
      if (err) return res.status(500).send(err);
      const response = {
        id: data._id,
        name: data.name,
        CategoryStatus: data.status,
        message: `success`,
        status: true,
      };
      res.send(response);
    });
  })
  .post("/create", createCategory)
  .put("/update/:id", updateCategory)
  .delete("/delete/:id", deleteCategory);

module.exports = catRouter;
