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
      this.$store.dispatch('updateTime', {hours: this.hours, seconds: this.seconds, minutes: this.minutes, id: +this.$route.params.id});
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
