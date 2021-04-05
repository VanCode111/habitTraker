<template>
   <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{task.description}}</p>
        </div>
        <div class="card-action">
          <router-link :to="'/timer/' + task.id" class="blue lighten-3 btn">Тренировать навык<i class="material-icons right">fitness_center</i> </router-link>
          <p>Время: {{task.hours + ':' + task.minutes}}</p>
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
    }
  }
}

</script>

<style scoped>
  .card-action{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
