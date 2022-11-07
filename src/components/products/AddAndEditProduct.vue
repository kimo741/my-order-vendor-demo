<template>
  <DynamicHeader :addIcon="false" :backIcon="true" :nofiBdge="false" />
  <q-page class="q-mx-sm" dir="rtl">
    <q-form class="q-mx-sm">
      <!-- ///////// -->
      <!-- meal name -->
      <!-- ///////// -->
      <q-label class="q-my-md text-weight-bold">اسم الوجبة</q-label>
      <div class="q-mb-md">
        <q-input dense rounded filled class="input" outlined v-model="text" />
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
          v-model="category"
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
          v-model="sub_category"
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
          v-model="text"
          dense
          rounded
          filled
          outlined
          placeholder="اضافة"
        >
          <template v-slot:prepend>
            <q-icon name="eva-square-outline" color="grey-5" />
            <q-p class="text-caption"> ر.س 20</q-p>
          </template>
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
          v-model="text"
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
        <q-file color="dark" filled v-model="model">
          <div class="row justify-center input-files items-center">
            <div class="text-body text-500 q-mx-md">Drag & Drop</div>
            <q-icon size="md" name="img:icon/downlod.png" />
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
          v-model="text"
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
          v-model="text"
          type="number"
        />
      </div>

      <!-- ///////////// -->
      <!-- discount code -->
      <!-- ///////////// -->
      <q-label class="q-mt-lg text-weight-bold"> كود الخصم</q-label>
      <div class="q-mb-md">
        <q-input class="input" outlined dense rounded filled v-model="text" />
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
            <q-input
              class="input"
              v-model="text"
              outlined
              dense
              rounded
              filled
              placeholder="اسبوع "
            >
              <template v-slot:prepend>
                <q-icon name="eva-chevron-down-outline" />
              </template>
            </q-input>
          </div>
        </div>
        <!-- /// -->
        <!-- fom -->
        <!-- /// -->
        <div class="col q-mx-md">
          <q-input v-model="date" class="input" dense filled type="date" />
        </div>
        <!-- // -->
        <!-- to -->
        <!-- // -->
        <div class="col">
          <q-input class="input" v-model="date" dense filled type="date" />
        </div>
      </div>

      <!-- /////////// -->
      <!-- button save -->
      <!-- /////////// -->
      <div class="col q-my-lg">
        <q-btn
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
      category: ref(null),
      sub_category: ref(null),
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    };
  },
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
