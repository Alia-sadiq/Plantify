const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
      const { username, email, password } = req.body;

      // Generate a salt to hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create the user with the hashed password
      const user = await User.create({
          username,
          email,
          password: hashedPassword,
      });

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Check if password matches
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // If email and password are correct, return the user data
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  loginUser
};