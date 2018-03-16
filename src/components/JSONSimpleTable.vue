<template>
	<div :id="id">
		<label :for="id">{{name}}</label>
		
		<p v-if="help" class="help-block" v-html="help"></p>
		
		<div class="scroll-area">
			<table class="table table-striped table-hover table-condensed table-responsive" :id="id">
				<thead>
					<tr>
						<th>{{ column }}</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in relativeJSON" :key="index">
						<td>
							<input type="text" class="form-control" :value="item" :maxlength="maxlength" v-on:input="modifyIndex(index)">
						</td>
						<td>
							<button v-if="relativeJSON.length > 1" type="button" v-on:click="removeRow(index)" class="btn btn-small btn-danger">
								<i class="fa fa-minus-circle"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<button type="button" v-on:click="addRow" class="btn btn-success btn-add-row pull-right">
				<i class="fa fa-plus"></i>
				Add
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.scroll-area {
	overflow: auto;
	max-height: 30vh;
}
</style>

<script>
import JSONElement from "../scripts/JSONElement.js";
export default {
	mixins: [JSONElement],
	props: ["name", "path", "id", "help"],
	methods: {
		addRow: function () {
			this.relativeJSON.push("");
		},
		removeRow: function (index) {
			dialog.showMessageBox({
				type: "warning",
				buttons: ["Continue", "Cancel"],
				title: "Confirm Action",
				message: "Are you sure?"
			}, response => {
				if (!response) this.relativeJSON.splice(index, 1)
			});
		},
		modifyIndex: function (index) {
			this.relativeJSON[index] = event.target.value;
		}
	}
};
</script>