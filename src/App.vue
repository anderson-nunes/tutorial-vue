<script setup lang="ts">
import Cabecalho from "./components/Cabecalho.vue";
// import Usuario from "./components/Usuario.vue";
// import ListaUsuario from "./components/ListaUsuario.vue";
// import ListUser from "./components/ListUser.vue";
import EmitsFilho from "./components/EmitsFilho.vue";
// import Child from "./components/Child.vue";
import Product from "./components/Product.vue";
import Video from "./components/Video.vue";
</script>

<template>
  <NavBar />
  <header>
    <Cabecalho />
  </header>

  <main>
    <router-view></router-view>
    <!-- <Usuario />
    <ListaUsuario />
    <ListUser /> -->

    <!-- <EmitsFilho /> -->
    <!-- <Child /> -->
    <!-- <Product /> -->
    <!-- <Video /> -->
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}

[color-scheme="dark"] {
  background: black;
  color: white;
}

[color-scheme="light"] {
  background: orange;
  color: white;
}
</style>
