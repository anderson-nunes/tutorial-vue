<script setup lang="ts">
import { ref } from "vue";
import EmitsPai from "../components/EmitsPai.vue";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
import { UseFullscreen } from "@vueuse/components";

const user = ref({
  name: "Anderson",
  city: "Canoas",
  age: 37,
  job: "Desenvolvedor",
});

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});

const toggleDark = useToggle(isDark);

const { toggle } = useFullscreen();

const updatingJob = (newJob: string) => {
  user.value.job = newJob;
  console.log("Profissão atualizado para: ", newJob);
};

const updateLastName = (lastName: string) => {
  user.value.name = lastName;
  console.log("Atualizando o meu nome para: ", lastName);
};

const updateUser = (dados: { city: string; age: number }) => {
  user.value.city = dados.city;
  user.value.age = dados.age;
  console.log("Usuário atualizado:", user.value);
};

const removeUser = (name: string) => {
  if (user.value.name === name) {
    user.value = null;
    console.log(`Usuário ${name} removido.`);
  }
};
</script>

<template>
  <UseFullscreen v-slot="{ toggle }">
    <div>
      {{ isDark }}
      <button @click="toggleDark()">Muda tema</button>
      <button @click="toggle()">Full Screen</button>
    </div>
  </UseFullscreen>
  <div>
    <EmitsPai
      :user="user"
      @updateJob="updatingJob"
      @updateLastName="updateLastName"
      @updateUser="updateUser"
      @removingUser="removeUser"
    />
  </div>
</template>
