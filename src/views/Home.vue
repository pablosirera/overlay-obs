<template>
  <div class="home">
    <section>
      <div class="cam-frame"></div>
      <Chat />
    </section>
    <section>
      <div class="twitch-info">
        <p>Último seguidor:</p>
        <p>Último suscriptor:</p>
        <div class="twitch-info-rrss">pablosirera.com</div>
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
  grid-template-columns: 580px 1fr;
  column-gap: 15px;
}
.cam-frame {
  border: 10px solid var(--color-secondary);
  border-radius: 5px;
  width: 100%;
  height: 360px;
  box-sizing: border-box;
  border-width: 6px;
  border-style: solid;
  border-image-source: linear-gradient(
    to left,
    var(--color-secondary),
    var(--color-yellow-brand)
  );
  border-image-slice: 1;
}
.twitch-info {
  height: 100px;
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }
}
.screen-frame {
  border: 8px solid var(--color-secondary);
  width: 100%;
  // TODO: should be 100%
  height: 90%;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
