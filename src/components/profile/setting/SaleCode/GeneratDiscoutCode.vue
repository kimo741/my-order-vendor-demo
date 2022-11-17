<template>
  <q-page dir="rtl" class="q-mx-sm">
    <DynamicHeader title="الأكواد" :backIcon="true" />
    <!-- ///////////// -->
    <!-- generat code  -->
    <!-- ///////////// -->
    <q-form @submit.prevent="createGeneratCode">
      <div class="bg-white main-rounded q-my-lg q-pa-md">
        <div class="text-500 text-body2 q-px-lg q-my-sm">كود الخصم</div>
        <div class="row main-rounded q-mx-md generat">
          <div
            class="col-8 bg-grey-3 text-dark q-pa-sm text-right"
            style="border-radius: 0 8px 8px 0"
          >
            {{ discount_data.code }}
          </div>
          <q-btn
            class="col-4 bg-primary text-sm text-white text-center q-pa-sm"
            label="توليد كود الخصم"
            style="border-radius: 8px 0 0 8px"
            @click="makeCode"
          />
        </div>
      </div>
      <!-- ////////////////// -->
      <!-- discount Time out  -->
      <!-- ////////////////// -->
      <div class="row text-right justify-between" dir="rtl">
        <div class="col text-right" dir="rtl">
          <div dir="ltr">
            <div class="col text-500">مدة الخصم</div>

            <q-select
              outlined
              dense
              rounded
              :options="list_item"
              v-model="discount_data.timeout"
              filled
              placeholder="اسبوع "
              required
            >
            </q-select>
          </div>
        </div>
        <!-- /// -->
        <!-- fom -->
        <!-- /// -->
        <div class="col q-mx-md">
          <div class="col q-mr-sm text-500">من</div>

          <q-input
            v-model="discount_data.from"
            rounded
            dense
            filled
            type="date"
            required
          />
        </div>
        <!-- // -->
        <!-- to -->
        <!-- // -->
        <div class="col">
          <div class="col q-mr-sm text-500">الى</div>

          <q-input
            v-model="discount_data.to"
            rounded
            dense
            filled
            type="date"
            required
          />
        </div>
      </div>
      <div class="q-my-lg">
        <div class="text-body2 text-500 q-my-md">نوع الخصم</div>
        <div class="flex items-end">
          <q-radio
            size="xs"
            v-model="discount_data.type"
            val="s"
            label="منتج واحد"
          />
          <q-radio
            size="xs"
            class="q-mx-xs"
            v-model="discount_data.type"
            val="m"
            label="اكثر من منتج"
          />
          <q-radio
            size="xs"
            v-model="discount_data.type"
            val="g"
            label="جميع المنتجات"
          />
        </div>
      </div>
      <div class="row justify-between">
        <div class="col-3">
          <div class="q-my-sm text-500">نسبة الخصم</div>
          <q-input
            class="main-rounded"
            v-model="discount_data.from"
            rounded
            filled
            type="number"
            dense
            required
          >
            <template v-slot:append>
              <div>%</div>
            </template>
          </q-input>
        </div>
        <div v-if="discount_data.type !== 'g'" class="col-8">
          <div class="q-my-sm text-500">المنتجات</div>
          <q-select
            v-if="discount_data.type !== 'm'"
            outlined
            dense
            rounded
            :options="list_item"
            v-model="discount_data.products"
            filled
            :multiple="discount_data.type === 'm'"
            placeholder="اسبوع "
            required
          />
          <q-select
            v-if="discount_data.type !== 's'"
            outlined
            dense
            rounded
            :options="list_item"
            v-model="discount_data.products[0]"
            filled
            :multiple="discount_data.type === 'm'"
            placeholder="اسبوع "
            required
          />
        </div>
      </div>
      <div class="q-my-sm text-500">وصف</div>
      <q-input
        v-model="discount_data.disc"
        rounded
        dense
        filled
        required
        hint="يمكنك تركه فارغ"
      />
      <div class="row justify-center q-my-xl">
        <q-btn
          class="main-rounded q-py-sm shadow-0"
          label="انشاء"
          color="primary"
          style="width: 90%"
          type="submit"
        />
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
      discount_data: ref({
        code: "",
        timeout: "اسبوع",
        from: "",
        to: "",
        percentage: "",
        type: "s",
        products: [],
        disc: "",
      }),
      list_item: ref([
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
      ]),
      CodeIsCreated: false,
    };
  },
  methods: {
    createGeneratCode() {},
    makeCode() {
      this.CodeIsCreated = true;
      // get code from server
    },
  },
};
</script>

<style>
</style>
