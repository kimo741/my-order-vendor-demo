<template>
  <div class="q-my-md" :dir="direction">
    <div class="text-right text-500 q-mx-sm">
      {{ label }}
    </div>
    <q-field
      @focus="$emit('emitToEdit')"
      filled
      dense
      rounded
      class="input"
      outlined
    >
      <template v-slot:control>
        <div
          class="text-right full-width no-outline"
          :style="direction === 'ltr' ? '  text-align: left;' : ''"
        >
          {{ placeholder }}
        </div>
      </template>

      <template v-slot:append>
        <q-icon :name="icon" />
      </template>
    </q-field>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    direction: {
      type: String,
      required: false,
      default: "rtl",
    },
  },
};
</script>

<style>
</style>
