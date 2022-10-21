<template>
<div class="pagination">
  <button class="arrow-btn" @click="movePrev()">
<!--    <img src="../static/left-arrow.png" alt="">-->
    Назад
  </button>
  <div class="pagination-info">
    <span class="current-page">{{CurrentPage}}</span>
    <span class="divider">/</span>
    <span class="max-page-count">{{MaxPagesCount || 1}}</span>
  </div>
  <button class="arrow-btn" @click="moveNext()">
<!--    <img src="../static/right-arrow.png" alt="">-->
    Вперед
  </button>
</div>
</template>

<script lang="ts">

export default {

  name: "PaginationView",
  methods:{
    moveNext(){
      this.changePage(1);
    },
    movePrev(){
      this.changePage(-1);
    },
    changePage(step:number):void{
      let page: number = this.$store.getters.getCurrentPage + step;
      if (page > 0 && page <= this.MaxPagesCount)
        this.$store.commit('setCurrentPage',page)
      }
  },
  computed:{
    MaxPagesCount:function():number {
      return Math.ceil(
        this.$store.getters["modules/game/getFilteredGamesMap"].size / this.$store.getters.getPageItemsCount
      );
    },
    CurrentPage():number{
       return this.$store.getters.getCurrentPage
    },
  }
}
</script>

<style scoped lang="scss">
@import "assets/sass/colors";
.pagination{
  display: flex;
  align-items: center;
  padding:16px 0;
  .arrow-btn{
    padding: 8px;
    border: 1px solid $orange;
    background-color: $orange;
    border-radius: 4px;
    text-align: center;
    width: 100px;
    color:white;
    }
  .pagination-info{
    font-family: Roboto;
    margin: 0px 32px;
    span{
      font-size: 1.2rem;
    }
  }
}

</style>
