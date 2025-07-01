<template>
  <div class="home">
    <Hello msg="致亲爱的陈女士" />
    <div class="content-area">
      <Describe v-if="activeTab === 0" />
      <Rethink v-else-if="activeTab === 1" />
      <Promise v-else />
    </div>
  </div>
  <div class="button-group">
    <button
      class="custom-btn"
      :class="{ active: activeTab === 0 }"
      @click="activeTab = 0"
    >
      事情描述
    </button>
    <button
      class="custom-btn"
      :class="{ active: activeTab === 1 }"
      @click="activeTab = 1"
    >
      我的反思
    </button>
    <button
      class="custom-btn"
      :class="{ active: activeTab === 2 }"
      @click="activeTab = 2"
    >
      承诺保证
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hello from "./Hello.vue";
import Describe from "./Describe.vue";
import Rethink from "./Rethink.vue";
import Promise from "./Promise.vue";
const activeTab = ref(1);

</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  min-height: 60vh;
}

.content-area {
  border: #29bc7a 1px solid;
  border-radius: 24px;
  /* min-height: 180px; */
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-group {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 24px;
  border-radius: 16px;
  z-index: 10;
  background: transparent;
}

.custom-btn {
  background: linear-gradient(90deg, #42b983 0%, #38a1db 100%);
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.15);
  transition: background 0.3s, transform 0.2s;
  outline: none;
}

.custom-btn.active,
.custom-btn:focus {
  background: linear-gradient(90deg, #38a1db 0%, #42b983 100%);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 16px rgba(66, 185, 131, 0.25);
}
</style>
