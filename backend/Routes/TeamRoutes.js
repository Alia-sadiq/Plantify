// const express = require("express");
// const routes = express.Router();
// const cors = require("cors");
// const multer = require("multer");

// const {
//   getTeam,
//   getTeams,
//   addTeam,
//   updateTeam,
//   deleteTeam,
// } = require("../Controller/TeamController.js");

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'assets'); // Ensure this folder exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// // Use CORS middleware to allow requests from all origins
// routes.use(cors());

// // Define your routes
// routes.get("/", getTeams);
// routes.get("/:id", getTeam);
// routes.put("/:id", updateTeam);
// routes.delete("/:id", deleteTeam);
// routes.post("/", upload.single('profilePic'), addTeam);

// module.exports = routes;
const express = require("express");
const routes = express.Router();
// const cors = require("cors");

const {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("../Controller/TeamController.js");

// Use CORS middleware
// routes.use(cors());

// Define your routes
routes.get("/", getTeams);
routes.get("/:id", getTeam);
routes.put("/:id", updateTeam);
routes.delete("/:id", deleteTeam);
routes.post("/", addTeam);

module.exports = routes;
