import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { User } from 'src/types/user';
import {
  CompanyCampaign,
  CompleteCampaign,
  CreateCampaign,
  InfluencerCampaign
} from 'src/views/project/ProjectCreateView/CampaignTypes';

const initialState: Campaign = {
  createCampaign: {
    campaignTitle: '',
    campaignUrl: '',
    campaignDescription: '',
    campaignBudget: '',
    hashtags: []
  },
  companyCampaign: {
    companyName: '',
    aboutCompany: ''
  },
  influencerCampaign: {
    roleTags: [],
    countryTags: [],
    value: 5000
  },
  completeCampaign: {
    startDate: moment().toDate().getTime(),
    endDate: moment().add(2, 'days').toDate().getTime()
  }
};

const mockState: Campaign = {
  createCampaign: {
    campaignTitle: 'New Payment Solution',
    campaignUrl: 'www.klarna.se/payment',
    campaignDescription:
      'Klarna grundades i Stockholm 2005, med målet att göra det enklare för människor att handla på nätet. De senaste 15 åren har tekniken utvecklat, engagerat och förändrat världen omkring oss, men vår målsättning är fortfarande lika relevant som någonsin tidigare, att göra betalningar så enkla, säkra och framförallt så smidiga som möjligt.',
    campaignBudget: '100000',
    hashtags: ['Klarna']
  },
  companyCampaign: {
    companyName: '',
    aboutCompany: ''
  },
  influencerCampaign: {
    roleTags: ['Agile Coach'],
    countryTags: ['Sweden'],
    value: 5000
  },
  completeCampaign: {
    startDate: moment().toDate().getTime(),
    endDate: moment().add(2, 'days').toDate().getTime()
  }
};

interface Campaign {
  createCampaign: CreateCampaign;
  companyCampaign: CompanyCampaign;
  influencerCampaign: InfluencerCampaign;
  completeCampaign: CompleteCampaign;
}

const slice = createSlice({
  name: 'campaign',
  initialState: mockState,
  reducers: {
    createCampaign(
      state: Campaign,
      action: PayloadAction<{ campaign: CreateCampaign }>
    ) {
      const { campaign } = action.payload;
      console.log(campaign);
      state.createCampaign = campaign;
    },
    companyCampaign(
      state: Campaign,
      action: PayloadAction<{ company: CompanyCampaign }>
    ) {
      const { company } = action.payload;
      console.log(company);
      state.companyCampaign = company;
    },
    influencerCampaign(
      state: Campaign,
      action: PayloadAction<{ influencer: InfluencerCampaign }>
    ) {
      const { influencer } = action.payload;
      console.log(influencer);
      state.influencerCampaign = influencer;
    },
    completeCampaign(
      state: Campaign,
      action: PayloadAction<{ campaignDates: CompleteCampaign }>
    ) {
      const { campaignDates } = action.payload;
      console.log(campaignDates);
      state.completeCampaign = campaignDates;
    },
    getCompanyCampaignData(
      state: Campaign,
      action: PayloadAction<{ user: User }>
    ) {
      const { user } = action.payload;
      state.companyCampaign.companyName = user.name || '';
      state.companyCampaign.aboutCompany = user.about || '';
    }
  }
});

export const createCampaign = (campaign: CreateCampaign) => dispatch => {
  dispatch(slice.actions.createCampaign({ campaign }));
};

export const companyCampaign = (company: CompanyCampaign) => dispatch => {
  dispatch(slice.actions.companyCampaign({ company }));
};

export const influencerCampaign = (
  influencer: InfluencerCampaign
) => dispatch => {
  dispatch(slice.actions.influencerCampaign({ influencer }));
};

export const completeCampaign = (
  campaignDates: CompleteCampaign
) => dispatch => {
  dispatch(slice.actions.completeCampaign({ campaignDates }));
};

export const getCompany = (user: User) => async dispatch => {
  dispatch(slice.actions.getCompanyCampaignData({ user }));
};

export const reducer = slice.reducer;

export default slice;
