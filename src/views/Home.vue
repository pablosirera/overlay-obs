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
  border: 5px solid rgb(67, 93, 76);
  border-radius: 5px;
  width: 450px;
  height: 350px;
}

.chat-title {
  width: 450px;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}
</style>
