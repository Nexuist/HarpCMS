<template>
	<div class="form-group">
		<label :for="id">{{name}}</label>
		<textarea v-if="big" class="form-control" v-model="relativeJson"></textarea>
		<input v-else type="text" class="form-control" :id="id" v-model="relativeJson">
		<p v-if="help" class="help-block" v-html="help"></p>
	</div>
</template>

<script>
import JSONElement from "../scripts/JSONElement.js";

export default {
	mixins: [JSONElement],
	props: ["name", "path", "id", "big", "help"]
};
</script> 