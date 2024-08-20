<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const pessoa = ref({});
const codigoUsuario = ref(0);

onMounted(async () => {
  pessoa.value = await buscaInformacoes(1);
});

const habilidaBotao = computed(() => codigoUsuario.value > 0);

const nomeCompleto = computed(() => {
  `${pessoa.value.first_name} ${pessoa.value.last_name}`;
});

const pesquisaInformacoes = async () => {
  pessoa.value = await buscaInformacoes(codigoUsuario.value);
};

const buscaInformacoes = async (codigo: number) => {
  const req = await fetch(`https://reqres.in/api/users/${codigo}`);
  const json = await req.json();
  const data = json.data;
  return data;
};

defineProps({
  first_name: String,
});
</script>
<template>
  <div class="container">
    <form class="formulario">
      <label for="codigoUsuario">Código Usuário</label><br />
      <input
        type="text"
        id="codigoUsuario"
        name="codigoUsuario"
        v-model="codigoUsuario"
      />
    </form>
    <button
      class="botao"
      :disabled="!habilidaBotao"
      v-on:click="pesquisaInformacoes"
    >
      Buscar
    </button>
    <div class="perfil">
      <img :src="pessoa.avatar" alt="perfil" />
      <strong>{{ nomeCompleto }}</strong>
      <span>{{ pessoa.email }}</span>
    </div>
    <strong>{{ first_name }}</strong>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background: darkcyan;
}

.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}

.botao:hover {
  background: rgb(102, 147, 147);
}

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
</style>
