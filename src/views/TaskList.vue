<template>
  <div  class="container">
    <div v-if="true" class="valign-wrapper col s12 m6">
      <router-link class="addTask" to="/CreateTask" ><span>Добавьте задачу</span><i class="material-icons">add</i></router-link>
    </div>
  </div>
</template>

<style scoped>
  .valign-wrapper{
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .addTask{
    display: flex;
    align-items: center;
  }
  
</style>