const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema(
  {
    campaignName: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    aboutCampaign:{
      type: String,
      required:true,
     
    },
    startDate: {
      type: String,
      required: false,
     
    },
    endData:{
      type: String,
      required:false,
    },
    location:{
      type: String,
      required:false,
    },
    city: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  targetAmount:{
      type:Number,
      required: false,
      default:0,
    },
    
    volunteers:{
      type:Array,
      required: false,
      default:[],
    },  

  },
  {
    timestamps: true,
  }
 );

const campaign = mongoose.model("Campaign", CampaignSchema); // Pass ProductSchema object here

module.exports = campaign;
