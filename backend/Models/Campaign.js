const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [false, "Please enter campaign name"],
    },
    description:{
      type: String,
      required:false,
     
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
    banner: {
      type: String,
      required: false,
    },
   targetDonation:{
      type:Number,
      required: false,
      default:0,
    },
    
    volunteers:{
      type: [Number],
      required: false,
      default:[],
    },  
    status:{
      type: String,
      required:true,
      
    },
  },
  {
    timestamps: true,
  }
 );

const campaign = mongoose.model("Campaign", CampaignSchema); // Pass ProductSchema object here

module.exports = campaign;
