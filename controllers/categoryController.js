const mongoose = require("../include/DB");
const CateSchema = require("../model/categoryModel");

const getCategory = (req, res) => {
  CateSchema.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

const createCategory = (req, res) => {
  new CateSchema({
    name: req.body.name,
    status: req.body.status,
  }).save((err, create) => {
    if (err) {
      res.send(err);
    }
    res.json(create);
  });
};

const updateCategory = (req, res) => {
  CateSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updateData) => {
      if (err) return res.status(500).send(err);
      return res.send(updateData);
    }
  );
};

const deleteCategory = (req, res) => {
  CateSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return res.status(500).send(err);
    const response = {
      id: data._id,
      message: `Category successfully deleted`,
      status: true,
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
