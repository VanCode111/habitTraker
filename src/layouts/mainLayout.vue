<template>
   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">HabitTraker</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/" tag="li"><a href="#">Мои навыки</a></router-link>
      </ul>
    </div>
  </nav>
  <router-view/>
</template>

<style scoped>
  nav{
    padding: 0px 20px;
    background-color: #90caf9;
  }
</style>