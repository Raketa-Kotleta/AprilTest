<template>
  <b-modal :id="Id" ok-only body-class="custom-modal-body" footer-class="custom-modal-footer" hide-header button-size="sm" ok-variant="warning" ok-title="Understand">
    <img :src="getStore.thumbnail" class="game-modal-image" alt="123">
    <h3 class="game-modal-title">{{getStore.title}}</h3>
    <ul class="game-modal-settings">
      <li class="game-modal-setting" v-for="(index,key) of settings_keys" :key="key">
        <span class="setting-name"><strong>{{key}}<br/></strong></span>
        <span class="setting-value">{{getStore[index]}}</span>
      </li>
    </ul>
  </b-modal>
</template>

<script lang="ts">
import Game from "~/middleware/Game";

import Vue from "vue";

export default Vue.extend({
  name: "ModalView",
  props:{
    Id: String,
    Title: String,
  },
  data(){
    return{
      settings_keys:{
        "Description": "short_description",
        "Genre":"genre",
        "Platform":"platform",
        "Publisher":"publisher",
        "Developer":"developer",
        "Published":"release_date"
      }
    }
  },
  methods:{

  },
  computed: {
    getStore:function():Game{
      return this.$store.getters["modules/game/getGamesMap"].get(this.getCurrentGameId);
    },
    getCurrentGameId:{
      get():number{
        return this.$store.getters.getCurrentGameId;
      },
      set(val){

      }
    }
  }
})
</script>

<style lang="scss">
@import "assets/sass/colors";
.custom-modal-body{
  padding: 0;
  margin: 0;
  border: none;
}
.custom-modal-footer{
  border: none;
}
.game-modal-image{
  width: 100%;
  height: auto;
}
.game-modal-title{
  text-align: center;
  margin: 12px 0;
}
.game-modal-settings{
  list-style: none;
  padding: 0 16px;
  .game-modal-setting{
    border-top: 1px solid $light_gray;
    padding: 16px 0;
    .setting-value{
      color: $grey;
      font-size: 1rem;
    }
    .setting-name{
      font-size: 1.2rem;
    }
  }
}
</style>
