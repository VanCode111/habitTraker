<template>
   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">HabitTraker</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Progress</a></li>
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