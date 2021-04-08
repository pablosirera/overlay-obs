<template>
  <div class="home">
    <div class="cam-frame"></div>
    <h3 class="chat-title">-- CHAT --</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.cam-frame {
  border: 5px solid var(--color-secondary);
  border-radius: 5px;
  width: 610px;
  height: 360px;
}

.chat-title {
  width: 610px;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}
</style>
