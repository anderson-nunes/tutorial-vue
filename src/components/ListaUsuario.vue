<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const pessoas = ref([]);

const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  const data = json.data;
  return data;
};

onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});
</script>

<template>
  <div class="pessoas">
    <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
      <h3 style="color: blue" v-if="pessoa.first_name === 'George'">Gerente</h3>
      <h3 style="color: blue" v-else>Funcionario</h3>
      <img :src="pessoa.avatar" alt="perfil" />
      <strong>{{ nomeCompleto }}</strong>
      <span>{{ pessoa.email }}</span>
    </div>
  </div>
</template>
<style scoped>
.pessoas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  gap: 4rem;
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
