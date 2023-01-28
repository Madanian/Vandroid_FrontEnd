export default {
  setGeneralInformation(state, infoData) {
    state.generalInformation = infoData[0];
    // console.log(state.generalInformation)
  },

  setActivityComponent(state, infoData) {
    state.activityComponent = infoData;
    // console.log(state.activityComponent)
  },

  setActivityAliasComponent(state, infoData) {
    state.activityAliasComponent = infoData;
  },

  setBroadcastReceiversComponent(state, infoData) {
    state.broadcastReceiversComponent = infoData;
  },

  setServicesComponent(state, infoData) {
    state.servicesComponent = infoData;
  },

  setContentProvidersComponent(state, infoData) {
    state.contentProvidersComponent = infoData;
  },

  setDynamicRegisteredComponent(state, infoData) {
    state.dynamicRegisteredComponent = infoData;
  },

  setUsesPermission(state, infoData) {
    state.usesPermission = infoData;
  },

  setCustomPermission(state, infoData) {
    state.customPermission = infoData;
  },

  setAPIPermission(state, infoData) {
    state.APIpermission = infoData;
  },

  setIntentMessage(state, infoData) {
    state.intentMessage = infoData;
  },

  // onStart(state) {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     state.isAuthenticated = true;
  //     state.token = token;
  //   } else {
  //     state.isAuthenticated = false;
  //     state.token = "";
  //   }
  // },

  login(state, token) {
    // handle authentication
    // console.log("here");
    // console.log(localStorage);
    console.log(token)
    if (token) {
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
    } else {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
    }
  },

  logout(state) {
    // handle authentication
    // console.log("logout");
    // console.log("here");
    // console.log(localStorage);
    state.isAuthenticated = false;
    state.token = "";
    localStorage.removeItem("token");
  },

  register(state, data) {
    state.user.push(data);
  },
};
