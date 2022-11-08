<template>
  <q-card class="main-rounded q-pa-md" dir="rtl">
    <q-card-section>
      <div class="text-hint text-body">هل نت متأكد تريد حزف هذا المنتج ؟</div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        @click="$emit('confirmDelete')"
        size="sm"
        class=""
        color="primary"
        label="نعم"
      ></q-btn>
      <q-btn
        @click="$emit('canselDelete')"
        size="sm"
        class="q-mx-md"
        outline
        color="primary"
        label="لا"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {};
</script>

<style>
</style>
