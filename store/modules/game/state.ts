import IGameState from "~/store/modules/game/type"
import Game from "~/middleware/Game";

const GameState: IGameState = {
  games: new Map<number,Game>(),
  filtered_games: new Map<number,Game>(),
};
export default GameState;
