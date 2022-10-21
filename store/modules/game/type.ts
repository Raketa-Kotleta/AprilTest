import Game from "~/middleware/Game";

export default interface IGameState{
  games: Map<number,Game>,
  filtered_games: Map<number,Game>,
}
