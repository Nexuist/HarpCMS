<template>
  <div class="centered" v-if="err == null">
    <i class="fa fa-5x fa-cog fa-spin"></i>
  </div>
  <div class="centered" v-else-if="err != false">
    <p v-html="err"></p>
  </div>
  <form v-else>
    <slot :rootJSON="rootJSON"></slot>
  </form>
</template>

<script>
import EventBus from "../scripts/EventBus.js";

export default {
  props: ["page"],
  created: function() {
    //TODO: move this to /api/locals
    fetch(`http://localhost:8080/api/locals/${this.page}`)
      .then(res => res.json())
      .then(json => {
        this.rootJSON = json;
        this.err = false;
      })
      .catch(err => {
        this.err = err.message;
      });
    EventBus.$on("saveAndPreview", () => {
      alert("memes");
    })
  },
  data: () => {
    return {
      err: null,
      rootJSON: null
    };
  }
};
</script>

<style>
.centered {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>