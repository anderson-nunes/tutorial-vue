<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useDevicesList, useUserMedia } from "@vueuse/core";
import { watchEffect } from "vue";

// Lista de dispositivos (câmeras e microfones)
const { videoInputs: cameras, audioInputs: microphones } = useDevicesList({
  requestPermissions: true,
});

// Computed para selecionar a câmera e o microfone atuais
const currentCamera = computed(() => cameras.value[0]?.deviceId);
const currentMicrophone = computed(() => microphones.value[0]?.deviceId);

// Stream de mídia (vídeo e áudio)
const { stream, start, stop } = useUserMedia({
  constraints: {
    video: { deviceId: currentCamera },
    audio: { deviceId: currentMicrophone },
  },
});

// Função para iniciar a câmera
const startCamera = () => {
  start(); // Inicia o uso da câmera
};

const stopCamera = () => {
  stop();
};

// Referência ao elemento de vídeo
const videoElement = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  // Garante que o vídeo comece após a montagem do componente
  watchEffect(() => {
    if (videoElement.value && stream.value) {
      videoElement.value.srcObject = stream.value;
    }
  });
});
</script>

<template>
  <div>
    <button @click="startCamera">Start</button>
    <button @click="stopCamera">Stop</button>
    <video ref="videoElement" autoplay muted></video>
  </div>
</template>

<style scoped>
video {
  width: 100%;
  height: auto;
}
</style>
