<template>
  <div class="container">
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea placeholder="Навык" v-model="text" class="materialize-textarea"></textarea>
          <textarea placeholder="Добавь вдохновляющую цитату 🙏" v-model="quote" class="materialize-textarea"></textarea>
          <a class="btn"  @click="addTask" :class="theme"><i class="material-icons right">send</i>Добавить</a>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

export default {
  name: 'CreateTask',
  props: ['theme'],
  data: function () {
    return {
      text: '',
      quote: '',
    }
  },
  methods: {
    addTask () {
      
      let task = {
        description: this.text,
        quote: this.quote,
        time: 0,
        hours: 0,
        seconds: 0,
        minutes: 0,
        id: Date.now(),
      };
      if (this.text.length){
        this.$store.dispatch('createTask', task);
      this.text = '';
      this.quote = '';
      console.log(task);
      this.$router.push('/');
      }
    },
  },
}

</script>


<style scoped>
  .btn.dark{
    background-color: black;
  }
  .btn.lights{
    background-color: #90caf9;
  }
  .row{
    padding-top: 20px;
  }
</style>