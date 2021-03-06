const initialState = {
  createCampaign: {
    isPosting: false // Posting a new campaign?
  },
  manageCampaign: {
    campaigns: [], // Array of objects for campaigns
    isGetting: false // Getting campaigns?
  },
  sendCampaign: {
    isPosting: false,
    sendCampaignResponse: '',
    sendCampaignStatus: 0
  },
  createList: {
    list: [],
    isPosting: false // Posting a file?
  },
  manageList: {
    lists: [], // Array of objects for lists
    isGetting: false // Getting lists?
  },
  manageListSubscribers: {
    listId: null,
    subscribers: [],
    isGetting: false
  },
  settings: {
    loading: false
  },
  notifications: {
    stack: []
  }
};

export default initialState;
