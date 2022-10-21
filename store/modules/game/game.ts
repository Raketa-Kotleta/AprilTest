import {Module} from 'vuex';
import rootState from '~/store/rootState'
import IGameState from '~/store/modules/game/type'
import mutations from "~/store/modules/game/mutations";
import actions from "~/store/modules/game/actions";
import state from "~/store/modules/game/state";
import getters from "~/store/modules/game/getters";
const GameModule: Module<IGameState,rootState> = {
  state,
  actions,
  mutations,
  getters,
}
export default GameModule;
