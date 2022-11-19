<template>
  <div dir="rtl" class="bg-transparent">
    <q-toolbar>
      <q-toolbar-title>
        <!-- ///////////////////////////////////////////////// -->
        <!-- btn have a title and emmit function if have title -->
        <!-- ///////////////////////////////////////////////// -->
        <q-btn
          v-if="title"
          class="text-500 text-body1 text-center disc-color"
          :label="title"
          @click="$emit('emitSkip')"
          flat
        />
        <!-- /////////////////////////////////////////////////////// -->
        <!-- btn have a icon have a function to forward page history -->
        <!-- /////////////////////////////////////////////////////// -->
        <q-btn
          v-else
          class="text-center"
          color="black"
          :icon="iconSrc"
          @click="$router.go(-1)"
          size="md"
          flat
        />
      </q-toolbar-title>
      <!-- </div> -->
    </q-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: false,
    },
    iconSrc: {
      type: String,
      required: false,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fixed-top-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
