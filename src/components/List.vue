<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import User from "@/components/User.vue";

const pessoas = ref([]);
const idsSelecao = ref([]);
const pessoasSelecionadas = ref([]);

const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  const data = json.data;
  return data;
};

onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});

const adicionaSelecao = (id: number) => {
  if (idSelecionado(id)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== id);
  } else {
    idsSelecao.value.push(id);
  }
};

watchEffect(() => {
  pessoasSelecionadas.value = pessoas.value.filter((pessoa) =>
    idSelecionado(pessoa.id)
  );
});

const idSelecionado = (id: number) => {
  return idsSelecao.value.includes(id);
};

const testeEventos = (evento: any) => {
  console.log("@==>", evento);
};
</script>

<template>
  <div class="container">
    <div class="pessoas">
      <h2>Usuários Disponíveis</h2>
      <div class="usuarios-disponiveis">
        <User
          v-for="pessoa in pessoas"
          :key="pessoa.id"
          :pessoa="pessoa"
          :selecao="idSelecionado(pessoa.id)"
          :testando="{ name: 'Anderson' }"
          @selecao="adicionaSelecao"
          @testando="testeEventos"
        />
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
