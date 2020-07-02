const mongoose = require("mongoose");
const yup = require("yup");
const { resolve } = require("path");

exports.path = resolve(__dirname, "client/dist");

exports.customError = (err) => {
  return {
    error: {
      path: err.code === 11000 ? "id" : err.path,
      type: err.code === 11000 ? "mongoErrorId" : err.type,
    },
  };
};

exports.schema = yup.object().shape({
  id: yup
    .string()
    .trim()
    .required()
    .matches(/^[a-zA-Z0-9\-_]+$/gi),
  url: yup
    .string()
    .trim()
    .url()
    .required()
    .matches(/^https/g),
  redirect: yup.string().trim().required(),
  shortUrl: yup.string().trim().required(),
  clicks: yup.number().required(),
  createdOn: yup.string().required(),
});

exports.URLSchema = new mongoose.Schema({
  _id: String,
  id: String,
  url: String,
  redirect: String,
  shortUrl: String,
  clicks: Number,
  createdOn: String,
});
