<script setup lang="ts">
import Cabecalho from "./components/Cabecalho.vue";
// import Usuario from "./components/Usuario.vue";
// import ListaUsuario from "./components/ListaUsuario.vue";
// import ListUser from "./components/ListUser.vue";
import List from "./components/List.vue";
import EmitsFilho from "./components/EmitsFilho.vue";
// import Child from "./components/Child.vue";
import Teste from "./components/Teste.vue";
</script>

<template>
  <NavBar />
  <header>
    <Cabecalho />
  </header>

  <main>
    <!-- <Usuario />
    <ListaUsuario />
    <ListUser /> -->
    <List />
    <EmitsFilho />
    <!-- <Child /> -->
    <Teste />
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
</style>
