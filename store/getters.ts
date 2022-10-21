import rootState from '~/store/rootState';
import {GetterTree} from "vuex";
const getters: GetterTree<rootState, rootState> = {
  getCurrentGameId(state):number{
    let id = state.CurrentItemId;
    console.log(id)
    return id;
  },
  getCurrentPage(state):number{
    return state.CurrentPage;
  },
  getPageItemsCount(state):number{
    return state.PageItemsCount;
  }
}
export default getters;
