export default {
  setGeneralInformation(state, infoData) {
    state.generalInformation = infoData[0]
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

  setUsesPermissionCard(state, infoData) {
    state.usesPermission = infoData;
  },

  setCustomPermissionCard(state, infoData) {
    state.customPermission = infoData;
  },

  setAPIPermissionCard(state, infoData) {
    state.APIpermission = infoData;
  },

  // addAxiosData(state, data) {
  //   state.generalInformation = data[0]
  //   //state.generalInformation.push(data[0]);
  // },
};
