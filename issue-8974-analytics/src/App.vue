<template>
  <div>
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">Go to Home</router-link>
        </li>
        <li>
          <router-link to="/about">Go to About</router-link>
        </li>
        <li>
          <router-link to="/404">Page Not Found</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("App mounted");
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
}

ul li {
  margin-right: 1em;
}
</style>
