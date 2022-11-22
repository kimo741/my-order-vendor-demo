<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
export default {
  data() {
    return {
      loadData: null,
      map: null,
      mapCenter: { lat: 0, lng: 0 },
    };
  },
  methods: {
    loader() {
      this.loadData = new Loader({
        apiKey: "AIzaSyA3LgJnLd4Jjtc8pIyI5JIZ_MW7AiYaG_Q",
        version: "weekly",
      });
    },
    //   initMap = () => {
    //     this.map = new google.maps.Map(document.getElementById("map"), {
    //       center: this.mapCenter,
    //       zoom: true,identity
    //       maxZoom: 20,
    //       minZoom: 3,
    //       streetViewControl: true,
    //       mapTypeControl: true,
    //       fullscreenControl: true,
    //       zoomControl: true,
    //     });
    // },
  },
  async mounted() {
    this.loader();
    this.loadData.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        maxZoom: 20,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        zoomControl: true,
        minZoom: 3,
      });
    });
  },
};
</script>
