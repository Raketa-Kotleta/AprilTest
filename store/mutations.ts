import rootState from "~/store/rootState"
import {MutationTree} from "vuex";

const mutations: MutationTree<rootState> ={
  setCurrentGameId(state,id: number): void {
    state.CurrentItemId = id;
  },
  setCurrentPage(state, new_value:number):void{
    state.CurrentPage = new_value;
  },
  setPageItemCount(state, count:number):void{
    state.PageItemsCount = count;
  }
}
export default mutations;
