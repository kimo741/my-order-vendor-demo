import {ref} from "vue"
const state = {
  edit_product:ref(null),
};
const mutations = {
  EDIT_PRODUCT(state , payload){
    state.edit_product = payload
  }
};
const actions = {};
const getters = {
  edit_data:(state) =>{
    return state.edit_product
  }
 };
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
