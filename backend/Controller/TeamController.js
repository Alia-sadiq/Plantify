const member = require("../Models/TeamModel.js");
//onst Team = require('../Models/Team'); // Assuming you have a Team model defined

// Controller functions
const getTeams = async (req, res) => {
  try {
    const teams = await member.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeam = async (req, res) => {
  try {
    const team = await member.findById(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'Team member not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTeam = async (req, res) => {
  try {
    const { name, role } = req.body;
    const profilePic = req.file ? req.file.filename : null;
    
    const newTeamMember = new member({
      name,
      role,
      profilePic
    });

    await newTeamMember.save();
    res.status(201).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const { name, role } = req.body;
    const profilePic = req.file ? req.file.filename : null;

    const updatedTeamMember = await member.findByIdAndUpdate(req.params.id, {
      name,
      role,
      profilePic
    }, { new: true });

    res.status(200).json(updatedTeamMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTeam = async (req, res) => {
  try {
    await member.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTeam,
  getTeams,
  addTeam,
  updateTeam,
  deleteTeam,
};

