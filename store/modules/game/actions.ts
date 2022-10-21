import {ActionTree} from "vuex"
import RootState from "~/store/rootState";
import IGameState from "~/store/modules/game/type"
import API from "~/middleware/API"
import Game from "~/middleware/Game";
const actions: ActionTree<IGameState, RootState> ={
  async getGames({commit}){
    let data: Array<Game> = (await API.games()).data
    commit('setGames', data)
  },
  filterGame({state,commit},FilterCallBack: Function){
    commit('setFilteredGames',new Map([...state.games].filter(
        ([k,v])=>{return FilterCallBack(k,v)}
        )
      )
    );
  }
}
export default actions;
