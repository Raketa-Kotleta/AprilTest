<template>
  <div class="">
    <div class="container">

      <ModalView :id="modal_id" :title="modal_title"></ModalView>
      <div class="settings">
        <div class="search-setting">
          <input class="search-field" v-model="filter" placeholder="Введите что-нибудь, к примеру(Windows, MMORPG, 23, Wargaming...). Нажмите на поиск"><button @click="FilterGame"class="search-btn"><img src="../static/search-icon.svg" alt=""></button>
        </div>
       <div class="page-view-setting">
         <button class="" @click="pageViewer.current = pageViewer.values.GRID" :class="pageViewer.current == pageViewer.values.GRID ? 'active-button':''"><img src="../static/list-grid-icon.png" alt=""></button>
         <button class="" @click="pageViewer.current = pageViewer.values.LINEAR" :class="pageViewer.current == pageViewer.values.LINEAR ? 'active-button':''"><img src="../static/list-icon.png" alt=""></button>
       </div>
      </div>
      <div class="game-list"  :class="pageViewer.current == pageViewer.values.LINEAR ? 'column-list':'linear-list'">
        <GameCard v-for="game in gamesData.values()"
                  :key="game.id"
                  :id="game.id"
                  :thumbnail="game.thumbnail"
                  :title="game.title"
                  :description="game.short_description"
                  :publish-date="game.release_date"
                  :publisher="game.publisher"
                  :view="pageViewer.current">
        </GameCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameCard from "~/components/GameCard.vue";
import ModalView from "~/components/ModalView.vue";
import Game from "~/middleware/Game";
export default Vue.extend({
  name: 'IndexPage',
  components:{
    GameCard,
    ModalView,
  },
  data(){
    return{
      pageViewer:{
        current: 'vertical',
        values: {
          LINEAR: "linear",
          GRID: "vertical"
        }
      },
      modal_title: "Modal",
      modal_id: "modal-1",
      filter:"",
    }
  },
  methods:{
    FilterGame():void{
      if (this.filter.length > 0)
        this.$store.dispatch('modules/game/filterGame',this.Filter);
      else this.$store.commit('modules/game/setFilteredGames', this.$store.getters["modules/game/getGamesMap"])
    },
    Filter(key: number, value: Game):boolean{
      type GameKey = keyof Game;
      let flag: boolean = false;
      let regExp: RegExp = new RegExp(`([ \(\-]|^)${this.filter.trim()}([ \)\-]|$)`,'i');
      for(let key in (value as Game)) {
        console.log(value[key as GameKey]);
        if (regExp.exec(value[key as GameKey].toString())!= null) flag = true;
      }


      return flag;
      // console.log(key);
     }
  },
  computed:{
    gamesData:{
     get(){
       return this.$store.getters["modules/game/getFilteredGamesMap"]
     },
      set(value){

      }
    },
  },
  async fetch({store}) {
    await store.dispatch('modules/game/getGames');
    store.commit('setCurrentGameId', 2)
    await store.commit('modules/game/setFilteredGames',store.getters["modules/game/getGamesMap"]);
  },
})
</script>
<style lang="scss">
@import "/assets/sass/colors";
  .column-list{
    flex-direction: column;
  }
  .linear-list{
    flex-direction: row;
  }
  .game-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px 16px;
  }
  .settings{
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    margin:32px 0 16px 0;
    .search-setting{
      border-radius: 4px;
      overflow: hidden;
      flex:1;
      .search-field{
        outline: none;
        background-color: $light_light_grey;
        border:none;
        padding: 8px 16px;
        width: 100%;
        max-width: 40vw;
        margin: 0;
      }
      .search-btn{
        background-color: $light_light_grey;
        padding: 4px 8px;
        border:none;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        height: 40px;
        width: 40px;
        img{
          height: 20px;
          width: 20px;
        }
      }
    }
    .page-view-setting{
      button{
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid $light_light_grey;
        img{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
  .active-button{
    border: 1px solid $orange;
    background-color: $orange;
  }
</style>
