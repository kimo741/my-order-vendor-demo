<template>
  <q-page class="q-mx-sm" dir="rtl">
    <q-form class="q-mx-sm">
      <!-- //////// -->
      <!-- meal name -->
      <q-label class="q-my-md text-weight-bold">اسم الوجبة</q-label>
      <div class="q-mb-md">
        <q-input class="input" outlined v-model="text" />
      </div>

      <!-- //////// -->
      <!-- meal category -->

      <q-label class="text-weight-bold"> الفئة</q-label>
      <div dir="ltr" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          v-model="text"
          outlined
          placeholder="مطعم"
        >
          <template v-slot:prepend>
            <q-icon name="eva-chevron-down-outline" />
          </template>
        </q-input>
      </div>

      <!-- //////// -->
      <!-- meal subcategory -->

      <q-label class="text-weight-bold"> الفئة الفرعية</q-label>
      <div dir="ltr" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          v-model="text"
          outlined
          placeholder="مطعم"
        >
          <template v-slot:prepend>
            <q-icon name="eva-chevron-down-outline" />
          </template>
        </q-input>
      </div>

      <!-- //////// -->
      <!-- meal additions -->
      <q-label class="text-weight-bold"> اضافات</q-label>
      <div dir="ltr" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          type="textarea"
          v-model="text"
          outlined
          placeholder="اضافة"
        >
          <template v-slot:prepend>
            <q-icon name="eva-square-outline" color="grey-5" />
            <q-p class="text-caption"> ر.س 20</q-p>
          </template>
        </q-input>
      </div>

      <!-- //////// -->
      <!-- meal description -->
      <q-label class="text-weight-bold"> الوصف</q-label>
      <div dir="rtl" class="q-mb-md">
        <q-input
          dir="rtl"
          class="input"
          type="textarea"
          v-model="text"
          outlined
          placeholder="وصف الاضافة"
        >
        </q-input>
      </div>

      <!-- //////// -->
      <!-- meal image -->
      <q-label class="text-weight-bold"> صورة الوجبة</q-label>
      <div dir="rtl" class="q-mb-md">
        <q-input type="file" class="input" outlined>
          <div class="col-6 q-mt-md">
            <p class="q-ml-md text-grey-9">Drag & Drop</p>
          </div>
          <div class="col-6 text-right q-mt-sm">
            <img src="icon/downlod.png" />
          </div>
        </q-input>
      </div>

      <!-- //////// -->
      <!-- meal price -->
      <div class="row">
        <div class="col text-weight-bold">السعر الاساسي</div>
        <div class="col q-mr-lg text-weight-bold">الخصم</div>
      </div>
      <div class="row q-mb-md" dir="ltr">
        <div class="col text-right">
          <q-input
            class="input"
            style="width: 95%"
            v-model="text"
            outlined
            type="number"
          />
        </div>
        <div class="col">
          <q-input
            class="input t"
            style="width: 99%"
            outlined
            v-model="text"
            type="number"
          />
        </div>
      </div>

      <!-- //////// -->
      <!-- meal discount -->
      <q-label class="q-mt-lg text-weight-bold"> كود الخصم</q-label>
      <div class="q-mb-md">
        <q-input class="input" outlined v-model="text" />
      </div>

      <div class="row">
        <div class="col text-weight-bold">مدة الخصم</div>
        <div class="col q-mr-lg text-weight-bold">من</div>
        <div class="col q-mr-lg text-weight-bold">الى</div>
      </div>
      <div class="row text-right" dir="rtl">
        <div class="col text-right" dir="rtl">
          <div dir="ltr">
            <q-input
              class="input"
              style="width: 99%"
              v-model="text"
              outlined
              placeholder="اسبوع "
            >
              <template v-slot:prepend>
                <q-icon name="eva-chevron-down-outline" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="col">
          <q-input
            v-model="date"
            class="input q-mx-sm"
            style="width: 95%"
            filled
            type="date"
          />
        </div>
        <div class="col">
          <q-input
            class="input q-mx-sm"
            style="width: 95%"
            v-model="date"
            filled
            type="date"
          />
        </div>
      </div>

      <!-- //////// -->
      <!-- button save -->
      <div class="col q-my-lg">
        <q-btn
          class="btn-style text-weight-bold"
          style="width: 100%; height: 48px"
          color="primary"
          label="حفظ"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>
