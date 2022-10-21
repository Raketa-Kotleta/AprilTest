import rootState from '~/store/rootState';
import {GetterTree} from "vuex";
const getters: GetterTree<rootState, rootState> = {
  getCurrentGameId(state):number{
    let id = state.CurrentItemId;
    console.log(id)
    return id;
  }
}
export default getters;
