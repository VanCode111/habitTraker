<template>
   <nav :class="theme">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo" >HabitTraker</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        <router-link to="/" tag="li">Мои навыки</router-link>
        <li>
           <div class="switch">
    <label>
      
      <input type="checkbox"  :checked="dark" @click="changeDark">
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
        console.log(typeof this.dark + " computed");
        if (this.dark){
          return 'dark';
        }else{
          return 'lights';
        }
      },
    },
    created () {
      console.log(this.$store.getters.dark);
      this.dark = this.$store.getters.dark;
    },
    methods: {
      changeDark () {
        this.dark = !this.dark;
        this.$store.dispatch('changeDark', this.dark);
        console.log(this.dark);
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