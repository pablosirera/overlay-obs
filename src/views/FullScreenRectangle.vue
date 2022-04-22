<script>
import Cam from '@/components/Cam.vue'

export default {
  name: 'FullScreen',
  components: {
    Cam,
  },
}
</script>

<template>
  <div class="full-screen">
    <Cam class="full-screen-cam" type="rectangle" />
  </div>
</template>

<style lang="scss" scoped>
.full-screen {
  background-color: transparent;
  &-cam {
    width: 340px;
    height: 444px;
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
}
</style>
