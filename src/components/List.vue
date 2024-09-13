<script setup lang="ts">
import { ref, onMounted, watchEffect, computed } from "vue";
import User from "@/components/User.vue";
import { useFetch } from "../composables/fetch";

const idsSelecao = ref([]);

const {
  data: pessoas,
  carregando,
  error,
} = useFetch("https://reqres.in/api/users?page=2");

const adicionaSelecao = (id: number) => {
  if (idSelecionado(id)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== id);
  } else {
    idsSelecao.value.push(id);
  }
};

const pessoasSelecionadas = computed(() => {
  if (!pessoas.value) return [];
  return pessoas.value.filter((pessoa) => idSelecionado(pessoa.id));
});

const idSelecionado = (id: number) => {
  return idsSelecao.value.includes(id);
};

const msgFilho = () => {
  alert("Mensagem enviada para o filho");
};
</script>

<template>
  <div v-if="carregando">
    <h3>Carregando...</h3>
  </div>
  <div v-else class="container">
    <div class="pessoas">
      <h2>Usuários Disponíveis</h2>
      <div class="info-user">
        <div
          class="usuarios-disponiveis"
          v-for="pessoa in pessoas"
          :key="pessoa.id"
        >
          <User
            :pessoa="pessoa"
            :selecao="idSelecionado(pessoa.id)"
            :testando="{ name: 'Anderson' }"
            @selecao="adicionaSelecao"
          >
            <template #extra>
              <button @click="msgFilho">Envia Mensagem</button>
            </template>
            <template #msg> mensagem para teste </template>
          </User>
        </div>
      </div>
    </div>
    <div class="selecionados">
      <h2>Selecionados</h2>
      <div class="cards-container">
        <div v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">
          <img :src="pm.avatar" alt="Avatar" />
          <span>{{ pm.first_name }}</span>
        </div>
      </div>
    </div>
    <div>
      <slot :funcao="msgFilho"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.selecionados,
.pessoas {
  width: 48%;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.info-user {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.selecionados {
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.selecionados h2 {
  margin-bottom: 20px;
}

.selecionados .cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.pessoas {
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.usuarios-disponiveis {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-end;
}

.card {
  width: 150px;
  height: 150px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #6fd6d6;
}

.card span {
  font-size: 1rem;
  color: #333;
}
</style>
