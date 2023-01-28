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

  async showDynamicRegisteredComponent({ commit }) {
    const dynamicRegisteredComponentsData = await axios.get(
      `http://127.0.0.1:8000/DynamicRegisteredComponents/`
    );
    let dynamicRegisteredComponent = dynamicRegisteredComponentsData.data;
    //console.log(dynamicRegisteredComponent)
    commit("setDynamicRegisteredComponent", dynamicRegisteredComponent);
  },

  async showUsesPermission({ commit }) {
    const usesPermissionData = await axios.get(
      `http://127.0.0.1:8000/usesPermission/`
    );
    let usesPermission = usesPermissionData.data;
    //console.log(dynamicRegisteredComponent)
    commit("setUsesPermission", usesPermission);
  },

  async showCustomPermission({ commit }) {
    const customPermissionData = await axios.get(
      `http://127.0.0.1:8000/customPermission/`
    );
    let customPermission = customPermissionData.data;
    //console.log(dynamicRegisteredComponent)
    commit("setCustomPermission", customPermission);
  },

  async showAPIPermission({ commit }) {
    const APIPermissionData = await axios.get(
      `http://127.0.0.1:8000/APIPermission/`
    );
    let APIPermission = APIPermissionData.data;
    //console.log(dynamicRegisteredComponent)
    commit("setAPIPermission", APIPermission);
  },

  async showIntentMessage({ commit }) {
    const intentMessageData = await axios.get(
      `http://127.0.0.1:8000/intentMessages/`
    );
    let intentMessage = intentMessageData.data;
    //console.log(dynamicRegisteredComponent)
    commit("setIntentMessage", intentMessage);
  },

  showData: ({ commit, dispatch }) => {
    dispatch("showGeneralInformation");
    dispatch("showActivityComponent");
    dispatch("showActivityAliasComponent");
    dispatch("showBroadcastReceiversComponent");
    dispatch("showServicesComponent");
    dispatch("showContentProvidersComponent");
    dispatch("showDynamicRegisteredComponent");
    dispatch("showUsesPermission");
    dispatch("showCustomPermission");
    dispatch("showAPIPermission");
    dispatch("showIntentMessage");
  },

  async addData({ commit }, nameAppPass) {
    await axios
      .post(`http://127.0.0.1:8000/information/`, {
        nameApp: nameAppPass,
      })
      .then((response) => {
        console.log(response.data);
      });
  },

  async login({ commit }, { data }) {
    // console.log("I am in: action->login");
    await axios
      .post(`http://127.0.0.1:8000/Accounts/api/token/`, {
        username: data.username,
        password: data.password,
        // rememberMe: data.rememberMe,
      })
      .then((response) => {
        let data = response.data;
        commit("login", data.access);
        console.log("loged in successfully! and this is your access token:")
        console.log(data.access)
        console.log(" ")
      });
  },

  async register({ commit }, { data }) {
    // console.log("I am in: action->register");
    await axios
      .post(`http://127.0.0.1:8000/Accounts/register/`, {
        username: data.username,
        password: data.password,
        email: data.email,
      })
      .then((response) => {
        let data = response.data;
        commit("register", data.access);
        console.log("registered successfully! and this is your access token:")
        console.log(data.access)
        console.log(" ")
      });
  },
};
