<template>
   <nav :class="theme">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" >HabitTraker</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        <router-link to="/" tag="li">Мои навыки</router-link>
        <li>
           <div class="switch">
    <label>
      
      <input type="checkbox" @click="changeDark" v-model="dark">
      <span class="lever"></span>
      
    </label>
  </div>
        </li>
      </ul>
    </div>
    
  </nav>
  <router-view :theme="theme"/>
</template>

<script>

  export default{
    name: 'mainLaout',
    data: function () {
      return {
        dark: true,
        isLoading: true,
      }
    },
    components: {

    },
    computed: {
      theme () {
        if (this.dark){
          return 'dark';
          
        }else{
          return 'lights';
        }
      },
    },
    created () {
      this.dark = this.$store.getters.dark;
    },
    methods: {
      changeDark () {
        this.$store.dispatch('changeDark', !this.dark);
      },
    }
    
  }
  

</script>


<style scoped>
  ul{
    display: flex;
  }
  nav{
    padding: 0px 20px;
  }
  nav.lights{
    background-color: #90caf9;
  }
  nav.dark{
    background-color: black;
  }
</style>