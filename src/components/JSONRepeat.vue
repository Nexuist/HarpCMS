<template>
	<div :id="id" class="mt-1">
		<label :for="id">{{name}}</label>
		
		<p v-if="help" class="help-block" v-html="help"></p>
		
		<div class="card mb-4" v-for="(item, index) in relativeJson" :key="index">
			<div class="card-header">
				<button type="button" v-if="relativeJson.length > 1" v-on:click="removeRow(index)" class="btn btn-small btn-danger pull-right">
					<i class="fa fa-minus-circle"></i>
				</button>
			</div>
			
			<div class="card-body">
				<slot :item="item" :index="index"></slot>
			</div>
		</div>
		
		<button type="button" v-on:click="addRow" class="btn btn-success btn-add-row pull-right">
		<i class="fa fa-plus"></i> Add</button>
	</div>
</template>

<script>
import JSONElement from "../scripts/JSONElement.js";
export default {
	mixins: [JSONElement],
	props: ["name", "path", "id", "help"],
	methods: {
		addRow: function() {
			this.relativeJson.push(
			Object.assign({}, this.relativeJson[this.relativeJson.length - 1])
			);
		},
		removeRow: function(index) {
			var deleteConfirmed = confirm("Are you sure you want to delete this item?");
			if (deleteConfirmed) this.relativeJson.splice(index, 1);
		}
	}
};
</script>