<script setup lang="ts">
import { ref, onMounted } from "vue";
import User from "@/components/User.vue";

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
    <User v-for="pessoa in pessoas" :key="pessoa.id" :pessoa="pessoa" />
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
