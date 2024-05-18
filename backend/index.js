// const { error } = require("console");
// const express = require("express");
// const path = require("path");
// const mongoose = require("mongoose");
// const app = express();
// //const campaign = require("./Models/Campaign.js");
// const campaignRoutes = require("./Routes/campaignRoutes.js"); // Corrected variable name
// const requestRoutes=require("./Routes/requestRoutes.js");
// const TeamRoutes=require("./Routes/TeamRoutes.js");
// // Middleware

// app.use(express.urlencoded({ extended: false }));
// app.use('/assets', express.static(path.join(__dirname, 'assets')));
// app.use(express.json());
// // Hello World route
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// // Routes
// app.use("/api/campaigns", campaignRoutes); // Corrected variable name
// app.use("/api/requests", requestRoutes);
// app.use("/api/Team", TeamRoutes);

// // MongoDB connection
// mongoose
//   .connect("mongodb+srv://aliaakhaann11:8G0Vq0PHwuL0TsXU@plantify.8dzi6cr.mongodb.net/?retryWrites=true&w=majority&appName=Plantify")
//   .then(() => {
//     console.log("Connection is successful!");
//     app.listen(5000, () => { // Changed port to 3000
//       console.log("Server is running on port 5000");
//     });
//   })
//   .catch((error) => {
//     console.log("Connection failed!" + error);
//   });
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware

const app = express();

const campaignRoutes = require("./Routes/campaignRoutes.js");
const requestRoutes = require("./Routes/requestRoutes.js");
const teamRoutes = require("./Routes/teamRoutes.js");


// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
}));
 // Use cors middleware to allow all origins
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Hello World route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/api/campaigns", campaignRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/teams", teamRoutes);


// MongoDB connection
mongoose
  .connect("mongodb+srv://aliaakhaann11:8G0Vq0PHwuL0TsXU@plantify.8dzi6cr.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection is successful!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
