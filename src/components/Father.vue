<script setup lang="ts">
import Child from "../components/Child.vue";
import { ref } from "vue";

const user = ref({ name: "Anderson" });
</script>

<template>
  Parent: {{ user.name }}
  <Child :user="user" />
</template>
