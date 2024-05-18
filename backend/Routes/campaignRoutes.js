const express = require("express");
const routes = express.Router();
 // Import CORS middleware
//const cors = require("cors");
const {
  getCampaign,
  getCampaigns,
  addCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../Controller/campaignController.js");

//routes.use(cors());
// Define your routes
routes.get("/", getCampaigns);
routes.get("/:id", getCampaign);
routes.put("/:id", updateCampaign);
routes.delete("/:id", deleteCampaign);
routes.post("/", addCampaign);

module.exports = routes;
