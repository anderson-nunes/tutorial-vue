<script setup lang="ts">
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();

const { totalCargos } = storeToRefs(store);

const menus = [
  { id: 1, nome: "Home", path: "/" },
  { id: 2, nome: "Equipe", path: "/equipe" },
];
</script>
<template>
  <nav>
    <span>Tutorial Vue</span>
    Total Cargos {{ totalCargos }}
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <router-link :to="menu.path">{{ menu.nome }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #cae7e8;
}

ul {
  display: flex;
  list-style: none;
}

ul li {
  padding: 0 5px;
}

ul li a {
  text-decoration: none;
  color: #117177;
}
</style>
