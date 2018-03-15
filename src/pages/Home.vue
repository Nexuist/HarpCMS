<template>
  <JSONForm>
    <JSONString name="name" path="['name']"></JSONString>
    <JSONString name="Phone Number" path="['phoneNumber']"></JSONString>
    <JSONRepeat name="Qualities" :path="['qualities']">
      <template scope="parent">
        <JSONString name="Name" :path="`['qualities'][${parent.index}]['name']`"></JSONString>
        <JSONString name="Description" :path="`['qualities'][${parent.index}]['description']`" big="true"></JSONString>
        <JSONColor name="Background Color" :path="`['qualities'][${parent.index}]['backgroundColor']`"></JSONColor>
        <JSONString name="Glyph" :path="`['qualities'][${parent.index}]['glyph']`" help="Click <a onclick = 'openGlyphPage()'>here</a> to view more glyphs (icons)."></JSONString>
      </template>
    </JSONRepeat>
  </JSONForm>
</template>

<script>
import JSONEditor from "../components/JSONEditor.vue";
import JSONForm from "../components/JSONForm.vue";
import JSONString from "../components/JSONString.vue";
import JSONRepeat from "../components/JSONRepeat.vue";
import JSONColor from "../components/JSONColor.vue";

export default {
  components: {
    JSONEditor,
    JSONForm,
    JSONString,
    JSONRepeat,
    JSONColor
  }
};
</script>
