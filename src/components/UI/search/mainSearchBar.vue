<template>
  <!-- ///////////////////// -->
  <!-- input for main search -->
  <!-- ///////////////////// -->
  <q-input
    dir="rtl"
    class="main-rounded q-mx-auto q-mt-lg"
    style="width: 100%"
    bottom-slots
    v-model="global_search"
    bg-color="white"
    dense
    rounded
    filled
    label="بحث"
    @focusin="focusInput"
    @keyup="$emit('passScarchVal', global_search)"
  >
    <!-- /////////// -->
    <!-- icon search -->
    <!-- /////////// -->
    <template v-slot:prepend>
      <q-avatar>
        <q-icon size="xs" name="img:icon/Search.png" />
      </q-avatar>
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      global_search: ref(""),
    };
  },
};
</script>

<style>
</style>
