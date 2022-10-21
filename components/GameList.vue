<template>
  <div class="game-list"  :class="Orientation == pageViewValues.LINEAR ? 'column-list':'linear-list'">
    <GameCard v-for="game of getGamesData.slice(Interval.start,Interval.end)"
              :key="game.id"
              :id="game.id"
              :thumbnail="game.thumbnail"
              :title="game.title"
              :description="game.short_description"
              :publish-date="game.release_date"
              :publisher="game.publisher"
              :view="Orientation">
    </GameCard>
  </div>
</template>

<script lang="ts">
import Game from "@/middleware/Game";

export default {
  name: "GameList",
  props:{
    Orientation: String,
  },
  data(){
    return{
      pageViewValues:{
        LINEAR: "linear",
        GRID: "vertical"
      }
    }
  },
  computed:{
    getGamesData():Array<Game> {
      return [...this.$store.getters["modules/game/getFilteredGamesMap"].values()]
    },
    Interval():Object{
      let start = (this.$store.getters.getCurrentPage-1) * this.$store.getters.getPageItemsCount
      return {
        start: start,
        end: start + this.$store.getters.getPageItemsCount,
      }
    }
  }
}
</script>

<style scoped>
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
</style>
