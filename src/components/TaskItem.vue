<template>
   <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{description}}</p>
        </div>
        <div class="card-action">
          <a href="#" class="blue lighten-3 btn">Тренировать навык</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskItem',
  props: ['description'],
}

</script>
