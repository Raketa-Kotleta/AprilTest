import {GetterTree} from "vuex"
import RootState from "~/store/rootState";
import IGameState from "~/store/modules/game/type"
import Game from "~/middleware/Game";
const getters: GetterTree<IGameState, RootState> = {
  getGamesMap(state): Map<number,Game>{
    return state.games;
  },
  getFilteredGamesMap(state):Map<number,Game>{
    return state.filtered_games;
  }
}
export default getters;

