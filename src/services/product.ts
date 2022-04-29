import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBase';

type Item = {
  id: number;
  name: string;
};

interface InnoloftProductData {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: Item;
  categories: Item[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: Item;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      id: null;
      country: {
        name: string;
        region: null;
      };
      state: null;
      city: {
        name: string;
        countryId: null;
        stateId: null;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
      fallbackString: null;
      cityRegion: null;
    };
  };
  businessModels: Item[];
}

type RelevantData = {
  title: string;
  type: string;
  description: string;
  categories: Item[];
  businessModels: Item[];
  trl: string;
  user: {
    [details: string]: string;
  };
  company: {
    [detail: string]: string;
  };
};

const getRelevantProductInfo = (data: InnoloftProductData): RelevantData => ({
  title: data.name,
  type: data.type.name,
  description: data.description,
  categories: data.categories,
  businessModels: data.businessModels,
  trl: data.trl.name,
  user: {
    name: `${data.user.firstName} ${data.user.lastName}`,
    image: data.user.profilePicture,
  },
  company: {
    name: data.company.name,
    address: `${data.company.address.house} ${data.company.address.street}, ${data.company.address.city.name}, ${data.company.address.country.name}`,
  },
});

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api-test.innoloft.com/',
  }),
  tagTypes: ['Product'],
  endpoints: build => ({
    getProduct: build.query<RelevantData, void>({
      query: () => ({ url: 'product/6781/', method: 'get' }),
      transformResponse: getRelevantProductInfo,
      providesTags: ['Product'],
    }),
    editProduct: build.mutation({
      query: params => ({ url: 'product/6781/', method: 'put', params }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const { useGetProductQuery, useEditProductMutation } = productApi;
