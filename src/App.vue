<script setup lang="ts">
import Visualizacao from "./components/Visulizacao.vue";
import Cabecalho from "./components/Cabecalho.vue";
</script>

<template>
  <Visualizacao>
    <template #footer> Rodapé Página </template>
    <template v-slot:cabecalho>
      <Cabecalho>
        <template v-slot="{ mensagem, funcao }">
          <p>{{ mensagem }}</p>
          <button @click="funcao">Clique Aqui</button>
        </template>
      </Cabecalho>
    </template>
    <router-view></router-view>
  </Visualizacao>
</template>

<style></style>
