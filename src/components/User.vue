<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

interface Pessoa {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
}

interface Testando {
  name: string;
}

const props = defineProps<{
  pessoa: Pessoa;
  selecao: boolean;
  testando: Testando;
}>();

const emit = defineEmits(["selecao", "testando"]);

const enviaEmit = () => {
  emit("selecao", props.pessoa.id);
};

const redirecionaFuncionario = (id: any) => {
  router.push(`/equipe/${id}`);
};
</script>

<template>
  <div class="perfil">
    <img :src="props.pessoa.avatar" alt="perfil" />
    <strong>{{ props.pessoa.first_name }}</strong>
    <span>{{ props.pessoa.last_name }}</span>
    <button
      :class="{
        selecionar: !props.selecao,
        desmarcar: props.selecao,
      }"
      @click="enviaEmit"
    >
      {{ !props.selecao ? "Selecionar" : "Desmarcar" }}
    </button>
    <button class="btn-info" @click="redirecionaFuncionario(pessoa.id)">
      Info funcionario
    </button>
  </div>
</template>

<style scoped>
.perfil {
  width: 150px;
  text-align: center;
}

.perfil img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}

.perfil span {
  display: block;
  font-size: 16px;
}

button {
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.selecionar {
  background-color: #4caf50;
  color: white;
}

button.desmarcar {
  background-color: #f44336;
  color: white;
}

.btn-info {
  background: #4681f4;
  color: white;
}
</style>
