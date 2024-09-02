<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

const products = ref<Product | null>(null);

const buscaInformacoes = async () => {
  try {
    const req = await fetch(`https://fakestoreapi.com/products/1`);
    const data = await req.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar informações:", error);
    return {};
  }
};

onMounted(async () => {
  products.value = await buscaInformacoes();
  console.log("@DADOS=>>", products.value);
});
</script>

<template>
  <div v-if="products" class="card">
    <div class="card-image">
      <img :src="products.image" alt="Product Image" />
    </div>
    <div class="card-content">
      <h2>{{ products.title }}</h2>
      <p class="category">{{ products.category }}</p>
      <p class="description">{{ products.description }}</p>
      <p class="price">${{ products.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #f9f9f9;
}

.card-content {
  padding: 15px;
  text-align: center;
}

.card-content h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.card-content .category {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 10px;
}

.card-content .description {
  font-size: 0.95em;
  color: #555;
  margin-bottom: 15px;
}

.card-content .price {
  font-size: 1.2em;
  font-weight: bold;
  color: #27ae60;
}
</style>
