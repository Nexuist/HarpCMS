<template>
    <div class="form-group">
        <label :for="id">{{name}}</label>
        <br>
        <input type="color" :id="id" v-model="relativeJson" ref="colorPicker" :defaultValue="initialColor">
        <button type="button" v-on:click="reset" class="btn btn-default btn-small">
            <i class="fa fa-undo"></i>
        </button>
        <p v-if="help" class="help-block" v-html="help"></p>
    </div>

</template>

<script>
import JSONElement from "../scripts/JSONElement.js";
export default {
  mixins: [JSONElement],
  props: ["name", "path", "id", "help"],
  created: function() {
		this.initialColor = this.relativeJson;
	},
  methods: {
    reset: function() {
      this.$refs["colorPicker"].value = this.initialColor;
    }
  },
  data: function() {
    return {
      initialColor: "#ffffff"
    };
  }
};
</script>