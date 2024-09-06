<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Usuário {
  name: string;
  city: string;
  age: number;
  job: string;
}

const props = defineProps<{
  user: Usuário;
}>();

const emit = defineEmits([
  "updateJob",
  "updateLastName",
  "updateUser",
  "removeUser",
]);

const updatingJob = () => {
  emit("updateJob", "Arquiteto de Software");
};

const updateLastName = () => {
  emit("updateLastName", "Anderson Ribeiro Nunes");
};

const sendData = () => {
  emit("updateUser", { city: "Porto Alegre", age: 38 });
};

const removingUser = () => {
  emit("removeUser", props.user.name);
};
</script>

<template>
  <div class="container">
    <p>Meu nome é: {{ props.user.name }}</p>
    <p>Moro na cidade: {{ props.user.city }}</p>
    <p>Tenho: {{ props.user.age }} anos</p>
    <p>Sou: {{ props.user.job }}</p>
    <div class="btn">
      <button @click="updatingJob">Atualiza Profissão</button>
      <button @click="updateLastName">Atualiza Nome</button>
      <button @click="sendData">Enviar Dados de Atualização</button>
      <button @click="removingUser">Remover Usuário</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.btn {
  width: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
}
</style>
