import Requests from "~/middleware/Requests";
import {AxiosResponse, AxiosPromise} from "axios"
import Game from "~/middleware/Game"

const BASE_URI = "https://free-to-play-games-database.p.rapidapi.com/api";
const REQUEST_KEY = "48e4b38c65msh641b3988b9e0109p136e60jsn2e322ba981c7";
const REQUEST_HOST = "free-to-play-games-database.p.rapidapi.com";
const REQUEST_EXECUTOR = new Requests(
  BASE_URI,
  REQUEST_KEY,
  REQUEST_HOST
)
const endpoints={
  games: "games"
}

export default {
  games:():Promise<AxiosResponse<Array<Game>>> => {
    return REQUEST_EXECUTOR.get(endpoints.games);
  }
}
