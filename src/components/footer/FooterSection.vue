<template>
  <transition-group name="fade">
    <div class="footer-section full-width row justify-between">
      <q-list class="col-5 row">
        <q-item
          to="/profile"
          :class="
            /profile/.test(this.$route.path) ? 'footer-section__active' : ''
          "
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              /profile/.test(this.$route.path)
                ? 'img:icon/person-footer-active.png'
                : 'img:icon/person-footer.png'
            "
          />
          <div
            v-if="/profile/.test(this.$route.path)"
            class="text-center text-links"
          >
            ملفي
          </div>
        </q-item>

        <q-item
          to="/products"
          :class="
            /products/.test(this.$route.path) ? 'footer-section__active' : ''
          "
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              /products/.test(this.$route.path)
                ? 'img:icon/product-active.png'
                : 'img:icon/product.png'
            "
          />

          <div
            v-if="/products/.test(this.$route.path)"
            class="text-center text-links"
          >
            المنتجات
          </div>
        </q-item>
      </q-list>
      <q-list class="col-5 row">
        <q-item
          :class="
            /order/.test(this.$route.path) ? 'footer-section__active' : ''
          "
          to="/order"
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              /order/.test(this.$route.path)
                ? 'img:icon/orders-active.png'
                : 'img:icon/orders.png'
            "
          />
          <div
            v-if="/order/.test(this.$route.path)"
            class="text-center text-links"
          >
            الطلبات
          </div>
        </q-item>

        <q-item
          :class="this.$route.path == '/' ? 'footer-section__active' : ''"
          to="/"
          class="col text-grey text-primary column"
        >
          <q-icon
            class="q-mx-auto"
            size="sm"
            :name="
              this.$route.path == '/'
                ? 'img:icon/Home-active.png'
                : 'img:icon/Home.png'
            "
          />
          <!-- v-if="this.$route.path.test == '/dashboard'" -->
          <div v-if="this.$route.path == '/'" class="text-center text-links">
            الرئيسة
          </div></q-item
        >
      </q-list>
    </div>
    <q-btn
      @click="$emit('createPost')"
      round
      size="lg"
      color="primary"
      icon="eva-plus"
      class="add-button"
      :class="hideButt ? 'hide-button' : ''"
    />
    <!-- <div class="text-dark">{{ hideButt }}</div> -->
  </transition-group>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    hideButt: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      active_footer: ref(""),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-section {
  &__active {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 80%;
      height: 2px;
      background-color: $primary;
      transform: translateX(-50%);
    }
  }
}
.add-button {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
.text-links {
  font-size: 10px;
  color: $primary;
}
.hide-button {
  bottom: 0;
  top: 50%;
}
</style>
