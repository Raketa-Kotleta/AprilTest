import {MutationTree} from "vuex"
import IGameState from "~/store/modules/game/type"
import Game from "~/middleware/Game"

const mutations: MutationTree<IGameState> = {
  setGames(state, games: Array<Game>){
    let newGamesMap: Map<number,Game> = new Map<number, Game>()
    games.forEach((GameItem:Game)=>{
      newGamesMap.set(
        GameItem.id,
        GameItem
      )
    })
    state.games = newGamesMap;
  },
  setFilteredGames(state, filtered: Map<number,Game>){
    if (filtered != null)
      state.filtered_games = filtered;
  }
}
export default mutations;
