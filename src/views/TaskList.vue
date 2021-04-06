<template>
  <div  class="container">
    <h3 v-if="tasks.length">Мои навыки</h3>
    <div v-if="tasks.length" class="listItems">
    <transition-group name="list" tag="p">
    <TaskItem v-for="key in tasks" v-bind:key="key" :task="key" :theme="theme"></TaskItem>
    </transition-group>
    </div>
    <div v-bind:class="{changed: !tasks.length}" class="valign-wrapper col s12 m6">
      <router-link class="addTask" to="/CreateTask"  v-bind:class="[{btn: tasks.length}, theme]"><span>Добавить навык</span><i class="material-icons">add</i></router-link>
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
export default {
  props: ['theme'],
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
    font-size: 25px;
    color: #757575;
    margin: 20px 0px;
  }
  .container{
    padding-bottom: 60px;
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

  .addTask.btn{
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
  }
  .addTask.btn.lights{
    background-color: #90caf9;
  }
  .addTask.btn.dark{
    background-color: black;
  }



  .list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to:nth-child(n) /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(-700px);
}

.list-enter, .list-leave-to:nth-child(2n) /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(700px);
}


  
</style>