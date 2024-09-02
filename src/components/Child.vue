<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ user: { name: string } }>();
</script>

<template>Child: {{ props.user.name }}</template>
