<template>
  <div class="horizental-list multible-upload q-my-md">
    {{ image_uploader }}
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
    <div v-for="(img, i) in image_uploader" :key="i" class="my-card">
      <img :src="img" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      image_uploader: ref([
        // "test/Rectangle 4331.png",
        // "test/Rectangle 4332.png",
        // "test/Rectangle 4334.png",
        // "test/Rectangle 4335.png",
      ]),
      images_file: ref([]),
    };
  },
  methods: {
    uploadPostImages() {
      const input = this.$refs.multiImage;
      input.click();
    },
    uploadStoryChanged() {
      // handel image before upload
      // const allwoedType = [
      //   "image/jpeg",
      //   "image/png",
      //   "image/svg+xml",
      //   "image/webp",
      // ];
      const file = event.target.files;
      const fileleanth = file.length;
      for (var i = 0; i < fileleanth; i++) {
        var imgData = new FileReader();
        imgData.readAsDataURL(file[i]);
        imgData.onload = (e) => {
          //     // for review
          this.image_uploader.push(e.target.result);
          this.images_file.push(file[i]);
        };
      }

      // const file = event.target.files[0];
      // if (allwoedType.indexOf(file.type) !== -1) {
      //   var imgData = new FileReader();
      //   imgData.readAsDataURL(file);
      //   imgData.onload = (e) => {
      //     // for review
      //     this.story_upload_src = e.target.result;
      //     // for uploading
      //     this.story_upload = file;
      //     // open dialog
      //     this.dialog_upload = true;
      //   };
      // } else {
      //   this.$q.notify({
      //     message:
      //       "Sorry! You can't upload image With " + file.type + " Extension",
      //     color: "red",
      //   });
      // }
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
}
</style>
