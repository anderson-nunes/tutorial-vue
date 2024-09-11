<script setup lang="ts">
import { ref, watch } from "vue";
import User from "../components/User.vue";
import { useFetch } from "../composables/fetch";
import { useRoute } from "vue-router";
import { useCargos } from "../store/cargos";
import { useLogin } from "../store/login";

const store = useCargos();

const { adicionaCargo, buscaCores } = store;

const storeLogin = useLogin();

const { logarUsuario } = storeLogin;

const router = useRoute();

const id = router.params.id;

const {
  data: pessoa,
  carregando,
  error,
} = useFetch(`https://reqres.in/api/users/${id}`);

const cargoSelecionado = ref("");
const cargos = ["Gerência", "Supervisão", "Operacional"];

watch(cargoSelecionado, (novoCargo) => {
  const { id, first_name: nome } = pessoa.value;
  const funcionario = { id, nome, cargo: novoCargo };
  adicionaCargo(funcionario);
});
</script>

<template>
  <div>
    <h1>Funcionarios</h1>
    <div v-if="carregando">Carregando...</div>
    <User :pessoa="pessoa" v-else />
    <select v-model="cargoSelecionado">
      <option disabled value="">Selecionar o cargo</option>
      <option v-for="c in cargos" :value="c" :key="c">{{ c }}</option>
    </select>
    <div>
      <button @click="logarUsuario(pessoa.first_name)">Logar</button>
    </div>
    <div>
      <button @click="buscaCores()">Busca Cores</button>
    </div>
  </div>
</template>

<style scoped></style>
