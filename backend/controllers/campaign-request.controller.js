const CampaignRequest = require('../models/campaign-request.model');

const createRequestCampaign = async (req, res) => {
  try {
    const { socialGroupId, location, contactNumber, issue, attachedImage } = req.body;

    // Logging the received request body
    console.log('Received request body:', req.body);

    // Check if the SocialGroup exists
   

    // Create a new campaign request
    const campaignRequest = new CampaignRequest({
      socialGroup: socialGroupId,
      location,
      contactNumber,
      issue,
      attachedImage, // Save the filename
    });

    await campaignRequest.save();
    res.status(201).json(campaignRequest);
  } catch (error) {
    console.error('Error creating campaign request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





// GET API to Retrieve Campaign Requests for a Social Group
const getRequestCampaign= async (req, res) => {
  try {
    // Fetch CampaignRequests for the given SocialGroup
    const campaignRequests = await CampaignRequest.find();
    res.status(200).json(campaignRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getRequestCampaign,
    createRequestCampaign
};