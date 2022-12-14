import axios from "axios";

export const Women = {
  // add params to make filter dynamically available

  getWomenSpectaclesData: async () => {
    return axios
      .get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses`
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

  // &filters[
    // glass_variant_frame_variant_frame_tag_configuration_names][]=round
  getDataCollection: async (params={}) => {
    console.log("parrrra",params);
    let url="https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses";
    if(params?.colour && params?.Shape){
      url =`https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${params?.colour}&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${params?.Shape}&filters[frame_variant_home_trial_available]=false`
    }
    if(params?.Shape){
      url =`https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${params?.Shape}&filters[frame_variant_home_trial_available]=false`
    }
    if(params?.colour){
      url =`https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${params?.colour}&filters[frame_variant_home_trial_available]=false`
    }
    return axios
      .get(
        url
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
