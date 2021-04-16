<template>
  <div class="home">
    <section>
      <div class="cam-frame"></div>
      <Chat />
    </section>
    <section>
      <div class="twitch-info">
        <p>Último seguidor:</p>
      </div>
      <div class="screen-frame"></div>
    </section>
  </div>
</template>

<script>
import Chat from '@/components/Chat.vue'

export default {
  name: 'Home',
  components: {
    Chat,
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 610px 1fr;
  column-gap: 20px;
}
.cam-frame {
  border: 10px solid var(--color-secondary);
  border-radius: 5px;
  width: 100%;
  height: 360px;
  box-sizing: border-box;
}
.twitch-info {
  height: 100px;
}
.screen-frame {
  border: 5px solid var(--color-secondary);
  width: 100%;
  // TODO: should be 100%
  height: 89%;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
