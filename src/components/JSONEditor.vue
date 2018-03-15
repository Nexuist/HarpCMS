<template>
    <div ref="editor"></div>
</template>

<script>
import JSONEditor from "jsoneditor";

export default {
    props: ["json"],
    mounted: function() {
       this.editor = new JSONEditor(this.$refs.editor, {});
       this.editor.set(this.json);
    }
}
</script>

<style lang="scss">
@import "~jsoneditor/dist/jsoneditor.min.css";
</style>