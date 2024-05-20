const express = require("express");
const routes = express.Router();

const {
  getRequest,
  getRequests,
  addRequest,
  updateRequest,
  deleteRequest,
} = require("../Controller/RequestsController.js");

// Define your routes
routes.get("/", getRequests);
routes.get("/:id", getRequest);
routes.put("/:id", updateRequest);
routes.delete("/:id", deleteRequest);
routes.post("/", addRequest);

module.exports = routes;