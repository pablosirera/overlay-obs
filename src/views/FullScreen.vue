<template>
  <div class="full-screen">
    <Cam class="full-screen-cam" />
  </div>
</template>

<script>
import Cam from '@/components/Cam.vue'

export default {
  name: 'FullScreen',
  components: {
    Cam,
  },
}
</script>

<style lang="scss" scoped>
.full-screen {
  background-color: transparent;
  &-cam {
    width: 489px;
    height: 344px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
