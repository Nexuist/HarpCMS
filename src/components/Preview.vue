<template>
    <div style="height: 100%">
        <div v-if="loading" class="preview__backdrop">
            <i class="fa fa-5x fa-cog fa-spin" style="color: white; z-index: 4"></i>
        </div>
        <iframe ref="preview" class="preview__iframe" :src="previewURL" />
    </div>
</template>

<script>
import EventBus from "../scripts/EventBus.js";

export default {
  created: function() {
    EventBus.$on("startCompiling", () => this.loading = true);
    EventBus.$on("stopCompiling", () => {
      this.loading = false;
      this.reloadPreview();
    }); 
  },
  data: () => {
    return {
      previewURL: "http://localhost:8081",
      loading: false
    };
  },
  methods: {
    reloadPreview() {
      this.$refs.preview.src = this.previewURL;
    }
  }
};
</script>

<style>
.preview__iframe {
  border: 0;
  width: 100%;
  height: 100%;
}

.preview__backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
