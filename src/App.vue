<template>
  <component :is="layout"/>
</template>

<script>
import mainLayout from '@/layouts/mainLayout.vue';
import createLayout from '@/layouts/createLayout.vue';
import Empty from '@/layouts/Empty.vue';
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta['layout'];
    },
  },
  components: {
    mainLayout,
    createLayout,
    Empty,
  },
}
</script>


<style lang="scss" scoped>
@import "~materialize-css/dist/css/materialize.min.css";

</style>
