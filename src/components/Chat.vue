<template>
  <h3 class="chat-title">-- CHAT --</h3>
  <div class="chat-body"></div>
</template>

<script>
export default {
  name: 'Chat',
}
</script>

<style lang="scss" scoped>
.chat {
  &-title {
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &-body {
    background-color: var(--color-secondary);
    border-radius: 5px;
    height: 560px;
    width: 100%;
    opacity: 0.5;
  }
}
</style>
