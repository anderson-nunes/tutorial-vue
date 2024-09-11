<script setup lang="ts">
import User from "../components/User.vue";
import { useFetch } from "../composables/fetch";
import { useRoute } from "vue-router";

const router = useRoute();

const id = router.params.id;

console.log("@===>>", id);
const {
  data: pessoa,
  carregando,
  error,
} = useFetch(`https://reqres.in/api/users/${id}`);
</script>

<template>
  <div>
    <h1>Funcionarios</h1>
    <div v-if="carregando">Carregando...</div>
    <User :pessoa="pessoa" v-else />
  </div>
</template>

<style scoped></style>
