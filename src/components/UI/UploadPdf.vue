<template>
  <div class="upload-image main-rounded q-ma-auto" dir="rtl">
    <!-- :class="src !== 'placeholder-pdf.png' ? 'full-width' : ''" -->
    <!-- :style="src !== 'placeholder-pdf.png' ? 'height' : ''" -->
    <input
      class="input-t"
      ref="input"
      @change="changeImag"
      type="file"
      accept="application/pdf,application"
    />

    <div
      @click="clickFileInput"
      class="img-container main-rounded bg-grey-4"
      style="height: 50px"
    >
      <!-- <q-icon class="img-action" name="img:icon/file-type-pdf2.png" /> -->
      <q-img
        v-if="src === 'icon/file-type-pdf2.png'"
        @click="clickFileInput"
        class="img"
        :src="src"
      />
      <div
        v-else
        class="full-height row justify-center text-center items-center"
      >
        <div class="col">{{ src }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgDesc: {
      type: String,
      default: "Don't forget to add pdf descrition",
    },
    showInfo: {
      type: Boolean,
      default: true,
    },
    deleteImage: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "ارفق الملف بصيغة pdf",
    },
    color: {
      type: String,
      default: "red",
    },
    icon: {
      type: String,
      default: "las la-question-circle",
    },
    imgSrc: {
      type: String,
      default: "icon/file-type-pdf2.png",
    },
    showCaption: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      src: "icon/file-type-pdf2.png",
      imageHint: "Set the file hover pdf. Only *.pdf files are accepted",
    };
  },
  watch: {
    imgSrc(val) {
      if (val) {
        this.src = this.imgSrc;
      } else {
        this.src = "icon/file-type-pdf2.png";
      }
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
          // this.src = e.target.result;
          this.src = file.name;
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
    clickFileInput() {
      const input = this.$refs.input;
      input.click();
    },
  },
};
</script>
<style lang="scss" scoped>
.upload-image {
  width: 100%;
  // height: max-content;
  position: relative;
  overflow: hidden;
  .input-t {
    position: absolute;
    transform: translateX(101%);
  }
  .img-container {
    position: relative;
    width: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    .img-action {
      position: absolute;
      left: 50%;
      top: 50%;

      z-index: 5000;
    }
    .img {
      cursor: pointer;
      // border-radius: 20px !important;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
    }
  }
}
</style>
