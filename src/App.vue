<template>
  <component :is="layout"/>
</template>

<script>
import mainLayout from '@/layouts/mainLayout.vue';
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta['layout'];
    },
  },
  components: {
    mainLayout,
  },
}
</script>


<style lang="scss" scoped>
@import "~materialize-css/dist/css/materialize.min.css";

</style>
