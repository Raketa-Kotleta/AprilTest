import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import rootState from "~/store/rootState"
import GameModule from "~/store/modules/game/game";
import mutations from "~/store/mutations";
import getters from "~/store/getters";
import actions from "~/store/actions";
Vue.use(Vuex)
const store: StoreOptions<rootState> = {
  state:{
    CurrentItemId: 1,
    CurrentPage: 0,
    PageItemsCount: 0,
  },
  mutations,
  getters,
  actions,
  modules:{
    GameModule,

  }
}
export default new Vuex.Store(store)
