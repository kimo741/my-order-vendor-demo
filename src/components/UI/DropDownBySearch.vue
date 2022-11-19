<template>
  <div class="q-ma-sm">
    <q-select
      class="text-color deopdown-seach"
      autocomplete
      :filled="filled"
      v-model="model"
      use-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      :style="`width:${width};`"
      behavior="dialog"
      :label="label"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
    },
    stringOptions: {
      type: Array,
      require: true,
    },
    width: {
      type: String,
      require: false,
      default: "130px",
    },
    filled: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  data() {
    return {
      model: null,
      options: this.stringOptions,
    };
  },
  watch: {
    model(val, newVal) {
      if ((val == null || val == "", val == newVal)) {
        return;
      } else {
        this.$emit("emitSellected", val);
      }
    },
  },
  methods: {
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = this.stringOptions;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.stringOptions.filter(
          (v) => v?.value?.toLowerCase().indexOf(needle) > -1
          //
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.deopdown-seach {
  height: 50px !important;
}
</style>
