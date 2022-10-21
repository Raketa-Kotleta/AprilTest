import rootState from "~/store/rootState"
import {MutationTree} from "vuex";

const mutations: MutationTree<rootState> ={
  setCurrentGameId(state,id: number): void {
    state.CurrentItemId = id;
  }
}
export default mutations;
