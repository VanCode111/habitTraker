<template>
   <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{task.description}}</p>
        </div>
        <div class="card-action">
          <router-link :to="'/timer/' + task.id" class="blue lighten-3 btn">Тренировать навык<i class="material-icons right">fitness_center</i> </router-link>
          <a class="red accent-3 btn delete"  @click="deleteTask"><i class="material-icons right">delete</i></a>
          <p>{{time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    show() {
      console.log(this.task.id);
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id);
    }
  },
  computed: {
    time () {
      return 'Часов: ' + Math.floor(this.task.time / 3600) + " Минут: " + Math.floor(this.task.time % 3600 / 60);
    }

  }
}

</script>

<style scoped>
  .delete i{
    margin: 0px;
  }
  .delete{
    margin-left: 5px;
    margin-right: auto;
  }
  .card-action{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
