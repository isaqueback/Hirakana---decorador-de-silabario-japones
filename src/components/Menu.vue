<template>
  <div>
    <v-app-bar dense flat color="#000" class="px-7">
      <v-toolbar-title>
        <router-link
          class="link font-weight-thin text-h5"
          exact-active-class="activated"
          to="/"
        >
          Hirakana
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link
        class="link font-weight-black text-h5"
        exact-active-class="activated"
        to="/about"
        >?</router-link
      >
    </v-app-bar>
    <hr class="menu-border" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: #bbbbbb;
  text-decoration: none;
}

.link:hover {
  color: #f6f6f6;
}

.activated {
  color: #f7f4f4;
}

.menu-border {
  border: none;
  background-color: #00B8A9;
  height: 2px;
}
</style>