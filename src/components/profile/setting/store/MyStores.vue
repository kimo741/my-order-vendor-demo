<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader title="تفاصيل المطعم" :addIcon="true" :notifyIcon="true" />
    <q-form @submit.prevent="saveProduct" class="q-my-lg">
      <div class="q-mb-md">
        <div class="q-my-xs text-500">اسم المطعم</div>
        <q-input
          placeholder="اسم المطعم"
          dense
          rounded
          filled
          class="input"
          outlined
        />
      </div>
      <div class="q-mb-md">
        <div class="q-my-xs text-500">مسئول الفرع</div>
        <q-select
          filled
          v-model="model"
          use-input
          input-debounce="0"
          label="Simple filter"
          :options="options"
          @filter="filterFn"
          style="width: 250px"
          behavior="menu"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="q-mb-md">
        <div class="q-my-xs text-500">الفرع</div>
        <q-select
          class="input"
          v-model="product_form"
          outlined
          dense
          rounded
          :options="list_item"
          filled
          placeholder="اسبوع "
        >
        </q-select>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import { ref } from "vue";
export default {
  components: { DynamicHeader },
  setup() {
    return {
      model: ref(null),
      stringOptions: ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]),
      store_data: ref({
        store_name: "",
        brach_menager: "",
      }),
      list_item: [
        {
          label: "اسبوعان",
          code: "2w",
        },
        {
          label: "شهر",
          code: "1m",
        },
        {
          label: "3 شهور",
          code: "3m",
        },
        {
          label: "6 شهور",
          code: "6m",
        },
      ],
    };
  },
  methods: {
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = stringOptions;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        options.value = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
};
</script>

<style>
</style>
