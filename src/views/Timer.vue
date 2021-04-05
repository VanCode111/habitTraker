<template>
  <div class="container">
    <div class="wrapper">
    <p>{{task.quote}}</p>
    <h2>{{taskTime}}</h2>
     <a class="red accent-3 btn" @click="setTime"><i class="material-icons right">alarm_off</i>Закончить</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Timer',
  data: 
    function () {
      return {
        time: 0,
        interval: null,
        hours: 0,
        minutes: 0,
        seconds: 0,
        date: new Date(),
      }
    },
  computed: {
    task () {return this.$store.getters.taskById(+this.$route.params.id);},
    taskTime () {
      function formatNumber(number){
        return (String(number).length < 2) ? String('0' + number) : number;
      }
      let hours = Math.floor(this.time / 3600);
      let minutes = Math.floor(this.time % 3600 / 60);
      let seconds = this.time - hours*3600 - minutes*60;
      return formatNumber(hours) + ":" + formatNumber(minutes) + ":" + formatNumber(seconds);
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  },
  methods: {
    setTime() {
      this.$store.dispatch('updateTime', {time: this.time, id: +this.$route.params.id});
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
  .wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
