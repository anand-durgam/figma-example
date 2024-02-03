import axios from "axios";
const instanceApi = axios.create({
  baseURL: "https://full-stack-real-estate-youtube.vercel.app/api",
});

export const LocationsAPI = {
  getLocations: async function () {
    try {
      const response = await instanceApi.get(`/residency/allresd`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  getLocationById: async function (id) {
    try {
      const response = await instanceApi.get(`/residency/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
