<template>
  <v-app style="background-color: #eeeeee; z-index: 1">
    <Menu />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",
  components: { Menu },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;800;900&display=swap");

* {
  font-family: "M PLUS Rounded 1c", sans-serif;
}
</style>
