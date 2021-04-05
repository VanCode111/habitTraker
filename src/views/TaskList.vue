<template>
  <div  class="container">
    <h3 v-if="tasks.length">Мои навыки</h3>
    <div v-if="tasks.length" class="listItems">
    <TaskItem v-for="key in tasks" v-bind:key="key" :task="key"></TaskItem>
    </div>
    <div v-bind:class="{changed: !tasks.length}" class="valign-wrapper col s12 m6">
      <router-link class="addTask" to="/CreateTask" ><span>Добавить навык</span><i class="material-icons">add</i></router-link>
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  components: {
    TaskItem,
  },
}
</script>


<style scoped>
  h3{
    margin: 20px 0px;
  }
  .valign-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .valign-wrapper.changed{
    height: 500px;
  }
  .addTask{
    display: flex;
    align-items: center;
  }
  
</style>