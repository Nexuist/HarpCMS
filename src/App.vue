<template>
  <div id="app">
    <Navbar />
    <div class="container-fluid">
      <div class="flex">
        <div id="editor">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <div id="preview">
          <iframe src="http://uhsse.org" />
        </div>
      </div>
    </div>
    <!-- <Footbar /> -->
  </div>
</template>

<script>
import Split from "split.js";
import Navbar from "./components/Navbar.vue";
import Footbar from "./components/Footbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footbar
  },
  mounted: () => {
    Split(["#editor", "#preview"], {
      sizes: [25, 75],
      elementStyle: function(dimension, size, gutterSize) {
        return {
          "flex-basis": "calc(" + size + "% - " + gutterSize + "px)"
        };
      },
      gutterStyle: function(dimension, gutterSize) {
        return {
          "flex-basis": gutterSize + "px"
        };
      }
    });
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

.container-fluid {
  padding: 0;
}

.flex {
  display: flex;
  height: 100vh;
}

#editor {
  padding: 25px;
  overflow-y: scroll;
}

iframe {
  border: 0;
  width: 100%;
  height: 100%;
}

.gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-vertical {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
}

.gutter.gutter-horizontal {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==");
}
</style>