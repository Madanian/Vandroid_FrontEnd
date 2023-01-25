import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

export default {
  async showGeneralInformation({ commit }) {
    const generalInformationData = await axios.get(
      `http://127.0.0.1:8000/information/`
    );
    let generalInformation = generalInformationData.data;
    // console.log(generalInformation)
    commit("setGeneralInformation", generalInformation);
  },


  async showActivityComponent({ commit }) {
    // let config = {
    //   headers: {
    //     Accept: "applicatio/json",
    //   },
    // };

    //   const data= await axios.get('https://jsonplaceholder.typicode.com/posts', config);
    const activityComponentData = await axios.get(
      `http://127.0.0.1:8000/ActivityComponents/`
    );
    let activityComponent = activityComponentData.data;
    // console.log(activityComponent)
    commit("setActivityComponent", activityComponent);
  },

  async showActivityAliasComponent({ commit }) {
    const activityAliasComponentData = await axios.get(
      `http://127.0.0.1:8000/ActivityAliasComponents/`
    );
    let activityAliasComponent = activityAliasComponentData.data;
    // console.log(activityAliasComponent)
    commit("setActivityAliasComponent", activityAliasComponent);
  },

  async showBroadcastReceiversComponent({ commit }) {
    const broadcastReceiversComponentData = await axios.get(
      `http://127.0.0.1:8000/BroadcastReceiversComponents/`
    );
    let broadcastReceiversComponent = broadcastReceiversComponentData.data;
    // console.log(broadcastReceiversComponent)
    commit("setBroadcastReceiversComponent", broadcastReceiversComponent);
  },

  async showServicesComponent({ commit }) {
    const servicesComponentData = await axios.get(
      `http://127.0.0.1:8000/ServicesComponents/`
    );
    let servicesComponent = servicesComponentData.data;
    // console.log(servicesComponent)
    commit("setServicesComponent", servicesComponent);
  },

  async showContentProvidersComponent({ commit }) {
    const contentProvidersComponentData = await axios.get(
      `http://127.0.0.1:8000/ContentProvidersComponents/`
    );
    let contentProvidersComponent = contentProvidersComponentData.data;
    //console.log(contentProvidersComponent)
    commit("setContentProvidersComponent", contentProvidersComponent);
  },

  async addData({ commit }, nameAppPass) {
    await axios
      .post(`http://127.0.0.1:8000/information/`, {
        nameApp: nameAppPass,
        // title: data.title,
        // body: data.body,
        // userId: data.userId,
      })
      .then((response) => {
        // let infoData = response.data;
        // commit("addAxiosData", infoData);
        console.log(response.data)
      });

    //router.push("/axios/get");
  },
};
