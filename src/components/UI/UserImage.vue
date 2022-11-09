<template>
  <div class="user__img">
    <img :src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: ["imgSrc"],
};
</script>

<style lang="scss" scoped>
.user__img {
  position: relative;
  height: 75px;
  width: 75px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #455a64;
  }
}
</style>
