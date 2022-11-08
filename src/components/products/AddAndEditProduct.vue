<template>
  <q-page class="q-mx-sm" dir="rtl">
    <DynamicHeader
      :addIcon="false"
      :backIcon="true"
      :notifyIcon="false"
      :title="editData === null ? 'اضافة منتج' : 'تعديل'"
    />
    <q-form @submit.prevent="saveProduct" class="q-ma-sm">
      <div v-if="editData !== null" class="row">
        <q-radio
          class="col"
          v-model="product_form.status"
          :val="true"
          label="متوفر"
        />
        <q-radio
          class="col"
          v-model="product_form.status"
          :val="false"
          label="غير متوفر"
        />
      </div>
      <!-- ///////// -->
      <!-- meal name -->
      <!-- ///////// -->
      <q-label class="q-my-md text-weight-bold">اسم الوجبة</q-label>
      <div class="q-mb-md">
        <q-input
          dense
          rounded
          filled
          class="input"
          outlined
          v-model="product_form.name"
        />
      </div>

      <!-- ///////////// -->
      <!-- meal category -->
      <!-- ///////////// -->
      <q-label class="text-weight-bold"> الفئة</q-label>
      <div class="q-mb-md">
        <q-select
          dir="ltr"
          class="input"
          :options="options"
          dense
          rounded
          filled
          v-model="product_form.category"
          outlined
          placeholder="مطعم"
        />
      </div>
      <!-- //////////////// -->
      <!-- meal subcategory -->
      <!-- //////////////// -->
      <q-label class="text-weight-bold"> الفئة الفرعية</q-label>
      <div class="q-mb-md">
        <q-select
          :options="options"
          dir="rtl"
          class="input"
          v-model="product_form.sup_categoty"
          dense
          rounded
          filled
          outlined
          placeholder="مطعم"
        />
      </div>

      <!-- ////////////// -->
      <!-- meal additions -->
      <!-- ////////////// -->
      <q-label class="text-weight-bold"> اضافات</q-label>
      <div dir="ltr" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          type="textarea"
          v-model="product_form.additions"
          dense
          rounded
          filled
          outlined
          placeholder="اضافة"
        >
          <!-- <template v-slot:prepend>
            <q-icon name="eva-square-outline" color="grey-5" />
            <q-p class="text-caption"> ر.س 20</q-p>
          </template> -->
        </q-input>
      </div>

      <!-- //////////////// -->
      <!-- meal description -->
      <!-- //////////////// -->
      <q-label class="text-weight-bold"> الوصف</q-label>
      <div dir="rtl" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          type="textarea"
          v-model="product_form.disc"
          outlined
          dense
          rounded
          filled
          placeholder="وصف الاضافة"
        >
        </q-input>
      </div>

      <!-- ////////// -->
      <!-- meal image -->
      <!-- ////////// -->
      <q-label class="text-weight-bold"> صورة الوجبة</q-label>
      <div dir="rtl" class="q-mb-md">
        <q-file
          color="dark"
          filled
          multiple
          @change="changeImag"
          v-model="product_form.img"
        >
          <div
            v-if="!product_form.img || !product_form.img === ''"
            class="row justify-center input-files items-center"
          >
            <div class="text-body text-500 q-mx-md">Drag & Drop</div>
            <q-icon
              v-if="!product_form.img || !product_form.img === ''"
              size="md"
              name="img:icon/downlod.png"
            />
            <div v-else>{{ product_form.img }}</div>
          </div>
        </q-file>
      </div>

      <!-- ////////// -->
      <!-- meal price -->
      <!-- ////////// -->
      <div class="row">
        <div class="col text-weight-bold">السعر الاساسي</div>
        <div class="col q-mr-lg text-weight-bold">الخصم</div>
      </div>
      <div class="row q-mb-md justify-between" dir="ltr">
        <!-- ////////// -->
        <!-- real price -->
        <!-- ////////// -->
        <q-input
          class="input text-right"
          style="width: 45%"
          v-model="product_form.price"
          outlined
          dense
          rounded
          filled
          type="number"
        />
        <!-- //////////////// -->
        <!-- price after sale -->
        <!-- //////////////// -->

        <q-input
          class="input"
          style="width: 45%"
          outlined
          dense
          rounded
          filled
          v-model="product_form.price_sale"
          type="number"
        />
      </div>

      <!-- ///////////// -->
      <!-- discount code -->
      <!-- ///////////// -->
      <q-label class="q-mt-lg text-weight-bold"> كود الخصم</q-label>
      <div class="q-mb-md">
        <q-input
          class="input"
          outlined
          dense
          rounded
          filled
          v-model="product_form.sale_code"
        />
      </div>
      <!-- ///////////// -->
      <!-- slale timeout -->
      <!-- ///////////// -->
      <div class="row">
        <div class="col text-weight-bold">مدة الخصم</div>
        <div class="col q-mr-lg text-weight-bold">من</div>
        <div class="col q-mr-lg text-weight-bold">الى</div>
      </div>
      <div class="row text-right justify-between" dir="rtl">
        <div class="col text-right" dir="rtl">
          <div dir="ltr">
            <q-select
              class="input"
              v-model="product_form.sale_timeout"
              outlined
              dense
              rounded
              :options="list_item"
              filled
              placeholder="اسبوع "
            >
            </q-select>
          </div>
        </div>
        <!-- /// -->
        <!-- fom -->
        <!-- /// -->
        <div class="col q-mx-md">
          <q-input
            v-model="product_form.sale_from"
            class="input"
            dense
            filled
            type="date"
          />
        </div>
        <!-- // -->
        <!-- to -->
        <!-- // -->
        <div class="col">
          <q-input
            class="input"
            v-model="product_form.sale_to"
            dense
            filled
            type="date"
          />
        </div>
      </div>

      <!-- /////////// -->
      <!-- button save -->
      <!-- /////////// -->
      <div class="col q-my-lg">
        <q-btn
          type="s"
          class="btn-style text-weight-bold main-rounded"
          style="width: 100%; height: 48px"
          color="primary"
          label="حفظ"
        />
      </div>
    </q-form>
  </q-page>
</template>


<script>
import DynamicHeader from "../UI/DynamicHeader.vue";
import { ref } from "vue";
export default {
  components: { DynamicHeader },
  setup() {
    return {
      product_form: ref({
        name: "",
        disc: "",
        category: "",
        sup_categoty: "",
        additions: "",
        price: "",
        price_sale: "",
        status: true,
        img: "",
        sale_code: "",
        sale_timeout: {
          label: "اسبوعان",
          code: "2w",
        },
        sale_from: "",
        sale_to: "",
      }),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
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
  computed: {
    editData: {
      get() {
        return this.$store.getters["Product/edit_data"];
      },
      set(val) {
        this.$store.commit("Product/EDIT_PRODUCT", val);
      },
    },
  },
  methods: {
    changeImag(event) {
      const allwoedType = ["application/pdf", " application/vnd.ms-excel"];
      const file = event.target.files[0];
      if (allwoedType.indexOf(file.type) !== -1) {
        var imgData = new FileReader();
        imgData.readAsDataURL(file);
        imgData.onload = (e) => {
          this.src = e.target.result;
          this.$emit("uploadFile", file);
        };
      } else {
        this.$q.notify({
          message: `لا يمكن تحميل ملف بصيغة  ${file.type}  `,
          color: "red",
          icon: "error",
        });
      }
    },
    handelEditData() {
      if (this.editData !== null) {
        this.product_form = Object.assign({}, this.editData);
      }
    },
    saveProduct() {
      // if (this.editData != null) {
      //   return (this.product_form = this.editData);
      // }
    },
  },
  mounted() {
    this.handelEditData();
    console.log(this.editData);
  },
  // unmounted() {
  //   this.$store.commit("Product/EDIT_PRODUCT", null);
  // },
};
</script>

<style lang="scss" scoped>
.input-files {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
