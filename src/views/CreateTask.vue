<template>
  <div class="container">
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea v-model="text" id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Навык</label>
          <a class="blue lighten-3 btn"  @click="addTask"><i class="material-icons right">send</i>Добавить</a>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

export default {
  name: 'CreateTask',
  data: function () {
    return {
      text: '',
    }
  },
  methods: {
    addTask () {
      let task = {
        description: this.text,
        hours: 0,
        seconds: 0,
        minutes: 0,
        id: Date.now(),
      };
      console.log('hello world');
      console.log(this.text);
      this.$store.dispatch('createTask', task);
      this.text = '';
      console.log(task);
      this.$router.push('/');
    },
  },
}

</script>


<style scoped>
  .row{
    padding-top: 20px;
  }
</style>