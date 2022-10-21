<template>
<div class="">
  <nav>
      <span class="logo">April</span>
      <button class="toggle-btn" @click="nav_toggle = !nav_toggle">
        <img src="../static/toggle-icon.svg">
      </button>
    <div class="toggle" :class="[nav_toggle ? 'toggled-nav' : 'untoggled-nav']">
      <ul class="nav-list">
        <li class="nav-list-item">
          <nuxt-link to="/">Главная</nuxt-link>
        </li>
        <li class="nav-list-item">
          <nuxt-link to="/">Каталог</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>
<script lang="ts">
export default {
  name: "NavBar",
  data(){
    return{
      nav_toggle: false,
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/sass/colors";
@import "assets/sass/media";
.toggled-nav{
  display: block;
}
.untoggled-nav{
  display: none;
  @include media-md{
    display: block;
  }
}
nav{
  padding: 16px 64px;
  background-color: $nav-background;
  display: flex;
  justify-content: space-between;
  color: $white;
  align-items: center;
  flex-wrap: wrap;
  @include media-xs{
    padding: 16px 12px;
  }

  .toggle-btn{
    padding: 4px 8px;
    background-color: $orange;
    border:none;
    border-radius: 4px;
    @include media-md{
      display: none;
    }
    img{
      max-width: 24px;
      max-height: 24px;
    }
  }

  .toggle{
    flex-basis: 100%;
    @include media-md{
      flex-basis: auto;
    }
  }
  .nav-list{
    list-style: none;
    margin: 0;
    padding: 0;
    .nav-list-item{
      line-height: 40px;
      padding: 8px 0;
      @include media-md{
        display: inline-block;
        margin: 0 8px;
      }
      a{
        color: $white;
      }
    }
  }
  .logo{
    font-family: "Roboto";
    font-size: 2rem;
  }
}
</style>
