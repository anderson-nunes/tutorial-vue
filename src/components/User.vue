<script setup lang="ts">
interface Pessoa {
  avatar: string;
  first_name: string;
  last_name: string;
}

defineProps<{
  pessoa: Pessoa;
}>();
</script>
<template>
  <div class="perfil">
    <img :src="pessoa.avatar" alt="perfil" />
    <strong>{{ pessoa.first_name }}</strong>
    <span>{{ pessoa.last_name }}</span>
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
</style>
