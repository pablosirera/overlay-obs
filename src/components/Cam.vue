<template>
  <div class="cam-frame"></div>
</template>

<script>
export default {
  name: 'Cam',
}
</script>

<style lang="scss" scoped>
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
</style>
