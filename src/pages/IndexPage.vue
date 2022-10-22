<template>
  <q-page class="">
    <DynamicHeader />
    <q-input
      class="main-rounded q-mx-auto q-mt-lg"
      style="width: 90%"
      flat
      bottom-slots
      v-model="global_search"
      bg-color="grey-4"
      dense
      rounded
      filled
      label="بحث"
      @focusin="focusInput"
    >
      <!-- @focusout="outOfFocus" -->
      <!-- /////////// -->
      <!-- icon search -->
      <!-- /////////// -->
      <template v-slot:prepend>
        <q-avatar>
          <q-icon size="xs" name="img:icon/Search.png" />
        </q-avatar>
      </template>
    </q-input>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import DynamicHeader from "src/components/UI/DynamicHeader.vue";

export default defineComponent({
  name: "IndexPage",
  components: { DynamicHeader },
});
</script>
