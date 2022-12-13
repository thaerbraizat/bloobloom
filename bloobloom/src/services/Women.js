import axios from "axios";

export const Women = {
  // add params to make filter dynamically available

  getWomenSpectaclesData: async () => {
    return axios
      .get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?width=960&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=2&filters[frame_variant_home_trial_available]=false`
      )
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  getWomenSunglassesData: async () => {
    return axios
      .get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/sunglasses-women/glasses?width=960&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=2&filters[frame_variant_home_trial_available]=false`
      )
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },

  getDataCollection: async () => {
    return axios
      .get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?width=960&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[frame_variant_home_trial_available]=false`
      )
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  getSunglassesDataCollection: async () => {
    return axios
      .get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/sunglasses-men/glasses?width=960&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&filters[frame_variant_home_trial_available]=false`
      )
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
