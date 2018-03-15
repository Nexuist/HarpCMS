<template>
    <div class="container-fluid">
        <div class="flex">
            <div id="editor">
            </div>
            <div id="preview">
                <iframe src="http://uhsse.org" />
            </div>
        </div>
    </div>
</template>

<script>
import Split from "split.js";
import JSONEditor from "jsoneditor";

export default {
  data: () => {
    return {
    };
  },
  mounted: () => {
    this.editor = new JSONEditor(document.querySelector("#editor"), {});
    this.editor.set({
        memes: [
            1,2,3,4,5,"xd"
        ]
    })
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
@import "~jsoneditor/dist/jsoneditor.min.css";

.container-fluid {
  padding: 0;
}

.flex {
  display: flex;
  height: 100vh;
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