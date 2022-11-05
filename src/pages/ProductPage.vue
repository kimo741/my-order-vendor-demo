<template>
  <q-page class="q-mx-sm" dir="rtl">
    <!-- /////// -->
    <!-- headeer -->
    <!-- /////// -->
    <DynamicHeader :addIcon="true" title="المنتجات" />
    <!-- ////////// -->
    <!-- search Bar -->
    <!-- ////////// -->
    <MainSearchBar />
    <!-- ///////// -->
    <!-- offer bar -->
    <!-- ///////// -->
    <OffersBar />
    <FilterBar />
  </q-page>
</template>

<script>
import DynamicHeader from "src/components/UI/DynamicHeader.vue";
import MainSearchBar from "src/components/UI/search/mainSearchBar.vue";
import OffersBar from "src/components/products/OffersBar.vue";
import FilterBar from "src/components/products/FilterBar.vue";
export default {
  components: { DynamicHeader, MainSearchBar, OffersBar, FilterBar },
};
</script>

<style>
</style>

