<template>
<div class="sidebar">

</div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .sidebar{
    background-color: #2f2f2f;
    height: 75vh;
    width: 20vh;
    display: flex;
    position: fixed;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>