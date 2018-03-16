<template>
	<JSONForm page="index">
		<JSONString name="Name" path="['name']"></JSONString>
		<JSONString name="Phone Number" path="['phoneNumber']"></JSONString>
		<JSONRepeat name="Qualities" :path="['qualities']">
			<template slot-scope="parent">
				<JSONString name="Name" :path="`['qualities'][${parent.index}]['name']`"></JSONString>
				<JSONString name="Description" :path="`['qualities'][${parent.index}]['description']`" big="true"></JSONString>
				<JSONColor name="Background Color" :path="`['qualities'][${parent.index}]['backgroundColor']`"></JSONColor>
				<JSONString name="Glyph" :path="`['qualities'][${parent.index}]['glyph']`" help="Click <a href='http://getbootstrap.com/components/#glyphicons' target='_blank'>here</a> to view more glyphs (icons)."></JSONString>
			</template>
		</JSONRepeat>	
		<br />
		<JSONRepeat name="Gallery" :path="['gallery']">
			<template slot-scope="parent">
				<JSONString name="External Link" :path="`['gallery'][${parent.index}]['link']`" help="This is the page that is opened when the image is clicked."></JSONString>
				<JSONString name="Image Link" :path="`['gallery'][${parent.index}]['src']`" help="This is the actual link to the image."></JSONString>
				<JSONString name="Caption" :path="`['gallery'][${parent.index}]['caption']`" big="true"></JSONString>
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
