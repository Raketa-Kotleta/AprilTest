<template>
  <div class="">
    <div class="container">
      <ModalView :id="modal.modal_id" :title="modal.modal_title"></ModalView>
      <div class="settings">
        <div class="search-setting">
          <input class="search-field" v-model="filter" placeholder="Введите что-нибудь, к примеру(Windows, MMORPG, 23, Wargaming...). Нажмите на поиск"><button @click="FilterGame"class="search-btn"><img src="../static/search-icon.svg" alt=""></button>
        </div>
       <div class="page-view-setting">
         <button class="" @click="pageViewer.current = pageViewer.values.GRID" :class="pageViewer.current == pageViewer.values.GRID ? 'active-button':''"><img src="../static/list-grid-icon.png" alt=""></button>
         <button class="" @click="pageViewer.current = pageViewer.values.LINEAR" :class="pageViewer.current == pageViewer.values.LINEAR ? 'active-button':''"><img src="../static/list-icon.png" alt=""></button>
       </div>
      </div>
      <h1 class="no-result-msg" v-if="!this.$store.getters['modules/game/getFilteredGamesMap'].size">No results!</h1>
      <GameList :orientation="pageViewer.current "></GameList>
      <div class="pagination-wrapper">
        <PaginationView></PaginationView>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameCard from "~/components/GameCard.vue";
import ModalView from "~/components/ModalView.vue";
import PaginationView from "~/components/PaginationView.vue";
import GameList from "~/components/GameList.vue";
import Game from "~/middleware/Game";
export default Vue.extend({
  name: 'IndexPage',
  components:{
    GameCard,
    ModalView,
    PaginationView,
    GameList,
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
      modal:{
        modal_title: "Modal",
        modal_id: "modal-1",
      },
      filter:"",
    }
  },
  methods:{
    FilterGame():void{
      if (this.filter.length > 0)
        this.$store.dispatch('modules/game/filterGame',this.Filter);
      else this.$store.commit('modules/game/setFilteredGames', this.$store.getters["modules/game/getGamesMap"])
      this.$store.commit('setCurrentPage',1);
    },
    Filter(key: number, value: Game):boolean{ //фильтрующая функция. Передаем в аргументы как callback
      type GameKey = keyof Game;
      let flag: boolean = false;
      let regExp: RegExp = new RegExp(`([ \(\-]|^)${this.filter.trim()}([ \)\-]|$)`,'i'); //регулярное выражение
      for(let key in (value as Game)) {
        if (regExp.exec(value[key as GameKey].toString())!= null) flag = true;
      }
      return flag;
     }
  },
  async fetch({store}) {
    await store.dispatch('modules/game/getGames');
    store.commit('setCurrentGameId', 2)
    await store.commit('modules/game/setFilteredGames',store.getters["modules/game/getGamesMap"]);
    await store.commit('setCurrentPage',1);
    await store.commit('setPageItemCount',12);
  },
})
</script>
<style lang="scss">
@import "/assets/sass/colors";
  .no-result-msg{
    text-align: center;
    color: $grey;
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
  .pagination-wrapper{
    display: flex;
    justify-content: center;
    margin: 32px 0 8px 0;
    align-self: end;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .container{
    margin-bottom: 96px;
  }
</style>
