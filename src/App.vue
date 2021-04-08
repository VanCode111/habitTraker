<template>
  <div id="app">
    <Loading v-if="isLoading"/>
    <component :is="layout"/>
  </div>
</template>

<script>
import mainLayout from '@/layouts/mainLayout.vue';
import createLayout from '@/layouts/createLayout.vue';
import Loading from '@/components/Loading.vue';
import Empty from '@/layouts/Empty.vue';
export default {
  name: 'App',
  data: function (){
    return {
      isLoading: true,
    }
  },
  computed: {
    layout() {
      return this.$route.meta['layout'];
    },
  },
  components: {
    mainLayout,
    createLayout,
    Empty,
    Loading,
  },
  created () {
    setTimeout(() => {this.isLoading = false}, 2000);
  }
}
</script>


<style lang="scss" scoped>
#app{
  overflow: hidden;
}

@import "~materialize-css/dist/css/materialize.min.css";

</style>
