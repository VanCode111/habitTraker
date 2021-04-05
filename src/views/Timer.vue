<template>
  <div class="container">
    <div class="wrapper">
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
      return this.hours + ":" + this.minutes + ':' + this.seconds;
    },
  },
  created() {
    let task = this.$store.getters.taskById(+this.$route.params.id);
    this.hours = task.hours;
    this.minutes = task.minutes;
    this.seconds = task.seconds;
    this.interval = setInterval(() => {
      if(this.seconds >= 59){
        if(this.minutes >= 59){
          this.hours++;
          this.minutes = 0;
        }else{
          this.minutes++
        }
        this.seconds = 0
      }else{
        this.seconds++;
      }
    }, 1000);
  },
  methods: {
    setTime() {
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
