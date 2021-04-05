<template>
  <div  class="container">
    <div v-if="tasks.length" class="listItems">
    <TaskItem v-for="key in tasks" v-bind:key="key" :description="key"></TaskItem>
    </div>
    <div v-bind:class="{changed: !tasks.length}" class="valign-wrapper col s12 m6">
      <router-link class="addTask" to="/CreateTask" ><span>Добавить задачу</span><i class="material-icons">add</i></router-link>
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

  .listItems{
    padding-top: 20px;
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