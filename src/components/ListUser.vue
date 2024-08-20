<script setup lang="ts">
import { onMounted, ref } from "vue";

const users = ref([]);

const searchInformation = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  const data = json.data;
  return data;
};

onMounted(async () => {
  users.value = await searchInformation();
});

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

onMounted(() => {
  console.log(`The initial count is ${increment}`);
});

const items = ref([{ message: "Anderson" }, { message: "Everton" }]);
</script>

<template>
  <div class="container">
    <div v-for="user in users" :key="user.id">
      <p>{{ user.first_name }}</p>
      <img :src="user.avatar" alt="" />
    </div>
  </div>
  <div class="btn-container">
    <button class="btn" @click="increment">Increment</button>
    <span class="count">{{ count }}</span>
    <button class="btn" @click="decrement">Decrement</button>
  </div>
  <div>
    <li v-for="item in items" :key="item.id">
      {{ item.message }}
    </li>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

.btn {
  background: rgba(183, 152, 215, 0.425);
  padding: 10px;
  border: none;
  border-radius: 10px;
}

.count {
  padding: 20px;
  color: red;
}
</style>
