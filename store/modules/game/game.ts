import Game from "../../middleware/game"
import API from "~/middleware/API";
import store from "~/store";
import {Module} from "@nuxt/types";
import Store from "~/store";

export default {
  state(){
    return{
      games: [],
    }
  },
  mutations:{
    setGames(){

    },
    getGame(){

    }
  },
  actions:{
    getGames(Context:any):void{
      Context.dispatch()

    }
  }
}
