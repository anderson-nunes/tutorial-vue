<script setup lang="ts">
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();

const { cargos, cores } = storeToRefs(store);
</script>
<template>
  <h1>Equipe</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}

    <button @click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="css in cores" :key="css">
    {{ css }}
  </div>
</template>

<style scoped>
h1 {
  color: black;
}
</style>
