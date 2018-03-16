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
    let api = `http://localhost:8080/api`;
    //TODO: move this to /api/locals
    fetch(`${api}/locals/${this.page}`)
      .then(res => res.json())
      .then(json => {
        this.rootJSON = json;
        this.err = false;
      })
      .catch(err => {
        this.err = err.message;
      });
    EventBus.$on("startCompiling", () => {
      fetch(`${api}/locals/${this.page}`, {
        body: JSON.stringify(this.rootJSON),
        method: "POST",
        headers: {
        'content-type': 'application/json'
      },
      }).then(res => {
        return fetch(`${api}/compile`);
      })
      .then(res => {
        EventBus.$emit("stopCompiling");
      })
      .catch(err => {
        alert(`Couldn't save data: ${err}`);
        EventBus.$emit("stopCompiling");
      });
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