<script setup lang="ts">
import { ref } from "vue";
import { useCargos } from "../store/cargos";
import { storeToRefs } from "pinia";

const store = useCargos();

const corSelecionada = ref("fffff");

const { cargos, cores } = storeToRefs(store);

const mudarCor = (cor: string) => {
  corSelecionada.value = cor;
};
</script>
<template>
  <h1>Equipe</h1>
  <div v-for="c in cargos" :key="c.id">
    {{ c.cargo }} {{ c.nome }}

    <button @click="store.removeCargo(c.id)">Remover</button>
  </div>
  <div v-for="css in cores" :key="css">
    {{ css }}
    <button @click="mudarCor(css)">Mudar Cor</button>
  </div>
  <div class="painel"></div>
</template>

<style scoped>
h1 {
  color: black;
}

.painel {
  width: 70px;
  height: 30px;
  border: 1px solid;
  background: v-bind(corSelecionada);
}
</style>
