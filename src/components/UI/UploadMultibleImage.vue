<template>
  <div class="horizental-list multible-upload q-my-md">
    <div @click="uploadPostImages" class="my-card multible-upload__uploader">
      <input
        style="display: none"
        class="input"
        ref="multiImage"
        multiple
        @change="uploadStoryChanged"
        type="file"
      />
      <img class="" src="img/placeholder.png" />
    </div>
    <div
      v-show="image_uploader.length"
      v-for="(img, i) in image_uploader"
      :key="i"
      class="my-card"
    >
      <img :src="img" />
    </div>
    <div v-show="!image_uploader.length" class="my-card text-hint text-body1">
      <div class="q-ma-auto text-center multible-upload__no-photo">
        لا يوجد صور
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      image_uploader: ref([]),
      images_file: ref([]),
    };
  },
  methods: {
    uploadPostImages() {
      const input = this.$refs.multiImage;
      input.click();
    },
    uploadStoryChanged() {
      this.image_uploader = [];
      this.images_file = [];

      // handel image before upload
      // accepted extentions for image
      const allwoedType = ["image/jpeg", "image/png", "image/webp"];
      const file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        if (allwoedType.indexOf(file[i].type) !== -1) {
          const imgData = new FileReader();
          imgData.readAsDataURL(file[i]);
          imgData.onload = (e) => {
            this.image_uploader.push(e.target.result);
          };
          this.images_file = file;
        } else {
          this.$q.notify({
            message:
              "Sorry! You can't upload image With " +
              file[i].type +
              " Extension",
            color: "red",
          });
        }
      }
      this.$emit("passImagesFile", this.images_file);
    },
  },
};
</script>

<style lang="scss" scoped>
.multible-upload {
  .my-card {
    position: relative;
    flex: 0 0 130px;
    height: 130px;
    border-radius: 15px;
    padding: 0;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &__uploader {
    border: 1px solid #ccc;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
    }
    &:active {
      background-color: rgba(204, 204, 204, 0.24);
    }
  }
  &__no-photo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
