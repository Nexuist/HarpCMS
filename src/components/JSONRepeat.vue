<template>
    <div :id="id">
        <label :for="id">{{name}}</label>
        <p v-if="help" class="help-block" v-html="help"></p>
        <div class="well" v-for="(item, index) in relativeJson" :key="index">
            <button type="button" v-if="relativeJson.length > 1" v-on:click="removeRow(index)" class="btn btn-small btn-danger pull-right">
                <i class="fa fa-minus-circle"></i>
            </button>
            <br />
            <slot :item="item" :index="index"></slot>
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
      let self = this;
      //TODO: dialog!!
    //   dialog.showMessageBox(
    //     {
    //       type: "warning",
    //       buttons: ["Continue", "Cancel"],
    //       title: "Confirm Action",
    //       message: "Are you sure?"
    //     },
    //     response => {
    //       if (!response) {
    //         self.relativeJson.splice(index, 1);
    //       }
    //     }
    //   );
    }
  }
};
</script>