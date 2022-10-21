<template>
<div  v-model="View" :class="View == LINEAR_VIEW ? 'linear-game-card':'vertical-game-card'">

    <div class="thumbnail-wrapper">
      <img :src="Thumbnail" alt="none" class="thumbnail">
    </div>
    <div class="game-info">
      <h4 class="title">{{Title}}</h4>
      <div class="body">
        <span class="description">{{Description}}</span>
      </div>
      <div class="footer">
        <span class="publish-date">Published {{PublishDate.split("-").join(".")}}</span>
        <b-button v-b-modal.modal-1 @click="changeCurrentGameId(Id)">More</b-button>
      </div>
    </div>

</div>
</template>

<script lang="ts">
import Vue from "Vue"
import store from "~/store";

export default{
  props:{
    Id: Number,
    Title: String,
    Thumbnail: String,
    Description: String,
    Publisher: String,
    PublishDate: String,
    View:String,
  },
  methods:{
    changeCurrentGameId(id: number):void{
      console.log();
      this.$store.commit('setCurrentGameId',id)
    }
  },
  data(){
    return{
      LINEAR_VIEW: 'linear',
      VERTICAL_VIEW: 'vertical',

    }
  },
  name: "GameCard"
}
</script>


<style scoped lang="scss">
@import "assets/sass/colors";
@import "assets/sass/media";
.btn-orange{
  background-color: $orange;
  color: $white;
}

.linear-game-card{
  box-shadow: 0px 10px 14px 0px rgba(90, 90, 90, 0.33);
  border: 1px solid $light_gray;
  border-radius: 4px;
  display: flex;
  width: 100%;
  .thumbnail-wrapper{
    width: 40%;
    @include media-sm{
      width: 33%;
    }
  }
  .thumbnail{
    width: 100%;
    height: auto;
  }
  .game-info{
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 4px;
    @include media-sm {
      width: 67%;
    }
  }
  .body{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: auto;
    font-size: .8rem;
    @include media-md{
      white-space: normal;
      font-size: 1rem;
    }
  }
  .title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1rem;
    margin-bottom: 2px;
    @include media-sm{
      font-size: 1.2rem;
    }
    @include media-md{
      font-size: 1.5rem;
    }
  }
  .footer{
    display: flex;
    flex-direction: row;
    font-size: .6rem;
    justify-content: space-between;
    align-items: end;
    @include media-sm{
      font-size: .7rem;
    }
    @include media-md{
      font-size: 1rem;
    }
    .publish-date{
      color: $grey;
    }
    button{
      font-size: inherit;
      align-self: end;

    }
  }
}


.vertical-game-card{
  border-radius: 4px;
  border: 1px solid $light_gray;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 14px 0px rgba(90, 90, 90, 0.33);
  max-width: 350px;
  @include media-md{
    max-width: 300px;
  }
  @include media-lg{
    max-width: 350px;
  }
  .thumbnail{
    width: 100%;
    height: auto;
  }
  .game-info{
    padding: 0 8px;
    .title{
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .body{
      height: 150px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .footer{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px 0;
    border-top: 1px solid $light_gray;

    .publish-date{
      line-height: 2;
      color: $grey;
    }
  }
}
</style>
