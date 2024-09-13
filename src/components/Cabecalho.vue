<script setup lang="ts">
import { useLogin } from "../store/login";
import { storeToRefs } from "pinia";

const storeLogin = useLogin();

const { usuarioLogado, logado } = storeToRefs(storeLogin);

const mensagem = "Aprendendo slot";

const mostrarNome = () => {
  alert("Aprendendo slot");
};
</script>
<template>
  <div>
    <h1 class="titulo" v-if="logado">Bem Vindo (a) {{ usuarioLogado }}</h1>

    <slot :mensagem="mensagem" :funcao="mostrarNome"></slot>
  </div>
</template>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
