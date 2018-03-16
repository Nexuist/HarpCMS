<template>
	<div id="app">
		<Navbar />
		<div class="container-fluid">
			<div id="editor">
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
			<div id="preview">
				<Preview />
			</div>
		</div>
	</div>
</template>

<script>
import Split from "split.js";
import Navbar from "./components/Navbar.vue";
import Preview from "./components/Preview.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Preview
  },
  mounted: () => {
    Split(["#editor", "#preview"], {
      sizes: [50, 50],
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
$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome";
@import "~bootstrap/scss/bootstrap";

#preview {
  position: relative;
}

#editor {
  overflow-y: scroll;
  padding: 25px;
}

label {
  font-weight: bold;
}

.container-fluid {
  padding: 0;
  display: flex;
  height: calc(100vh - 40px);
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